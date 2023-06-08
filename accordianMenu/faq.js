let header1 = document.querySelectorAll(".faq1 .header1");
let header2 = document.querySelectorAll(".faq2 .header2");
let header3 = document.querySelectorAll(".faq3 .header3");

let para1 = document.getElementsByClassName("hidden1")[0];
let para2 = document.getElementsByClassName("hidden2")[0];
let para3 = document.getElementsByClassName("hidden3")[0];

let icon1 = document.getElementsByClassName("span1")[0];
let icon2 = document.getElementsByClassName("span2")[0];
let icon3 = document.getElementsByClassName("span3")[0];

header1.forEach((element)=>{
  element.addEventListener("click", ()=>{
    let para = element.nextElementSibling;
    let icon = element.childNodes[3];
    if (para.style.display === "none"){
      para.style.display = "block";
      para.style.position = "absolute";
      para.style.top = "50px";
      para2.style.display = "none";
      para3.style.display = "none";
      icon.textContent = "-";
      icon2.textContent = "+";
      icon3.textContent = "+";
    } else {
      para.style.display = "none";
      icon.textContent = "+";
    }
  })
})
header2.forEach((element)=>{
  element.addEventListener("click", ()=>{
    let para = element.nextElementSibling;
    let icon = element.childNodes[3];
    if (para.style.display === "none"){
      para.style.display = "block";
      para.style.position = "absolute";
      para.style.top = "50px";
      para3.style.display = "none";
      para1.style.display = "none";      
      icon.textContent = "-";
      icon3.textContent = "+";
      icon1.textContent = "+";
    } else {
      para.style.display = "none";
      icon.textContent = "+";
    }
  })
})
header3.forEach((element)=>{
  element.addEventListener("click", ()=>{
    let para = element.nextElementSibling;
    let icon = element.childNodes[3];
    if (para.style.display === "none"){
      para.style.display = "block";
      para.style.position = "absolute";
      para.style.top = "50px";
      para1.style.display = "none";
      para2.style.display = "none";
      icon.textContent = "-";
      icon1.textContent = "+";
      icon2.textContent = "+";
    } else {
      para.style.display = "none";
      icon.textContent = "+";
    }
  })
})