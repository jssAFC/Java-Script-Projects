document.addEventListener("click", (event) => {
  const div = document.createElement("div");
  div.setAttribute("class", "circle");

  const x = event.clientX;
  const y = event.clientY;

  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEEAD",
    "#D4A5A5",
    "#9B59B6",
    "#3498DB",
    "#E74C3C",
    "#2ECC71",
    "#F1C40F",
    "#1ABC9C",
    "#E67E22",
    "#34495E",
    "#7F8C8D",
    "#16A085",
    "#C0392B",
    "#8E44AD",
    "#2980B9",
    "#27AE60",
  ];

const greetings = [
    "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
    "ਕਿੱਦਾਂ",
    "ਪਾਜੀ",
    "ਚੰਗਾ",
    "ਮੁੰਡਿਆ",
    "ਕਿੱਥੇ",
    "ਵੀਰਾ",
    "ਪੁੱਤਰ",
    "ਬੱਲੇ",
    "ਓਏ",
    "ਪਿੰਡ",
    "ਸ਼ੌਂਕ",
    "ਗੱਭਰੂ",
    "ਮਿੱਤਰਾ",
    "ਯਾਰਾ",
    "ਸੋਹਣਿਆ",
    "ਜੱਟਾ",
    "ਪੇਂਡੂ",
    "ਮੁੰਡਾ",
    "ਕੁੜੀ"
];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  div.style.left = `${x-25}px`;
  div.style.top = `${y-25}px`;
  div.style.backgroundColor = randomColor;
  div.innerHTML=greetings[Math.floor(Math.random()*greetings.length)]
  document.body.appendChild(div);


  setTimeout(()=>{
    div.remove();
  },5000);

  
});
