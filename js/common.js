if(JSON.stringify(localStorage.getItem("TaiKhoan"))==null){
   localStorage.setItem('TaiKhoan',JSON.stringify([{user_name:"tienhai",password:"tienhai123",email:"tienhai@gmail.com"}]))
}

const goToTop = () => {
  document.documentElement.scrollTop = 0;
};
const addFooter = () => {
  document.write(`
   <div class="footer-home">
      <div class="grid">
         <div class="service-block">
            <h4 class="service-block-name">
               <i class="fa-solid fa-truck-fast"></i>
               Miễn phí vẫn chuyển
            </h4>
            <span>Khi Khách Hàng Chuyển Tiền Đặt Cọc</span>
         </div>
         <div class="service-block">
            <h4 class="service-block-name">
               <i class="fa-solid fa-gear"></i>
               Hoàn 100% tiền mua hàng
            </h4>
            <span> Trong vòng 7 ngày nếu bị lỗi NSX không sửa được </span>
         </div>
         <div class="service-block">
            <h4 class="service-block-name">
               <i class="fa-solid fa-phone"></i>
               Đặt hàng trực tuyến
            </h4>
            <span
               >Hotline:
            <a href="tel:0917509195" style="text-decoration: none"></a>
            0917509195</a
               >
            </span>
         </div>
         <div class="service-block">
            <h4 class="service-block-name">
               <i class="fa-solid fa-location-dot"></i>
               Địa chỉ cửa hàng
            </h4>
            <span>An Dương Vương Q5</span>
         </div>
      </div>
   </div>
   <div class="grid">
      <div class="footer2">
         <div class="service-block">
            <h4 class="service-block-name">
               THÔNG TIN HỖ TRỢ
            </h4>
            <span><a href="">Tìm trung tâm bảo hành</a></span>
            <span><a href="">Hướng dẫn mua ONLINE</a></span>
            <span><a href="">Thông báo</a></span>
         </div>
         <div class="service-block">
            <h4 class="service-block-name">
               DỊCH VỤ KHÁCH HÀNG
            </h4>
            <span><a href="">Giới thiệu về công ty</a></span>
            <span><a href="">Góp ý và khiếu nại</a></span>
            <span><a href="">Liên hệ</a></span>
         </div>
         <div class="service-block">
            <h4 class="service-block-name">
               DỊCH VỤ & HỖ TRỢ
            </h4>
            <span><a href="">Chính sách giao hàng</a></span>
            <span><a href="">Chính sách đổi trả sản phẩm</a></span>
            <span><a href="">Chính sách bảo hành</a></span>
         </div>
         <div class="service-block">
            <h4 class="service-block-name">
               BẢN TIN
            </h4>
            <p class="f222" id="f222_1">Đăng ký tên thành viên để nhận bản tin mỗi ngày:
            <div class="f22222"><input
               placeholder="Nhập email của bạn"><a href=""><button>GỬI</button></a>
            </div>
            </p>
         </div>
      </div>
      <hr width="100%" noshade="noshade">
      <div class="footer3">
         <div class="f3">
            <ul id="f3_1">
               <li><a href=""> <img src="img/logo.jpg" alt=""> </a></li>
               <li><a href=""> <img src="img/huong-dan-dang-ky-website-voi-Bo-Cong-Thuong-2.png" alt="">
                  </a>
               </li>
            </ul>
         </div>
         <div class="f3 f3-info">
            <ul>
               <li>
                  <a href="">
                  <i class="fa-solid fa-location-dot"></i>
                  - Địa chỉ:273, An Dương Vương, phường 3, quận 5, TPHCM
                  </a>
               </li>
               <li><a href=""><i class="fa-solid fa-phone"></i>-Điện thoại: 0917509195</a></li>
               <li><a href=""><i class="fa-solid fa-envelope"></i>-Địa chỉ mail:
                  smartphonestore.vn@gmail.com</a>
               </li>
            </ul>
         </div>
         <div class="f3">
            <ul class="f3_3">
               <li><a href="">Bản quyền thuộc về smartphonestore</a></li>
               <li class="f3_3_1">
                  <ul>
                     <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                     <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                     <li><a href=""><i class="fa-brands fa-google-plus-g"></i></a></li>
                     <li><a href=""><i class="fa-solid fa-wifi"></i></a></li>
                     <li><a href=""><i class="fa-brands fa-youtube"></i></a></li>
                  </ul>
               </li>
            </ul>
         </div>
      </div>
   </div>
   `);
};

const checkStatusLogin = () => {
   const account = JSON.parse(localStorage.getItem("AccountLogin"))
   return account != null;
}
const addHeader = () => {
   const account = JSON.parse(localStorage.getItem("AccountLogin"))
   
  document.write(`
   <div class="header">
      <div class="header1">
         <ul>
            <li>
               <a href="index.html">
               <i class="fa-solid fa-house"></i> 
               Trang chủ
               </a>
            </li>
            <li>
               <a href="tintuc.html">
               <i class="fa-solid fa-newspaper"></i> 
               Tin tức
               </a>
            </li>
            <li>
               <a href="tuyendung.html">
               <i class="fa-solid fa-handshake"></i> 
               Tuyển dụng
               </a>
            </li>
            <li>
               <a href="gioithieu.html">
               <i class="fa-sharp fa-solid fa-circle-info"></i> 
               Giới thiệu
               </a>
            </li>
            <li>
               <a href="baohanh.html">
               <i class="fa-solid fa-wrench"></i> 
               Bảo hành
               </a>
            </li>
            <li>
               <a href="lienhe.html">
               <i class="fa-solid fa-phone"></i> 
               Liên hệ
               </a>
            </li>
         </ul>
      </div>
      <div class="header2">
         <ul>
            <li><a href="index.html"> <img src="img/logo.jpg" alt=""> </a></li>
            <li class="input"><input placeholder="Bạn muốn tìm gì? "><a href=""><i
               class="fa-solid fa-magnifying-glass"></i></a>
            <li id="user1" class="user">
               <a href="" class="acount">
                  <i class="fa-solid fa-user" id="user2"></i>
                  ${ account==null ? "Tai Khoan" : account.user_name }
                  <ul class="sub">
                     <li id="sub1">
               <a href="" >Trang người dùng</a>
               </li>   
               <li id="sub1">
               ${account==null ? `<a href="#"  onclick="onForm()" > Dang nhap </a>` : `<a href="#"  onclick="onLogout()" >Dang xuat</a>`}
               </li>
               </ul></a>
            </li>
            <li id="cart" class="cart"><a href="giohang_dangnhap.html"><i class="fa-solid fa-cart-shopping"></i> Giỏ hàng</a></li>
            </li>
         </ul>
      </div>
      <div class="header3">
         <ul>
            <li id="h3"><a href=""><b>Từ khóa:</b> </a></li>
            <li class="h3_1"><a href="">Samsung</a></li>
            <li class="h3_1"><a href="">Huawei</a></li>
            <li class="h3_1"><a href="">Iphone</a></li>
            <li class="h3_1"><a href="">Oppo</a></li>
            <li class="h3_1"><a href="">Mobi</a></li>
         </ul>
      </div>
      <hr width="100%" noshade="noshade">
   </div>
   `);
};

const onLogout = ()=>{
   const check = confirm("Ban co chac chan muon thoat?")
   if(check){
      localStorage.setItem("AccountLogin",JSON.stringify(null))
   location.reload()
   }
}

const addForm = () => {
  document.write(`
    <div class="container-form" onclick="onOutside(event)" >
    <div class="form">
      <div class="button-box">
        <div class="bar-button"></div>
        <button class="btn-login" onclick="onRegister()">Log In</button>
        <button class="btn-register" onclick="onLogin()">Register</button>
      </div>
      <div class="icons">
        <i class="fa-brands fa-facebook-f"></i
        ><i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-google"></i>
      </div>
 
      <div class="group-input group1">
        <input class="input_form user_name" type="text" placeholder="User Name" />
        <span class="error error_user_name"></span>
        <input
          class="input_form password"
          type="password"
          placeholder="Enter Password"
        />
        <span class="error error_password"></span>
        <input class="check" type="checkbox" />
        <span>Remember Password</span>
        <div class="group-btn">
             <button onclick="offForm()">Exit</button>
             <button class="login">Log in</button>
           </div>
      </div>

      <div class="group-input group2">
        <input class="input_form user_name" type="text" placeholder="User Name" />
        <span class="error error_user_name"></span>
        <input class="input_form email"  type="email" placeholder="Email Id" />
        <span class="error error_email"></span>
        <input
          class="input_form password"
          type="password"
          placeholder="Enter Password"
        />
        <span class="error error_password"></span>
        <input class="check" type="checkbox" />
        <span>I agree to the Terms & Condition </span>
        <div class="group-btn">
             <button onclick="offForm()">Exit</button>
             <button class="rgt" >Register</button>
           </div>
      </div>
    </div>
  </div>`);
};

const onOutside = (event) => {
  const ignoreClickOnMeElement = document.querySelector(".form");
  const isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
  if (!isClickInsideElement) {
    offForm();
  }

};

const resetForm = ()=>{
   document.querySelector(".group1 .user_name").value = "";
   document.querySelector(".group1 .password").value = "";
   document.querySelector(".group2 .user_name").value = "";
   document.querySelector(".group2 .password").value = "";
   document.querySelector(".group2 .email").value = "";

   const errs = document.querySelectorAll(".error")
   if(errs!=null){
      errs.forEach(item=>item.innerHTML = "")
   }
}

const onForm = () => {
  const form = document.querySelector(".container-form");
  form.classList.add("active");

  const user_name1 = document.querySelector(".group1 .user_name")
   const password1 = document.querySelector(".group1 .password")

   const user_name2 = document.querySelector(".group2 .user_name")
   const password2 = document.querySelector(".group2 .password")
   const email = document.querySelector(".group2 .email")


   document.querySelector('.login').onclick = ()=>{
      let arr = JSON.parse(localStorage.getItem('TaiKhoan'));
        const name = user_name1.value.trim()
        const pass = password1.value.trim()
        let checkLogin = true
        if(name.length <= 0){
          console.log("UserName khong duoc de trong!")
          document.querySelector(".group1 .error_user_name").innerHTML = "UserName khong duoc de trong!"
          checkLogin = false
         }
         
         if(pass.length < 8){
            document.querySelector(".group1 .error_password").innerHTML = "Password it nhat 8 ki tu!"
            console.log("Password it nhat 8 ki tu!")
            password1.value = ""
            checkLogin = false
         }
         if(checkLogin){
            let checkAccount = false
         arr.forEach(item=>{
            if(item.user_name==name && item.password == pass){
               checkAccount = true
            }
         })
         if(checkAccount){
            obj = {
               user_name: name, password: pass
            }
            localStorage.setItem("AccountLogin",JSON.stringify(obj))
         }else{
            document.querySelector(".group1 .error_password").innerHTML = "Password khong dung!"
            password1.value = ""
           checkLogin = false
        }
         }

        if(checkLogin){
            const arr = JSON.parse(localStorage.getItem("TaiKhoan"))
            arr.forEach(item=>{
               if(item.user_name==name && item.password == pass) {
                  localStorage.setItem("AccountLogin",JSON.stringify(item))
                  offForm();
                  alert("Ban da dang nhap thanh cong!")
                  location.reload();
               }
            })
        }

      }

      document.querySelector('.rgt').onclick = ()=>{
         let arr = JSON.parse(localStorage.getItem('TaiKhoan'));
        let name = user_name2.value.trim()
        let pass = password2.value.trim()
        let email_value = email.value.trim()

        let checkRegister = true;
        if(name.length <= 0){
          console.log("UserName khong duoc de trong!")
          document.querySelector(".group2 .error_user_name").innerHTML = "UserName khong duoc de trong!"
          checkRegister = false;
         }
         let checkTrung = false;
         console.log(arr);
         arr.forEach(item=>{
            if(item.user_name==name){
               checkTrung = true;
               checkRegister= false;
            }
         })
         if(checkTrung){
            document.querySelector(".group2 .error_user_name").innerHTML = "UserName da ton tai!"
         }
         if(email_value.length <= 0){
            console.log("Email khong duoc de trong!")
            document.querySelector(".group2 .error_email").innerHTML = "Email khong duoc de trong!"
            checkRegister = false;
         }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_value))){
            document.querySelector(".group2 .error_email").innerHTML = "Email khong hop le!"
            checkRegister = false;
         }
         if(pass.length < 8){
            document.querySelector(".group2 .error_password").innerHTML = "Password it nhat 8 ki tu!"
            console.log("Password it nhat 8 ki tu!")
            password2.value = ""
            checkRegister = false;
        }

        if(checkRegister){
         obj = {
            user_name: name, password: pass, email: email_value
         }
         localStorage.setItem("AccountLogin",JSON.stringify(obj))
         localStorage.setItem("TaiKhoan",JSON.stringify([...arr,obj]))
         alert("Ban da dang nhap bang tai khoan moi!")
         offForm()
         location.reload()
        }
      }


};


const offForm = () => {
   resetForm()
  const form = document.querySelector(".container-form");
  form.classList.remove("active");
};

const onLogin = () => {
   resetForm()
  const gr1 = document.querySelector(".group1");
  const gr2 = document.querySelector(".group2");
  const x = document.querySelector(".btn-register");
  const y = document.querySelector(".btn-login");
  const bar = document.querySelector(".bar-button");
  bar.style.left = "90px";
  gr1.style.left = "-200px";
  gr2.style.right = "50%";
  x.style.color = "white";
  y.style.color = "black";
};

const onRegister = () => {
   resetForm()
  const gr1 = document.querySelector(".group1");
  const gr2 = document.querySelector(".group2");
  const x = document.querySelector(".btn-register");
  const y = document.querySelector(".btn-login");
  const bar = document.querySelector(".bar-button");
  x.style.color = "black";
  y.style.color = "white";
  bar.style.left = "0px";
  gr1.style.left = "50%";
  gr2.style.right = "-200px";
};

// const handleActive = () => {
//   const listItem = document.querySelectorAll(".header-item");
//   console.log(listItem);
//   listItem.forEach((item) => {
//     item.onclick = () => item.classList.add("active");
//   });
// };




      

