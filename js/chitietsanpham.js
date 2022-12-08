
const convertPrice = (str)=>{
    arr = str.split(".")
    str = arr.join("")
    return parseInt(str)
}
const detailProduct = ()=>{
    let arr = window.location.href.split('?')

    let listProduct = JSON.parse(localStorage.getItem('ListProduct'))

    let strDetail = arr[1];
    if(strDetail.indexOf('#')!=-1){
        strDetail = arr[1].slice(0,-1);
    }

    const product = listProduct.find(item=>item.masp == strDetail || item.img.indexOf(strDetail) != -1 )
    console.log(product);

    let item = `<h1 style="font-family: Helvetica">${product.name}</h1>
   <div class="rating">
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star-half-stroke"></i>
       <span>${product.rateCount} đánh giá</span></div>
   <div class="rowdetail group">
       <div class="picture">
           <img src=${product.img}>
       </div>
       <div class="price_sale">
           <div class="area_price" style="font-family: sans-serif"><strong>${product.price}</strong>
                   <span style="font-family: sans-serif">${ (convertPrice(product.price) + 2000000).toLocaleString('de-DE')}₫</span></div>
           <div class="ship">
               <i class="fa-solid fa-clock-rotate-left"></i>
               <div style="font-family: sans-serif">NHẬN HÀNG TRONG 1 GIỜ</div>
           </div>
           <div class="area_promo">
               <strong>khuyến mãi</strong>
               <div class="promo">
                   <img src="img/chitietsanpham/icon-tick.png">
                   <div id="detailPromo">Sản phẩm sẽ được giảm <span style="font-weight: bold">1.000.000</span>₫ khi mua hàng online</div>
               </div>
           </div>
           <div class="policy">
               <div>
                   <i class="fa-solid fa-check"></i>
                   <p>Trong hộp có: Sạc, Tai nghe, Sách hướng dẫn, Cây lấy sim, Ốp lưng </p>
               </div>
               <div>
                   <i class="fa-solid fa-check"></i>
                   <p>Bảo hành chính hãng 12 tháng.</p>
               </div>
               <div class="last">
                   <i class="fa-solid fa-check"></i>
                   <p>1 đổi 1 trong 1 tháng nếu lỗi, đổi sản phẩm tại nhà trong 1 ngày.</p>
               </div>
           </div>
           <div class="area_order">
               <a class="buy_now btn-add" onclick="showSuccessToast();">
                   <b><i class="fa fa-cart-plus"></i> Thêm vào giỏ hàng</b>
                   <p>Giao trong 1 giờ hoặc nhận tại cửa hàng</p>
               </a>
           </div>
       </div>
       <div class="info_product">
           <h2 style="font-family: sans-serif">Thông số kỹ thuật</h2>
           <ul class="info"><li>
       <p>Màn hình</p>
       <div>${product.detail.screen}</div>
   </li><li>
       <p>Hệ điều hành</p>
       <div>${product.detail.os}</div>
   </li><li>
       <p>Camara sau</p>
       <div>${product.detail.camara}</div>
   </li><li>
       <p>Camara trước</p>
       <div>${product.detail.camaraFront}</div>
   </li><li>
       <p>CPU</p>
       <div>${product.detail.cpu}</div>
   </li><li>
       <p>RAM</p>
       <div>${product.detail.ram}</div>
   </li><li>
       <p>Bộ nhớ trong</p>
       <div>${product.detail.rom}</div>
   </li><li>
       <p>SIM</p>
       <div>${product.detail.microUSB}</div>
   </li><li>
       <p>Pin, Sạc</p>
       <div>${product.detail.battery}</div>
   </li></ul>
       </div>
   </div>
   <div id="overlaycertainimg" class="overlaycertainimg" style="transform: scale(0);">
       <div class="close" onclick="closecertain()">×</div>
       <div class="overlaycertainimg-content">
           <img id="bigimg" class="bigimg" src="https://tienhai488.github.io/DoAnWeb1/img/chitietsanpham/oppo-f9-mau-do-2-org.jpg">
           <div class="div_smallimg owl-carousel owl-loaded owl-drag">
               <!-- <img src="img/chitietsanpham/oppo-f9-mau-do-1-org.jpg" onclick="changepic(this.src)">
               <img src="img/chitietsanpham/oppo-f9-mau-do-2-org.jpg" onclick="changepic(this.src)">
               <img src="img/chitietsanpham/oppo-f9-mau-do-3-org.jpg" onclick="changepic(this.src)"> -->
           <div class="owl-stage-outer"><div class="owl-stage" style="transition: all 0s ease 0s; width: 1477px; transform: translate3d(422px, 0px, 0px);"><div class="owl-item active center" style="width: 211px;"><div class="item">
               <a>
                   <img src="img/products/huawei-mate-20-pro-green-600x600.jpg" onclick="changepic(this.src)">
               </a>
           </div></div><div class="owl-item active" style="width: 211px;"><div class="item">
               <a>
                   <img src="img/chitietsanpham/oppo-f9-mau-do-1-org.jpg" onclick="changepic(this.src)">
               </a>
           </div></div><div class="owl-item active" style="width: 211px;"><div class="item">
               <a>
                   <img src="img/chitietsanpham/oppo-f9-mau-do-2-org.jpg" onclick="changepic(this.src)">
               </a>
           </div></div><div class="owl-item" style="width: 211px;"><div class="item">
               <a>
                   <img src="img/chitietsanpham/oppo-f9-mau-do-3-org.jpg" onclick="changepic(this.src)">
               </a>
           </div></div><div class="owl-item" style="width: 211px;"><div class="item">
               <a>
                   <img src="img/products/huawei-mate-20-pro-green-600x600.jpg" onclick="changepic(this.src)">
               </a>
           </div></div><div class="owl-item" style="width: 211px;"><div class="item">
               <a>
                   <img src="img/chitietsanpham/oppo-f9-mau-do-3-org.jpg" onclick="changepic(this.src)">
               </a>
           </div></div><div class="owl-item" style="width: 211px;"><div class="item">
               <a>
                   <img src="img/products/huawei-mate-20-pro-green-600x600.jpg" onclick="changepic(this.src)">
               </a>
           </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button></div></div>
       </div>
   </div>`

   const chiTiet = document.querySelector('.chitietSanpham')
   chiTiet.innerHTML = item
}

detailProduct()
