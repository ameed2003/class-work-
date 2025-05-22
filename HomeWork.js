//Home Work :

// EX#5 :

// const fruits = ["apple", "banana", "cherry", "date"] ;
// fruits.splice(1 , 2 , "blackberry" , "blueberry") ;
// console.log(fruits) ;


// EX#6 :

// const colors = ["red", "orange", "yellow", "green", "blue"];
// let arr = colors.slice(1,3) ;
// console.log(arr);


// EX#7 :

// const animals1 = ["cat", "dog"];
// const animals2 = ["lion", "tiger"];
// let arr = animals1.concat(animals2) ;
// console.log (arr) ;


// EX#8 :

// const numbers = [7, 3, 9, 1, 5] ;
// numbers.sort(function(a , b)
// {
//   return a-b ;
// }
// )
// console.log(numbers) ;


// EX#9 :

// const letters = ["a", "b", "c", "d"];
// let arr = letters.reverse() ;
// console.log(arr) ;


// EX#10 :

// const sentence = "JavaScript is awesome";
// let arr = sentence.split(" ") ;
// console.log(arr) ;


// EX#11 :

//  const words = ["Hello", "world"] ;
//  let arr = words.join(" ") ;
//  console.log(arr) ;


// EX#14  :

// const students = ["דני", "נועה", "רן", "תמר"] ;
// students.forEach(function(index)
// {
//  console.log(" Hello" + index + " good luck in the examp ") ;
// }
// )


// EX#15 :

// const pricesILS = [100, 250, 75, 320] ;
// let ress = pricesILS.map(function(index)
// {
//   return index*3.5 ;
// }
// )
// console.log(ress) ;

// EX#16 :


// const users = [
//   { username: "Tom", isLoggedIn: true },
//   { username: "Jerry", isLoggedIn: false },
//   { username: "Spike", isLoggedIn: true }
// ];

// let arr = users.filter(function(index)
// {
//   if (index.isLoggedIn == true)
//   {
//     return true;
//   }
// }
// );

// console.log(arr);

// EX#17 :


// const products = [
// { name: "Book", quantity: 3 },
// { name: "Pen", quantity: 0 },
// { name: "Notebook", quantity: 5 }
// ];
// let arr = products.some(function(index)
// {
//   if (index.quantity==0)
//   console.log(  index.name + " : המוצר הזה אזל מהמלאי " )
// }
// )


// EX#18 :

// const grades = [72, 85, 90, 67, 58];
// let arr = grades.every(function(item)
// {
//   if (item<=60)
//   console.log("Not all grades were higher than 60 ")
//   else
//   if (item>60)
//   console.log("All the grades were higher than 60 ! ")
// }
// )


// EX#19 :

// const employees = [
//   { name: "Sharon", salary: 9500 },
//   { name: "David", salary: 7800 },
//   { name: "Lior", salary: 12000 }
// ];

// let arr = employees.filter(function(item)
// {
//     return item.salary > 8000;
//   }
//   )
//map(function(item) {
//     return item.name.toUpperCase();
//   }
//   );

// console.log(arr);



// EX#20 :

// const books = [
//   { title: "Book A", pages: 450 },
//   { title: "Book B", pages: 520 },
//   { title: "Book C", pages: 600 }
// ];
// let arr = books.filter(function(books)
// {
//   return books.pages > 500
// }
// )
// console.log(arr) ;

// Home work Arrow function :

// EX #1 : let func = str => str+ "!" ;֫
// EX #2 : const reverseWords = sentence => sentence.split(" ").reverse().join(" ");
// EX #3 : const squareAll = arr => arr.map(num => num * num);
// EX #4 : const filterNames = (names, minLength) => names.filter(name => name.length > minLength);

// EX #5 : const allPositive = numbers => numbers.every(num => num > 0);

