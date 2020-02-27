function show() {
  console.log("Hello World");
}
show();

//Function Expression

const showexp = function() {
  console.log("This is function expression");
};
showexp();

//Function with Parameters
const para = function(date, time) {
  console.log(`I have a parameter ${date} ${time}`);
};
para("today", "now()");

//Another way

const speak = function(name = "spencer", time = "night") {
  console.log(`Good ${time} ${name}`);
};
speak();

//Calculation
