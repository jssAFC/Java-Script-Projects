const calucalte_btn=document.getElementById('submit');
const result=document.querySelector('.result span');
const height=document.getElementById('height');
const weight=document.getElementById('weight');


calucalte_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    const height_val=Number(height.value);        
    const weight_val=Number(weight.value);        
    const bmi=weight_val/Math.pow(height_val,2);

    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    if(height_val<=0 || weight_val<=0){
        result.textContent="Please enter valid values.";
        return;
    }

    if(gender=='male'|| gender=='female'){
        if(bmi<18.5){
            result.textContent=`Your BMI is ${bmi.toFixed(2)} and you fall in the underweight category...`
        }
        else if(bmi >= 18.5 && bmi < 24.9){
            result.textContent=`Your BMI is ${bmi.toFixed(2)} and you fall in the normal weight category...`
        }
        else if(bmi >= 25 && bmi < 29.9){
            result.textContent=`Your BMI is ${bmi.toFixed(2)} and you fall in the overweight category...`
        }
        else {
            result.textContent=`Your BMI is ${bmi.toFixed(2)} and you fall in the obese category...`
        }
    }    
})


// const bmi_charts=document.querySelector('.reference  span');

