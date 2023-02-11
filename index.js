function clock(){
   var hours=document.getElementById("hours");
   var  minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var time=new Date();
    
    var a=time.getHours();
var b=time.getMinutes();
var c=time.getSeconds();
  
hours.style.fontSize="30px";
minutes.style.fontSize="30px";
seconds.style.fontSize="30px";


hours.innerHTML=a;
minutes.innerHTML=b;
seconds.innerHTML=c;


}

setInterval(clock,1000);


function setAlarm(){
    
    var i=document.getElementById("wakeup").value;
    var hour=new Date().getHours()

    if(i==hour){
        document.getElementById("changing-image").style.backgroundImage="url(./images/changing.png)";
      var h= document.getElementById("alarm-message").innerHTML="grab some healthy breakfast";
    }
    var i=document.getElementById("lunch").value;
    var hour=new Date().getHours()

    if(i==hour){
        document.getElementById("changing-image").style.backgroundImage="url(./images/eat.png)";
      var h= document.getElementById("alarm-message").innerHTML="grab some healthy lunch";
    }
    var i=document.getElementById("evening").value;
    var hour=new Date().getHours()

    if(i==hour){
        document.getElementById("changing-image").style.backgroundImage="url(./images/lunch_image.png)";
      var h= document.getElementById("alarm-message").innerHTML="grab some tea";
    }
    var i=document.getElementById("night").value;
    var hour=new Date().getHours()

    if(i==hour){
        document.getElementById("changing-image").style.backgroundImage="url(./images/night.png)";
      var h= document.getElementById("alarm-message").innerHTML="get some sleep";
    }

}
