
var timerstart=(event)=>{
    return()=>{
      
    let paragraph=document.getElementById("para");
        setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
        setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
            setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                 setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                    setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                        setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                            setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                                setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
                                    setTimeout(() => {
        paragraph.textContent="Happy Independence Day";
                                        
                                    }, 2000);
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                 }, 2000);   
                }, 2000);
            }, 2000);
        }, 2000);    
        }, 2000);
  
    }
}

let timer=document.getElementById("buttontimer")
// timer.classList.add("container"," ",)
console.log("timer on");
timer.addEventListener("click",timerstart());

