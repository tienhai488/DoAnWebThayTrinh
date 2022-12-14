
const addFilter = (key,value)=>{
    
    let arr = window.location.href.split('?')
    if(arr[0].indexOf("http://127.0.0.1:5500/index.html")!=-1){
        console.log(arr[0]);
    }
    let obj = JSON.parse(localStorage.getItem("Filter"))
    obj[key] = value
    obj['check'] = true
    localStorage.setItem("Filter",JSON.stringify(obj))
    setFilter()
}
localStorage.setItem("Filter",JSON.stringify({"check":false}))

const convertPrice = (str)=>{
    arr = str.split(".")
    str = arr.join("")
    return parseInt(str)
}

// console.log(JSON.parse(localStorage.getItem('Filter')).promo);

const setFilter = ()=>{
    // location.replace('http://127.0.0.1:5500/index.html')
    const frameFilter = document.querySelector('.produc-frame-filter')
    const hr_filter = document.querySelector('.hr-filter')
    let filterProduct = JSON.parse(localStorage.getItem("Filter"))
    console.log(filterProduct);
    const listFrame = document.querySelectorAll(".product-frame")
    const listNganCach = document.querySelectorAll(".nganCach")
    if(filterProduct.check){
        listFrame.forEach(item=>item.style.display = "none")
        listNganCach.forEach(item=>item.style.display="none")

        const frameFilter = document.querySelector('.produc-frame-filter')
        frameFilter.style.display = "block"

        let strItem = "";

        let arr = JSON.parse(localStorage.getItem("ListProduct"))

        if(filterProduct.company){
            arr = [...arr.filter(item=>{
                let str1 = item.name.toLowerCase()
                let str2 = filterProduct.company.toLowerCase()
                return str1.indexOf(str2) != -1
            })]
        }

        if(filterProduct.promo){
            if(filterProduct.promo != 'all'){
                arr = [...arr.filter(item=>{
                    return item.promo.name == filterProduct.promo
                })]
            }
        }

        if(filterProduct.price){
            
            arr = [...arr.filter(item=>{
                return convertPrice(item.price) >= filterProduct.price[0]*1000000 && convertPrice(item.price) <= filterProduct.price[1]*1000000
            })]
        }

    
        if(filterProduct.star){
            
            arr = [...arr.filter(item=>{
                return filterProduct.star < item.star
            })]
        }

        if(filterProduct.sorted){
            if(filterProduct.sorted == 'tang'){
                arr.sort((a,b)=>a-b)
            }
            else if(filterProduct.sorted == 'giam'){
                arr.sort((a,b)=>convertPrice(b.price) - convertPrice(a.price))
            }
            else if(filterProduct.sorted == 'az'){
                arr.sort((a,b)=>{
                    if (a.name < b.name)
                    return -1;
                    if ( a.name > b.name)
                    return 1;
                    return 0;
                })
            }
            else if(filterProduct.sorted == 'za'){
                arr.sort((a,b)=>{
                    if (a.name < b.name)
                    return 1;
                    if ( a.name > b.name)
                    return -1;
                    return 0;
                })
            }
        }

        if(filterProduct.search){
            
            arr = [...arr.filter(item=>{
                let str1 = item.name.toLowerCase()
                let str2 = filterProduct.search.toLowerCase()
                return str1.indexOf(str2) != -1
            })]
        }


        arr.forEach(item=>{
        let strStart = "";
        for(let i=0;i<item.star;i++){
            strStart += `<i class="fa-solid fa-star"></i>`;
        }
        for(let i = 0;i<5 - item.star;i++){
            strStart += `<i class="fa-regular fa-star"></i>`
        }
        strItem += `<li class="product-frame-item">
            <a href="chitietsanpham.html?${item.masp}" class="product-item">
            <img
                src="${item.img}"
                alt=""
            />
            <h3 class="product-item-name">${item.name}</h3>
            <div class="product-item-price">
                <strong>${item.price}???</strong>
                <span>${item.promo.name == "giareonline" ? item.promo.value:""}</span>
            </div>
            <div class="product-item-rating">
                ${strStart}
                <span>${item.rateCount} ????nh gi??</span>
            </div>
            ${item.promo.name=="moiramat" ? `<label class="new-product">M???i ra m???t</label>` : ""} 
            ${item.promo.name=="giareonline" ? `<label class="cheap-product">Gi?? r??? online</label>` : ""} 
            ${item.promo.name=="tragop" ? `<label class="cheap-product">Tr??? g??p 0%</label>` : ""} 
            ${item.promo.name=="giamgia" ? `<label class="discount-product">
            <i class="fa-solid fa-bolt"></i>
            Gi???m ${item.promo.value}???
            </label>` : ""} 
            
            </a>
          <button onclick="resetBtn()" class="btn-add" >
            +
            <label class="btn-add-title">Th??m v??o gi??? </label>
          </button>
      </li>`
    })

    if(strItem == ""){
        strItem = `<h1 style="text-align:center;color:red">Kh??ng t??m th???y s???n ph???m n??o!</h1>`
    }

    const productList = frameFilter.querySelector(".product-frame-list")
    hr_filter.style.display = "block"

    productList.innerHTML = strItem
    addBtn();
    resetBtn()
    }else {
        listFrame.forEach(item=>item.style.display = "block")
        listNganCach.forEach(item=>item.style.display="block")
        frameFilter.style.display = "none"
        hr_filter.style.display = "none"
    }
 }
 
 setFilter()

 const filterSearch = ()=>{
    const input_search = document.querySelector(".input-search-header")
    addFilter('search',input_search.value)
 }

 const resetFilter = ()=>{
    localStorage.setItem("Filter",JSON.stringify({"check":false}))
    const input_search = document.querySelector(".input-search-header")
    input_search.value = ""
    setFilter()
    const filterBtn = document.querySelector(".filterProduct")
    filterBtn.innerHTML = ""
 }

 const deleteFilter = (key)=>{
    let obj = JSON.parse(localStorage.getItem('Filter'))
    delete obj[key];
    
    if(Object.keys(obj).length == 1){
        obj.check = false
    }
    localStorage.setItem('Filter',JSON.stringify(obj))
    setFilter()
    addBtn()
 }

 const addBtn = ()=>{
    let filterProduct = JSON.parse(localStorage.getItem("Filter"));
    const filterBtn = document.querySelector(".filterProduct")
    
    if(filterProduct.check){
        let strBtn = `<button onclick="resetFilter()" class="btn-filter-select">X??a b??? l???c</button>`;
        if(filterProduct.company){
            strBtn += `<button onclick="deleteFilter('company')" class="btn-filter-select">${filterProduct.company}<i class="fa-solid fa-xmark"></i></button>`
        }

        if(filterProduct.price){
            if(filterProduct.price[0]==0){
                strBtn += `<button onclick="deleteFilter('price')" class="btn-filter-select">Du???i 2 tri???u<i class="fa-solid fa-xmark"></i></button>`
            }else if(filterProduct.price[0]==2){
                strBtn += `<button onclick="deleteFilter('price')" class="btn-filter-select">T??? 2 - 4 tri???u<i class="fa-solid fa-xmark"></i></button>`;
            }else if(filterProduct.price[0]==4){
                strBtn += `<button onclick="deleteFilter('price')" class="btn-filter-select">T??? 4 - 7 tri???u<i class="fa-solid fa-xmark"></i></button>`;
            }else if(filterProduct.price[0]==7){
                strBtn += `<button onclick="deleteFilter('price')" class="btn-filter-select">T??? 7 - 13 tri???u<i class="fa-solid fa-xmark"></i></button>`;
            }else if(filterProduct.price[0]==13){
                strBtn += `<button onclick="deleteFilter('price')" class="btn-filter-select">Tr??n 13 tri???u<i class="fa-solid fa-xmark"></i></button>`;
            }
        }

        if(filterProduct.promo){
            if(filterProduct.promo != 'all'){
               if(filterProduct.promo=="tragop"){
                strBtn += `<button onclick="deleteFilter('promo')" class="btn-filter-select">Tr??? g??p<i class="fa-solid fa-xmark"></i></button>`
               }else if(filterProduct.promo=="giamgia"){
                strBtn += `<button onclick="deleteFilter('promo')" class="btn-filter-select">Gi???m gi??<i class="fa-solid fa-xmark"></i></button>`
               }else if(filterProduct.promo=="giareonline"){
                strBtn += `<button onclick="deleteFilter('promo')" class="btn-filter-select">Gi?? r??? online<i class="fa-solid fa-xmark"></i></button>`
               }else if(filterProduct.promo=="moiramat"){
                strBtn += `<button onclick="deleteFilter('promo')" class="btn-filter-select">M???i ra m???t<i class="fa-solid fa-xmark"></i></button>`
               }
            }else {
                strBtn += `<button onclick="deleteFilter('promo')" class="btn-filter-select">N???i b???t<i class="fa-solid fa-xmark"></i></button>`
            }
        }

        if(filterProduct.star){
            if(filterProduct.star==2){
                strBtn += `<button onclick="deleteFilter('star')" class="btn-filter-select">Tr??n 2 sao<i class="fa-solid fa-xmark"></i></button>`
            }else if(filterProduct.star==3){
                strBtn += `<button onclick="deleteFilter('star')" class="btn-filter-select">Tr??n 3 sao<i class="fa-solid fa-xmark"></i></button>`;
            }else if(filterProduct.star==4){
                strBtn += `<button onclick="deleteFilter('star')" class="btn-filter-select">Tr??n 4 sao<i class="fa-solid fa-xmark"></i></button>`;
            }
        }

        if(filterProduct.sorted){
            if(filterProduct.sorted == 'tang'){
                strBtn += `<button onclick="deleteFilter('sorted')" class="btn-filter-select">Gi?? t??ng d???n<i class="fa-solid fa-xmark"></i></button>`;
            }
            else if(filterProduct.sorted == 'giam'){
                strBtn += `<button onclick="deleteFilter('sorted')" class="btn-filter-select">Gi?? gi???m d???n<i class="fa-solid fa-xmark"></i></button>`;
            }
            else if(filterProduct.sorted == 'az'){
                strBtn += `<button onclick="deleteFilter('sorted')" class="btn-filter-select">T??? A - Z<i class="fa-solid fa-xmark"></i></button>`;
            }
            else if(filterProduct.sorted == 'za'){
                strBtn += `<button onclick="deleteFilter('sorted')" class="btn-filter-select">T??? Z - A<i class="fa-solid fa-xmark"></i></button>`;
            }
        }
        filterBtn.innerHTML = strBtn
        
    }else {
        
        filterBtn.innerHTML = ''
    }

    
 }
