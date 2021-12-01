/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/

let blue = false;

function taskOne() {
    
    if (blue == false) {
      document.getElementById("answer-one").style.backgroundColor = "blue";
      blue = true;
    } else if (blue ==true) {
      document.getElementById("answer-one").style.backgroundColor = "white";
      blue = false;
    }
}
/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

const numbers = [234, 986, 784];

function taskTwo() {
  function randomvärde(){
    return Math.floor(Math.random()* 1000);
  } 
  numbers.push(randomvärde());
  console.log(numbers);
  alert(numbers);
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/

function taskThree() {
  const date = new Date();

  const day = date.getDay();
  console.log(day);
  if (day === 6 || day === 0) {
    alert("Woohooo it's weekend");
  }
  else{
    alert("FML");
  }
}

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/

function multiplier(valueOne, valueTwo) {
   // Inte kompelet kod 
  if (typeof valueOne === "number" && typeof valueTwo === "number") {
      result =valueOne * valueTwo;
      alert(result);
  } else {
    alert("That is not a number");
  }
}

function taskFour() {
  multiplier(1,2);
}
  
  


/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {
  for (let j = 0;  j< fruits.length; j++) {
      if (fruits[j] === "apelsin" || fruits[j] === "päron") {
          trash.push(fruits[j]);
    } else {
        eatable.push(fruits[j]);
    }
  }
  document.getElementById("answer-five").innerHTML = `<p> <strong> Ätligt: ${eatable} </strong> </p> <p> <strong> Skräp: ${trash} </strong> </p>`;
  
console.log(trash);
console.log(eatable);
}
 



/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/
//ÖVER 30;
//UNDER 30;
//GIFT
//OGIFFT
const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {
  for (let item in persons) {

    const element = persons[item];

    if (element.age >= 30 && element.married == true) {

      overThirty.push(element.name);

      married.push(element.name);

    } else if (element.age < 30 && element.married == true) {

      underThirty.push(element.name);

      married.push(element.name);

    } else {

      underThirty.push(element.name);

      notMarried.push(element.name);

    }

  }
  document.getElementById("answer-six").innerHTML = `<p> <strong> Ogift: ${notMarried} </strong> </p> <p> <strong> Gift: ${married} </strong> </p> <p> <strong> Under 30: ${underThirty}</strong> </p> <p> <strong> Över 30: ${overThirty} </strong> </p> `
  
  
  console.log(underThirty);
  console.log(overThirty);
  console.log(married);
  console.log(notMarried);

}





/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
 console.log(addMeSomeLineBreaks.split(",", 10));
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/

function taskEight() {
  const Cards = document.getElementById("card-eight");
  setTimeout(()=>{
    Eight();
},3000);

setTimeout(()=>{
    EightBack();
},6000);
  const Eight = () =>{
    Cards.style.display = "none";
  } 
  const EightBack = () =>{
    Cards.style.display = "block"
  }
  window.addEventListener("load", () =>{
    Cards.addEventListener("click", Eight);
    Cards.addEventListener("click", EightBack);
  })
}

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

function taskNine() {
  const date = new Date();
  const hour = date.getHours();
Cards = document.querySelectorAll(".answer-container");
console.log(Cards);
Cards.forEach(answercontainer =>{
if (hour > 17) {
  answercontainer.style.backgroundColor = "blue";
} else {
  answercontainer.style.backgroundColor = "red";
}
})
}

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator) {
    if (typeof valueOne === "number" && typeof valueTwo === "number") {
  switch(operator){
        case "add":
        const sum1 = valueOne + valueTwo;
        alert(sum1);
        break;
        case "subtract":
        const sum2 = valueOne - valueTwo;
        alert(sum2);
        break;
        case "multiply":
        const sum3 = valueOne * valueTwo;
        alert(sum3);
        break;
        case "divide":
        const sum4 = valueOne / valueTwo;
        alert(sum4);
        break;
      }
    }
    else{
      alert("That is not a number");
    }
}
    
  


function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  calculator(10,2,"divide");
  
  
  
}