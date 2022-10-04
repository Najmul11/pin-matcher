// function to generate pin and display it
function generatePin() {
    const getPin=Math.round(Math.random()*10000)
    const pin=getPin + '';
    if (pin.length==4) {
        const pinField=document.getElementById('generated-pin').value=pin;
    } else {
        return generatePin();
    }  
}
document.getElementById('generate-pin').addEventListener('click',()=>{
    generatePin()
})

document.getElementById('keypad').addEventListener('click',(event)=>{
    const num=event.target.innerText;
    const calcInput=document.getElementById('typed-pin')
    const previousTypedNumber= calcInput.value;
    if (isNaN(num)) {
        if (num=='C') {
            calcInput.value='';
        }else if(num=='<'){
            const digits = previousTypedNumber.split('')
            digits.pop()
            const remainingDigits= digits.join('')
            calcInput.value=remainingDigits;
        }
    }else{ 
        const newNumber= previousTypedNumber + num;
        calcInput.value=newNumber;
    }
})
// function to clear typed pin
function clearTypedNumbers() {
    var clearDisplay=document.getElementById('typed-pin');
    var clear=clearDisplay.value;
    clearDisplay.value=''
}
document.getElementById('pin-submit').addEventListener('click',()=>{
   const generatedPin=document.getElementById('generated-pin').value
   const inputedPin=document.getElementById('typed-pin').value
   const successMessage=document.getElementById('success')
   const failMessage=document.getElementById('fail')
   if (generatedPin == inputedPin) {
        successMessage.style.display='block'
        failMessage.style.display='none'
        clearTypedNumbers()
   } else {
        successMessage.style.display='none'
        failMessage.style.display='block'
        clearTypedNumbers()
   }
})
