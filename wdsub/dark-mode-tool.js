let toggle = document.getElementById("toggle");
let mode = document.getElementById("mode");

let isDark = false;


// document.body refers to the whole webpage
function darkOnOff(event) {
  //change background color
  if (isDark) document.body.style.backgroundColor = "white";
  else document.body.style.backgroundColor = "black";
  
  //change text color
  if (isDark) document.body.style.color = "black";
  else (isDark) document.body.style.color = "white";
  
  //change mode text
  if (isDark) mode.innerHTML = "<p>Dark mode off</p>";
  else mode.innerHTML ="<p>Dark mode on</p>";
  
    isDark=!isDark
}








