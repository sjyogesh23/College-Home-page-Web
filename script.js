let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach((valueDisplay) => {
    let startvalue = 0;
    let endvalue = parseInt(valueDisplay.getAttribute("data-value"));
    let duration = Math.floor(interval / endvalue);
    let counter = setInterval(function(){
        startvalue += 1;
        valueDisplay.textContent = startvalue;
        if(startvalue == endvalue){
            clearInterval(counter);
        }
    }, duration);
});

