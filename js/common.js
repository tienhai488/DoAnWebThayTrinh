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

const addHeader = () => {
  document.write(`
   <div class="header">
      <div class="header1">
         <ul>
            <li>
               <a href="home.html">
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
            <li><a href=""> <img src="img/logo.jpg" alt=""> </a></li>
            <li class="input"><input placeholder="Bạn muốn tìm gì? "><a href=""><i
               class="fa-solid fa-magnifying-glass"></i></a>
            <li id="user1" class="user">
               <a href="" class="acount">
                  <i class="fa-solid fa-user" id="user2"></i>
                  Tài khoản
                  <ul class="sub">
                     <li id="sub1">
               <a href="" >Trang người dùng</a>
               </li>   
               <li id="sub1">
               <a href="#"  onclick="onForm()" >Đăng nhập</a>
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
        <input class="input_form" type="text" placeholder="User Name" />
        <input
          class="input_form"
          type="password"
          placeholder="Enter Password"
        />
        <input class="check" type="checkbox" />
        <span>Remember Password</span>
        <div class="group-btn">
             <button onclick="offForm()">Exit</button>
             <button >Log in</button>
           </div>
      </div>
      <div class="group-input group2">
        <input class="input_form" type="text" placeholder="User Name" />
        <input class="input_form" type="password" placeholder="Email Id" />
        <input
          class="input_form"
          type="password"
          placeholder="Enter Password"
        />
        <input class="check" type="checkbox" />
        <span>I agree to the Terms & Condition </span>
        <div class="group-btn">
             <button onclick="offForm()">Exit</button>
             <button >Register</button>
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

const onForm = () => {
  const form = document.querySelector(".container-form");
  form.classList.add("active");
};

const offForm = () => {
  const form = document.querySelector(".container-form");
  form.classList.remove("active");
};

const onLogin = () => {
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
