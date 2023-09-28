

const names = ["Guadalupe", "Ollie", "Aki"];
const result=[];


function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
   // console.log(`Thank You ${names[i]} for the wonderful ${event} gift!`);
    result.push(`Thank You, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return result;
  debugger
}

const results=writeCards(names, "surprise")
console.log(results)

function countDown(countdown){
  while (countdown>=0 ) {
    console.log(countdown--);
  }
  
}

countDown(10);


