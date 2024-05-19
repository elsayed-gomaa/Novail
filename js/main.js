//get image by id
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let mountains7 = document.getElementById('mountains7');
let novail=document.querySelector(" .image h2" )

window.onscroll=function (){
    let value=scrollY;
    stars.style.left=value +"px";
    moon.style.top=value*5 + "px";
    mountains3.style.top=value*1.5 +"px";
    mountains4.style.top=value*1.2 +"px";
    river5.style.top=value +"px";
    boat6.style.top=value +"px";
    boat6.style.left=value*3 +"px";
    novail.style.fontSize=value +"px"
    if(scrollY>=67){
        novail.style.fontSize=67 +'px';
        novail.style.position="fixed"

        if(scrollY>=300){
    
            novail.style.display="none"
        }else{
            novail.style.display="block"
        }
        if(scrollY>98){
            document.querySelector(".main").style.background = "linear-gradient(#376281, #10001f)";
        }else{
            document.querySelector(".main").style.background = "linear-gradient(#200016,#10001f )";
        }
    };
   

};
let icon = document.querySelector("header ul i");
let list = document.querySelectorAll("header ul li");
let statu=true;

icon.onclick=function(){
    if(statu){
        icon.style.transform="rotate(90deg)"
        list.forEach((e)=>{
            e.style.display="block";
          })
    }else{
        icon.style.transform="rotate(0deg)"
        list.forEach((e)=>{
            e.style.display="none";
          })
    }
 statu=!statu;
}
