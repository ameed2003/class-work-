// שמות המגישים : עמיד חלבי , מהדי סויד 





// מטלה 1 חלק א : 


// EXE NO 1 :


if ("0") {
  alert('Hello');
}


// Answer : התנאי תקיים וההודעה תוצג בגלל שהתנאי מכיל מחרוזת שיש בה תווים 




// EX NO 2 :

let Jname = prompt("What is JavaScript offical name ?");
if (Jname == "ECMAScript") {
  alert("Correct ! ")
}
else
  alert("You dont know ? ECMAScript ! ");




// EX NO 3 :


let score = 75;
let grade = score >= 90 ? "A" :
  score >= 80 ? "B" :
    score >= 70 ? "C" :
      score >= 60 ? "D" : "F";
console.log("The grade is", grade);




// EX NO 4 :


let num = prompt("Enter a number : ");
if (num > 0) {
  alert("The number is : bigger than zero");
}
else
  if (num < 0) {
    alert("The number is : smaller than zero");
  }
  else
    if (num == 0) {
      alert("The number is : zero");
    }


// EX NO 5 :


let result;

result = (a + b < 4) ? 'Not enough' : 'A lot';



// EX NO 6 :


let massage;
let login;

(login == 'Employee') ? massage = 'Hello' :
  (login == 'Director') ? massage = 'Hello' :
    (login == '') ? massage = 'No log in' :
      massage = '';



// EX NO 7 :



console.log(false || 'sdf'); // 'sdf' .
console.log(false && ''); //  false .
console.log(true || ''); // true .
console.log(true && ''); // False . 
console.log(undefined || null); // Null .
console.log(undefined || 0 || null); // Null .
console.log(undefined && 0 && null); // Undefined . 
console.log(1 || 0); // True .
console.log(null || 1); // True .
console.log(null || 0 || 1); // True .





// מטלה 2 חלק ב :

// EX NO 1 :


let sum = 0;
let i = 0;
while (number <= 100) {
  sum = i + sum;
}
console.log(sum);



// EX NO 2 :


let Num;
do {
  Num = prompt(" Enter a number : ");
  while (Num <= 0) {
    Num = prompt("Enter again : (The number must be posative . ) ");
  }
}
while (Num <= 0)

console.log("The number is ", Num);



// EX NO 3 :


for (let I = 1; I <= 10; I++) {
  let sum = 7 * I;
  document.writeln("7 *", I, " = ", sum, " , ", " ");
  sum = 0;
}



// EX NO 4 :

const chosen = 7;

for (let j = 0; j <= 10; j++) {
  let secret = prompt("Enter number between 1-10:");

  while (secret <= 0 || secret > 10) {
    secret = prompt("The number must be in the range of 1 - 10:");
  }

  if (secret == chosen) {
    alert("Correct!");
    break;
  }
  else {
    alert("Wrong, try again.");
  }
}


// EX NO 5 :


for (let t = 1; t <= 30; t++) {
  if (t % 3 == 0) {
    continue;
  }
  else {
    document.writeln(", ", t);
  }
}


// EX NO 6 :

let i = 3;
while (i) {
  alert(i--);
}
// The last value of this code is : 1 , while (i) == while (i>0) this mean it will stop before reaching the number zero . 



// EX NO 7 :

// The two methods will not return same values the first one will start from number one and go forward , the second one will start from the number zero and go forward .


// EX NO 8 :

// Yes , both of the methods will return same values , its because the i will be increased after the loop inside done . 


// EX NO 9 :

for (let n = 2; n <= 10; n++) {
  if (n % 2 == 0) {
    document.writeln(n, "  ")
  }
}


// EX NO 10 :

let i = 0;
while (i < 3) {
  alert(number ${ i }!);
}

