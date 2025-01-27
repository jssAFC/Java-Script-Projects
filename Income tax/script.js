const form=document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const salary=document.getElementById('income').value;
    // console.log(salary.value);
    const res=document.getElementById('result');
    if(salary<300000)
        res.textContent=`You don't have to pay any tax`;
    else if( salary<=700000){
        const tax=(0.10*salary).toFixed(2);
        res.textContent=`Total tax deduction is: ${tax}`;
    }

    else if(salary<=1000000){
        const tax=(0.15*salary).toFixed(2);
        res.textContent=`Total tax deduction is: ${tax}`;
    }

    else if(salary<=1200000){
        const tax=(0.20*salary).toFixed(2);
        res.textContent=`Total tax deduction is: ${tax}`;
    }

    else{
        res.textContent=`Total tax deduction is: ${0.30*salary}`;
    }

        
    
    
    
    
})