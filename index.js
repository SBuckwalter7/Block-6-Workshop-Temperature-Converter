// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */


function convertToCelsius(fahren) {
  // both answers work:teachers answer below
  //  let answer = (fahren-32)*(5/9)

  //my answer below
  return (fahren-32)*(5/9)
  //return acts like a stopper, nothing underneath it will run in the funciton,
  //Console.log needs to be above the return if you use both
}



/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */



function createMessage(fahren, celc) {
  //my answer below
  if(celc < 32){console.log("very cold")}
  else if(celc<64){console.log("cold")}
  else if (celc <86){console.log("wear large coat")}
  else if (celc <100){console.log("hot")}


  //teachers answer below: both mean the same thing but I missed adding
  //in both numbers at the end.
  if(fahren<32){
    return "very cold"+" fahren="+fahren+" acelcius="+celc
  }else if(fahren<64){
    return "cold"+" fahren="+fahren+" acelcius="+celc
  } else if(fahren<86){
    return "wear large coat"+" fahren="+fahren+" acelcius="+celc
  }else if(fahren<100){
    return "hot"+" fahren="+fahren+" acelcius="+celc
  }else {
    return "that number is out of range"
  }
}



/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */

//had literally no idea how to do this one
//.ceiling is rouding up
//.floor is roudning down
function rand(limit) {
  return Math.floor(Math.random() * (limit + 1));
}



// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
