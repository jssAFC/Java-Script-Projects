const footballQuiz = [
  {
    question: "Who won the FIFA World Cup in 2018?",
    options: ["Brazil", "Germany", "France", "Argentina"],
    answer: "France",
  },
  {
    question: "Which player has won the most Ballon d'Or awards?",
    options: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Zinedine Zidane",
      "Ronaldinho",
    ],
    answer: "Lionel Messi",
  },
  {
    question: "Which country has won the most FIFA World Cups?",
    options: ["Brazil", "Germany", "Italy", "Argentina"],
    answer: "Brazil",
  },
  {
    question: "Who is the all-time top scorer in the UEFA Champions League?",
    options: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Raul",
      "Robert Lewandowski",
    ],
    answer: "Cristiano Ronaldo",
  },
  {
    question: "Which club has won the most UEFA Champions League titles?",
    options: ["Barcelona", "Bayern Munich", "Liverpool", "Real Madrid"],
    answer: "Real Madrid",
  },
  {
    question: "Who won the Golden Boot in the 2014 FIFA World Cup?",
    options: ["Lionel Messi", "Thomas Muller", "James Rodriguez", "Neymar"],
    answer: "James Rodriguez",
  },
  {
    question: "Which country hosted the 2002 FIFA World Cup?",
    options: ["Japan and South Korea", "Germany", "France", "Brazil"],
    answer: "Japan and South Korea",
  },
  {
    question: "Who is the all-time top scorer for the Brazilian national team?",
    options: ["Pele", "Ronaldo", "Romario", "Neymar"],
    answer: "Pele",
  },
  {
    question:
      "Which club did David Beckham play for before joining Real Madrid?",
    options: [
      "Manchester United",
      "AC Milan",
      "LA Galaxy",
      "Paris Saint-Germain",
    ],
    answer: "Manchester United",
  },
  {
    question: "Who won the UEFA Euro 2016?",
    options: ["France", "Portugal", "Germany", "Spain"],
    answer: "Portugal",
  },
  {
    question:
      "Which player scored the 'Hand of God' goal in the 1986 World Cup?",
    options: ["Diego Maradona", "Pele", "Zinedine Zidane", "Michel Platini"],
    answer: "Diego Maradona",
  },
  {
    question: "Which club is known as 'The Red Devils'?",
    options: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"],
    answer: "Manchester United",
  },
  {
    question: "Who won the FIFA Women's World Cup in 2019?",
    options: ["Germany", "USA", "Netherlands", "Japan"],
    answer: "USA",
  },
  {
    question:
      "Which player holds the record for the most goals in a single Premier League season?",
    options: ["Alan Shearer", "Thierry Henry", "Mohamed Salah", "Harry Kane"],
    answer: "Mohamed Salah",
  },
  {
    question: "Which country won the first ever FIFA World Cup in 1930?",
    options: ["Brazil", "Argentina", "Uruguay", "Italy"],
    answer: "Uruguay",
  },
  {
    question: "Who is the all-time top scorer for the Spanish national team?",
    options: ["Fernando Torres", "David Villa", "Raul", "Sergio Ramos"],
    answer: "David Villa",
  },
  {
    question: "Which club has won the most Serie A titles?",
    options: ["AC Milan", "Inter Milan", "Juventus", "Roma"],
    answer: "Juventus",
  },
  {
    question: "Who won the Golden Boot in the 2018 FIFA World Cup?",
    options: [
      "Harry Kane",
      "Antoine Griezmann",
      "Romelu Lukaku",
      "Kylian Mbappe",
    ],
    answer: "Harry Kane",
  },
  {
    question: "Which player is known as 'The Phenomenon'?",
    options: ["Cristiano Ronaldo", "Ronaldo Nazario", "Ronaldinho", "Romario"],
    answer: "Ronaldo Nazario",
  },
  {
    question: "Which country won the Copa America in 2021?",
    options: ["Brazil", "Argentina", "Chile", "Uruguay"],
    answer: "Argentina",
  },
];

function randomQues() {
    //      This approach is correct but not optimized
  const data = new Set();

  while (data.size != 5) {
    const index = Math.floor(Math.random() * footballQuiz.length);
    data.add(footballQuiz[index]);
  }

  return [...data];

    //   sort function

}

//      Select the form and insert all the elements into it

const form = document.querySelector("form");

const problems = randomQues();

//      Data that comes in obj
// {
//     question: "Who won the FIFA World Cup in 2018?",
//     options: ["Brazil", "Germany", "France", "Argentina"],
//     answer: "France"
// }
problems.forEach((obj, index) => {
  const div_element = document.createElement("div");
  div_element.className = "question";

  const para = document.createElement("p");
  para.textContent = `${index + 1}.${obj.question}`;
  div_element.appendChild(para);

  //   create 4 options
  // ["Brazil", "Germany", "France", "Argentina"]
  obj["options"].forEach((data) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index + 1}`;
    input.value = data;
    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement("br"));
  });

  form.appendChild(div_element);
});

const button = document.createElement("button");
button.type = "submit";
button.className = "submit-btn";
button.textContent = "Submit";
form.append(button);

//  Check the submitted form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const solutionData = new FormData(form);
  const solution = solutionData.values();
  let result = 0;

  problems.forEach((num) => {
    const [val] = solution;
        if(val==num.answer) result++;
    // console.log(val,num.answer);
  });

  const output=document.getElementById('answer');
  output.textContent=`Your result is ${result}`;
  form.append(output);

});

