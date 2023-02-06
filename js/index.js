  // tab选项卡
  var tab = document.getElementsByClassName("tab")[0];
  var tt = tab.querySelector(".tt");
  var span = tt.querySelectorAll("span");
  var tc = tab.querySelectorAll(".tc");
  //  var div=tc.querySelectorAll("div")
//   console.log(tab, tt, span, tc);
  for (var i = 0; i < span.length;i++) {
      span[i].index = i;
      span[i].onclick = function () {
          for (var j = 0; j < span.length; j++) {
              tc[j].classList.remove("show") ///
              span[j].classList.remove("cur"); ///
          }
          tc[this.index].classList.add("show"); ///
          span[this.index].classList.add("cur") //
      }
  
  }

/* // 滚动栏swiper */
var mySwiper = new Swiper('.tscroll', {
    slidesPerView: 7,
     spaceBetween: 0,
});

// 推荐图标swiper
var mySwiper = new Swiper('.rscroll', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
      },
});

 //点击进入搜索页
var search=document.getElementsByClassName("searchBar")[0]

search.onclick=function(){
    window.open('./search.html','_self');   
}

// 自动克隆生成商品卡牌
var card=document.getElementsByClassName("card")
var shopPage=document.getElementById("shopPage")
var showpic=document.getElementById("showpic")
for(i=0;i<100;i++){
shopPage.appendChild(card[0].cloneNode(true))}
for(i=0;i<100;i++){
    showpic.appendChild(card[0].cloneNode(true))}
//点击进入商品页
for(i=0;i<100;i++){
document.getElementsByClassName("card")[i].onclick=function(){
    window.open('./goods.html','_self');   
}
}