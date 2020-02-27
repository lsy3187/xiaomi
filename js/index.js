var tabs =document.getElementById("tabs")
.getElementsByTagName("li");


var lists = document.getElementById("lists")
.getElementsByTagName("ul");


for(i=0;i<tabs.length;i++){
    tabs[i].onclick=showlist;
}

var scrollTop = document.documentElement.scrollTop;
console.log(scrollTop);

function showlist(){
    for(var i=0;i<tabs.length;i++){
        if(tabs[i]===this){
            tabs[i].className="active";
            lists[i].className="clearfix active";
        }else{
            tabs[i].className="";
            lists[i].className="";
        }
    }
}
var seckillNav = document.getElementById("seckillNav");
window.onscroll = function (){
    var scrollTop = document.documentElement.scrollTop;
      if(scrollTop>=260){
        seckillNav.className="seckill-nav seckill-navfixed";
      }else{
        seckillNav.className="seckill-nav";
      }
}