const btns = document.querySelectorAll(".btn-add")

btns.forEach((item,index)=>{
  const account = JSON.parse(localStorage.getItem("AccountLogin"))
    item.onclick = ()=>{

        if(account!=null){
          parent = item.parentElement
        let nameProduct = parent.querySelector('h3').innerHTML
        let priceProduct = parent.querySelector('.product-item-price strong').innerHTML

        let arr = priceProduct.split(".")
        let result = ""
        for(var i=0;i<arr.length-1;i++){
            result += arr[i]
        }
        result += "000"
        toast({
          title: "Thành công!",
          message: `Đã thêm vào giỏ hàng sản phẩm ${nameProduct}!`,
          type: "success",
          duration: 1000
        });

        addData(nameProduct,result)
        }else {
          toast({
            title: "Thất bại!",
            message: `Bạn chưa đăng nhập tài khoản!`,
            type: "danger",
            duration: 1000
          });
          onForm()
        }
    }
})

const addData = (nameProduct,result)=>{
  let arr = localStorage.getItem("DanhSachGioHang");
  if(arr != null){
    arr = JSON.parse(arr);
  }else {
    arr = []
  }
  let checkContain = false
  arr.forEach(element => {
    if(nameProduct==element.name){
      element.quantity += 1
      checkContain = true
    }
  });
  if(!checkContain){
    arr = [...arr,{name:nameProduct,price:result,quantity:1}]
  }
  console.log(arr);
  localStorage.setItem("DanhSachGioHang",JSON.stringify(arr))
}

const addCart = ()=>{
  let arr = localStorage.getItem("DanhSachGioHang");
  if(arr != null){
    arr = JSON.parse(arr);
  }else {
    arr = []
  }
  let sum = 0;
  var date = new Date();
  const strTime = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`

  arr.forEach((item,index)=>{
    const num = parseInt(item.price);
    const total = num * item.quantity
    sum += total
    let addTr = "";
   addTr = document.createElement('tr');
    let trContent = `
    <td>${index + 1}</td>
    <td class="noPadding imgHide">
      <a class="link-cart" href="#" title="Xem Chi Tiết">
        ${item.name}
      </a>
    </td>
    <td class="alignRight">${num.toLocaleString('de-DE')} ₫</td>
    <td class="soluong">
      <button onclick="giamSoLuong(${index})">
        <i  class="fa fa-minus"></i>
      </button>
      <input
        size="1"
        value="${item.quantity}"
      />
      <button onclick="tangSoLuong(${index})">
        <i  class="fa fa-plus"></i>
      </button>
    </td>
    <td class="alignRight">${total.toLocaleString('de-DE')} ₫</td>
    <td style="text-align: center">${strTime}</td>
    <td class="noPadding">
      <i  onclick = "xoaSanPham(${index})" class="fa fa-trash" ></i>
    </td>
  `;
  addTr.innerHTML = trContent
  const tbodyElement = document.querySelector(".listsanpham tbody")
  if (tbodyElement!=null) {
    tbodyElement.append(addTr)
  }
  })

  let addTr = "";
   addTr = document.createElement('tr');
  trContent = `<tr style="font-weight: bold; text-align: center">
  <td colspan="4">TỔNG TIỀN</td>
  <td class="alignRight">${sum.toLocaleString('de-DE')} ₫</td>
  <td class="thanhtoan" onclick="thanhToan()" >Thanh Toán</td>
  <td class="xoahet" onclick="xoaHetGioHang()" style="text-align:center">Xóa Hết</td>
</tr>`
addTr.innerHTML = trContent
  const tbodyElement = document.querySelector(".listsanpham tbody")
  if (tbodyElement!=null) {
    tbodyElement.append(addTr)
  }


}

const xoaHetGioHang = ()=>{
  let check = confirm("Bạn đồng ý xóa tất cả?")
  if(check){
    localStorage.setItem("DanhSachGioHang",JSON.stringify([]));
    const tbodyElement = document.querySelector(".listsanpham tbody")
    tbodyElement.innerHTML = ""
    addCart();
  }
  
}

const thanhToan = ()=> {
  let check = confirm("Bạn đồng ý thanh toán tất cả?")
  if(check){
    localStorage.setItem("DanhSachGioHang",JSON.stringify([]));
    const tbodyElement = document.querySelector(".listsanpham tbody")
    tbodyElement.innerHTML = ""
    addCart();
  }
}

const xoaSanPham = (index)=>{
  let check = confirm("Bạn đồng ý muốn xóa ?")
  if(check){
    let arr = localStorage.getItem("DanhSachGioHang");
  if(arr != null){
    arr = JSON.parse(arr);
    arr.splice(index,1)
    localStorage.setItem("DanhSachGioHang",JSON.stringify(arr))
    const tbodyElement = document.querySelector(".listsanpham tbody")
    tbodyElement.innerHTML = ""
    addCart();
    return;
  }else {
    arr = []
  }
  localStorage.setItem("DanhSachGioHang",JSON.stringify(arr))
  }
  
}

const tangSoLuong = (index)=>{
  let arr = localStorage.getItem("DanhSachGioHang");
  if(arr != null){
    arr = JSON.parse(arr);
    arr[index].quantity += 1
    console.log(arr[index].quantity);
    localStorage.setItem("DanhSachGioHang",JSON.stringify(arr))
    const tbodyElement = document.querySelector(".listsanpham tbody")
    tbodyElement.innerHTML = ""
    addCart();
    return;
  }else {
    arr = []
    localStorage.setItem("DanhSachGioHang",JSON.stringify(arr))
  }
}

const giamSoLuong = (index)=>{
  let arr = localStorage.getItem("DanhSachGioHang");
  if(arr != null){
    arr = JSON.parse(arr);
    if(arr[index].quantity>1){
      arr[index].quantity -= 1
    }
    console.log(arr[index].quantity);
    localStorage.setItem("DanhSachGioHang",JSON.stringify(arr))
    const tbodyElement = document.querySelector(".listsanpham tbody")
    tbodyElement.innerHTML = ""
    addCart();
    return;
  }else {
    arr = []
    localStorage.setItem("DanhSachGioHang",JSON.stringify(arr))
  }
}




