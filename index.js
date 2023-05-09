let display=document.getElementsByClassName("display")[0];
let expression=display.value;
let nums=document.getElementsByClassName("digits");
for (let i = 0; i < 15; i++) {
    nums[i].addEventListener("click", ()=>{
        expression=display.value;
        if(nums[i].innerHTML=== '='){
            display.value=eval(expression);
            expression=display.value
        display.focus()
        }
        else{
            expression+=nums[i].innerHTML;
        display.value=expression;
            display.focus();
        }
        
        });
}
