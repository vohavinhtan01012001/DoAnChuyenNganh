//Hàm xử lý hiên menu trên điện thoại
var menu = document.querySelector('.header__menu-list')
var body = document.querySelector('.body__cover')
function inMenu() {
    menu.style.display = "block"
    body.style.display = "block"
}
//Hàm xử lý đóng menu trong màn hình điện thoại
var close = document.querySelector('.header__menu-list')
function closeMenu() {
    close.style.display = "none"
    body.style.display = "none"
}
//Xử lí hiện menu con trong shop
var shop = document.querySelector('.header__menu-list2')
function menuShop() {
    if (shop.classList.length == 1) {
        shop.classList.add("addDisplay")
    }
    else {
        shop.classList.remove("addDisplay")
    }
}

/* console.log(shop.classList) */
//Xử lý thanh trượt boxShadow
document.addEventListener("DOMContentLoaded", function () {
    var navbarList = document.querySelector('.header__navbar-list')
    window.addEventListener("scroll", function () {
        var x = pageYOffset;
        if (x > 50) {
            /* navbarList.style.boxShadow = "0 14px 20px -17px rgb(0 0 0 / 75%)";
            navbarList.style.borderBottom = "1px solid rgb(223, 221, 221)"; */
            navbarList.classList.add("addBoxShadowBottom");
        }
        else {
            /* navbarList.style.boxShadow = "";
            navbarList.style.borderBottom = ""; */
            navbarList.classList.remove("addBoxShadowBottom");
        }
    })
});

//Xử lý nút upTop
document.addEventListener("DOMContentLoaded", function () {
    var top = document.querySelector(".top")
    window.addEventListener("scroll", function () {
        var x = pageYOffset;
        if (x > 300) {
            top.style.display = "block";
        }
        else {
            top.style.display = "none";

        }
    })
});
//Xử lí search
var searchs = document.querySelector(".header__content-search")
var input = document.querySelector(".header__content-input")
var link = document.querySelector("a");

/* link.onclick = function() */
function search() {
    input.style.display="block"
    searchs.style.display = "block"
    /*     else {
            input.classList.remove("addDisplay");
            searchs.style.display = "block"
        } */
}

function searchClose() {
    input.style.display= "none";
    searchs.style.display = "block";
}


//Xử lí slide__img

/* img.classList.add("addDisplay")
img2.classList.remove("addDisplay") 

img2.classList.add("addDisplay")
img.classList.remove("addDisplay")  */

/* function hinh(){
    for(var i = 0; i< 2; i++){
        if( i = 0){
            'img'+i+'.classList.add("addDisplay")'
            i = 1
        }
        else{
            'img'+i+'.classList.add("addDisplay")'
            i = 0
        }
    }
} */

/* var current = 1;
var number_img = 2;
function switch_img(){
    current++;
    var img = document.querySelector('.img'+current)
    img.style.right="0%"
    var a =img.style.right;
    var tien = 0;
        if(current == 2)
        {
            tien = current-1
        }
        else if(current == 1){
            tien = current+1
        }
    var img1 = document.querySelector('.img'+tien)
    img1.style.right="0%"
    img1.style.right=0;
    for(var i = -100;i<=200;i++){
        if(i >=-100 && i<0){
            img1.style.right = i+"%";
            img.style.right = 200 + i +"%";
        }
        else if(i==0 && i<=200){
            img1.style.right = i+"%";
            img.style.right = i+"%";
        }
    }
    if(current < number_img){
        setTimeout("switch_img()",5000);
    }
    else if(current == number_img){
        current = 0;
        setTimeout("switch_img()",5000);
    }
} */
/* var current = 1;
var number_img = 2;
function switch_img1(){
    current++;
    var img = document.querySelector('.img'+current)
    img.style.right="-100%"
    var a =img.style.right;
    var tien = 0;
        if(current == 2)
        {
            tien = current-1
        }
        else if(current == 1){
            tien = current+1
        }
    var img1 = document.querySelector('.img'+tien)
    img1.style.right="100%"
    img1.style.right=0;
    for(var i = -100;i<=200;i++){
        if(i >=-100 && i<0){
            img1.style.right = i+"%";
            img.style.right = 200 + i +"%";
        }
        else if(i==0 && i<=200){
            img1.style.right = i+"%";
            img.style.right = i+"%";
        }
    }
    if(current < number_img){
        setTimeout("switch_img1()",3000);
    }
    else if(current == number_img){
        current = 0;
        setTimeout("switch_img1()",3000);
    }
} */