function imganimation(){
    const btn=document.querySelector("#throttle");
    const throttleFunction=(func, delay)=>{
      let prev = 0; 
      return (...args) => {
        let now = new Date().getTime(); 
        if(now - prev> delay){ 
          prev = now;
          return func(...args);  
        }  } }
    document.querySelector("#center").addEventListener("mousemove", throttleFunction((details)=>{
    var div =  document.createElement("div");
    div.classList.add("divimg");
    div.style.left=details.clientX + "px";
    div.style.top = details.clientY + "px";
    
    var img = document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1699488169278-68f988a8b876?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D");
    div.appendChild(img);
    document.body.appendChild(div);
    gsap.to(img,{
        y:"0",
        ease:Power1,
        
        duration:.2,
    })
    gsap.to(img,{
        y:"100",
        ease:Power2,
        delay:.1,
    })
      

    setTimeout(function(){
        div.remove();
    },2000);
    }, 500));
}
imganimation();