
let h1=document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      h1.style.color=color;
      resolve("color changed");
    },delay);
    });
  }
  
  changecolor("red",1000)
  .then(()=>{
      console.log(" red color changed");
      return changecolor("blue",1000)
  })
  .then(()=>{
     console.log(" blue color changed");
     return changecolor ("orange",1000)
  
  })
  .then(()=>{
      console.log("orange color changed");
  })