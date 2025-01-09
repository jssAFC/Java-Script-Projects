function timer(){
    const d=new Date().toLocaleTimeString();
    container.innerHTML=d;

}

setInterval(timer,1000);    

const container=document.getElementById('container');


