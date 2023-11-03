console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});





function checkAccount() {
	const email_value = document.querySelector(".email-input-login").value.trim();
	const password_value = document.querySelector(".password-input-login").value.trim();
  
	if (email_value !== "" || password_value !== "") {
	  let get_email = localStorage.getItem("email");
	  get_email = JSON.parse(get_email);
  
	  let get_pass = localStorage.getItem("password");
	  get_pass = JSON.parse(get_pass);
  
	  let isMatch = false;
		
	  for(let i in get_email){
		if(get_email[i] === email_value && get_pass[i] === password_value){
			isMatch = true;
			break;
		}
	  }
  
	  if (isMatch) {
		alert('Đăng nhập thành công');
		location.href = "index.html";
	  } else {
		alert("Đăng nhập không thành công");
	  }
	}
  }
  
  const submit_btn_login = document.querySelector('.submit-btn-login');
  submit_btn_login.addEventListener("click", function(event) {
	event.preventDefault()
	checkAccount();
  });
  
  function register() {
	let email_value = document.querySelector('.email-input').value.trim();
	let password_value = document.querySelector('.password-input').value.trim();
	let repassword_value = document.querySelector('.repassword-input').value.trim();
  
	let user_email_list = localStorage.getItem("email")
	user_email_list = JSON.parse(user_email_list) ? JSON.parse(user_email_list) : [];
	
	let user_password_list = localStorage.getItem("password");
	user_password_list = JSON.parse(user_password_list)? JSON.parse(user_password_list) : [];
	let isMatch = false;
	if(email_value === "" || password_value === "" || repassword_value === "") {
		alert("Vui lòng nhập đầy đủ thông tin")
  	}else{
		if (password_value !== repassword_value) {
			alert("Mật khẩu không khớp")
			} else {
			for (const account of user_email_list) {
				if (email_value === account) {
				alert("Email đã tồn tại")
				isMatch = true;
				break;
				}
			}
			if (isMatch === false) {
				user_email_list.push(email_value)
				user_password_list.push(password_value)
				localStorage.setItem("email", JSON.stringify(user_email_list))
				localStorage.setItem("password", JSON.stringify(user_password_list))
				alert("Đăng ký thành công")
				// reset value
				document.querySelector('.email-input').value = "";
				document.querySelector('.password-input').value = "";
				document.querySelector('.repassword-input').value = "";

				
			}
			}
	}


}
  const register_btn = document.querySelector('.submit-btn-register');
  register_btn.addEventListener("submit", function(event) {
	event.preventDefault();
	register();
  });