const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');


function countdown(){
    const d = new Date("2026-7-11").getTime();
    const curr=new Date().getTime();

    const day=Math.ceil(d/(24*60*60*1000)-curr/(24*60*60*1000)); 
    const hour=Math.ceil(d/(60*60*1000)-curr/(60*60*1000))%24;
    const minute=Math.ceil(d/(60*1000)-curr/(60*1000))%60;
    const second=Math.ceil(d/(1000)-curr/(1000))%60;

    days.innerHTML=`${day}`;
    hours.innerHTML=hour;
    minutes.innerHTML=minute;
    seconds.innerHTML=second;

}

setInterval(countdown,1000);

