function scrol(){
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 1000;
    var srl = window.scrollY;
        valueDisplays.forEach((valueDisplay) => {
            
            
            let startvalue = 0;
            let endvalue = parseInt(valueDisplay.getAttribute("data-value"));
            let duration = Math.floor(interval / endvalue);
            if(srl>240){
                let counter = setInterval(function(){
                    startvalue += 1;
                    valueDisplay.textContent = startvalue;
                    if(startvalue == endvalue){
                        clearInterval(counter);
                    }
                }, duration);
            }
        });
}
//window.addEventListener('focus',scrol);
document.querySelector('.mileDiv').onfocus=scrol;
