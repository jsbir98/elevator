
function up(){

     if(document.getElementById("img1").style.top="+500px")
       {
       
          document.getElementById("img1").style.top ="-280px"
       }
   else{
   document.getElementById("img1").style.top = "-280px"
       }
  }

  function lev1Up(){
    if(document.getElementById("img1").style.top="+500px")
    {
    
       document.getElementById("img1").style.top ="-140px"
    }
else{
document.getElementById("img1").style.top = "-280px"
    }
  }
  function level1Down(){
    if(document.getElementById("img1").style.top<"200px")
    {
    
       document.getElementById("img1").style.top ="+10px"
    }
else{
document.getElementById("img1").style.top = "-280px"
    }
  }
  function level2Down(){
    if(document.getElementById("img1").style.top<"200px")
    {
    
       document.getElementById("img1").style.top ="+10px"
    }
else{
document.getElementById("img1").style.top = "px"
    }
  }