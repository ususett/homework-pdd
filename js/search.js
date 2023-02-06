// 隐藏搜索发现内容
var hide = document.getElementById("show")
var findList = document.getElementsByClassName("findList")[0]
console.log(hide, findList);

var hidded = 0;
hide.onclick = function () {
    if (hidded == 0) {
        findList.setAttribute("style", "display:none;")
        hide.classList.remove("icon-yanjing_xianshi_o")
        hide.classList.add("icon-yanjing_yincang_o")
        hidded = 1;
    } else {
        findList.setAttribute("style", "display:flex;")
        hide.classList.remove("icon-yanjing_yincang_o")
        hide.classList.add("icon-yanjing_xianshi_o")

        hidded = 0
    }
   // console.log(hide);
}

//删除最近搜索
var delet= document.getElementById("delet")
var hisList = document.getElementsByClassName("hisList")[0]

delet.onclick=function(){
    var p= hisList.getElementsByTagName("p")
    console.log(hisList,p);
    var test=confirm("是否清除搜索记录？");
    if(test){
        for(i=0;i<=p.length;i++)
       {p[i].remove()
      i--;  
    }
    }
}

//添加搜索记录
function search(){
   var input=document.getElementById("input").value
   console.log(input)
   hisList.innerHTML +=
   "<p>"+input+"</p>";
}