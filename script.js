
var timerstart=(event)=>{
    return()=>{
      
    let paragraph=document.getElementById("para");
        // setTimeout(() => {
        // paragraph.textContent=parseInt(paragraph.textContent)-1;
        // setTimeout(() => {
        // paragraph.textContent=parseInt(paragraph.textContent)-1;
        //     setTimeout(() => {
        // paragraph.textContent=parseInt(paragraph.textContent)-1;
        //         setTimeout(() => {
        // paragraph.textContent=parseInt(paragraph.textContent)-1;
        //          setTimeout(() => {
        // paragraph.textContent=parseInt(paragraph.textContent)-1;
        //             setTimeout(() => {
        // paragraph.textContent=parseInt(paragraph.textContent)-1;
        //                 setTimeout(() => {
        // paragraph.textContent=parseInt(paragraph.textContent)-1;
        //                     setTimeout(() => {
        // paragraph.textContent=parseInt(paragraph.textContent)-1;
        //                         setTimeout(() => {
        // paragraph.textContent=parseInt(paragraph.textContent)-1;
        //                             setTimeout(() => {
        // paragraph.textContent="Happy Independence Day";
                                        
        //                             }, 2000);
        //                         }, 2000);
        //                     }, 2000);
        //                 }, 2000);
        //             }, 2000);
        //          }, 2000);   
        //         }, 2000);
        //     }, 2000);
        // }, 2000);    
        // }, 2000);
  




        setTimeout(() => {
        paragraph.textContent=parseInt(paragraph.textContent)-1;
        }, 1000);
        setTimeout(() => {
            paragraph.textContent=parseInt(paragraph.textContent)-1;
            }, 2000);
            setTimeout(() => {
                paragraph.textContent=parseInt(paragraph.textContent)-1;
                }, 3000);
                setTimeout(() => {
                    paragraph.textContent=parseInt(paragraph.textContent)-1;
                    }, 4000);
                    setTimeout(() => {
                        paragraph.textContent=parseInt(paragraph.textContent)-1;
                        }, 5000);
                        setTimeout(() => {
                            paragraph.textContent=parseInt(paragraph.textContent)-1;
                            }, 6000);
                            setTimeout(() => {
                                paragraph.textContent=parseInt(paragraph.textContent)-1;
                                }, 7000);
                                setTimeout(() => {
                                    paragraph.textContent=parseInt(paragraph.textContent)-1;
                                    }, 8000);
                                    setTimeout(() => {
                                        paragraph.textContent=parseInt(paragraph.textContent)-1;
                                        }, 9000);
                                        setTimeout(() => {
                                            paragraph.textContent="Happy Independence Day";
                                            }, 10000);


    }
}

let timer=document.getElementById("buttontimer")
// timer.classList.add("container"," ",)
console.log("timer on");
timer.addEventListener("click",timerstart());

