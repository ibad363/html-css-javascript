// alert("WELCOME");
// console.log("HELLO WORLD");
// console.log(34);
// document.write("Hello World");

// var nationality = "Pakistani";
// var age = 20;
// var feepaid = true;
// var a;
// a = 60;

// console.log(age);
// age = 25;
// console.log(age);

// alert(nationality);
// console.log(feepaid);

// console.log("Pakistani");
// console.warn(22 + 8);
// console.error('this is an error');
// console.clear();

// var name1 = 'ibad';
// var age = 20;
// var bool = false;
// var undef = undefined;
// var nul = null;

// console.log(typeof name1);
// console.log(typeof age);
// console.log(typeof bool);
// console.log(typeof undef);
// console.log(typeof nul);

// var name1 = 'my name is ibad\n'+
// "'ur Rehman'";
// console.log(name1);

// var name2 = `my name is ibad
// 'ur Rehman'`;
// console.log(name2);

// var age = prompt("how old are you");
// if (age === "18"){
//     console.log("welcome");
// }

//   var num1 = 5;
//   var num2 = 5;
//   console.log(num1+num2);

//    let name1 = 'ibad';
//    if (name1=='ibad'){
//       console.log('Welcome')
//    }

// let a = 2+2 == "4"; //true
// let b = 2+2 === "4"; //false
// let c = 4 > 4; //false
// let d = 5 >= 5; //true
// let e = 5 !== 5; //false
// console.log(e)

// let x = 6;
// let y = 10;

// let a1= x < y && x === 6; //true
// let a2= x < y && x !== 6; //false
// let a3= x === y || y ===10; //true
// let a4= (x === 6 && y===4) || x<y; //true

// console.log(a4);

// let userFruit = prompt('write any fruit name')

// let fruits = ['banana','mango','apple']

// // console.table(fruits[1]);
// // console.table(fruits.length);
// // fruits.shift();
// let fruit1 = fruits.push('graphes');
// console.table(fruit1);

// // console.table(fruits);

// let pets = [];
// pets[0] = 'dog';
// pets[1] = 'cat';
// pets[2] = 'billi';
// pets[3] = 'billi2';

// pets.push('parrot');
// // pets.pop(); // remove last array
// // pets.shift(); // remove first array
// pets.unshift('kangaroo');

// console.log(pets);

// let country = prompt("where do you live?").toLowerCase();
// let age = Number(prompt("what is your age?"));

// country = country.toLowerCase(); //aise bhi lowercase add kar sakte he

// if (country === "pak") {
//   if (age >= 18){
//     console.log('Here is your Ticket');
//   } else{
//     console.log('Age Restriction');
//   }
// } else{
//   console.log('Invalid Country');
// }

// if (country === 'pak'){
//   if (age >=18){
//     console.log('Here is your Ticket');
//   }else{
//     console.log('Age Restriction');
//   }
// }else{
//   console.log('Invalid Country');
// }

// change value in const variable
// const fruits = ['banana','mango','apple']
// fruits[2] = 'yahoo';
// console.log(fruits);

// let name1 = 'IbAd';
// console.log(name1.toUpperCase());

// const fruits = ['apple','banana','graphes','mango','kela'];
// let slicefruits = fruits.slice(3);

// console.log(fruits);
// console.log(slicefruits);

// const fruits = ['apple','banana','graphes','mango','kela'];
// let spliceFruits = fruits.splice(3,0,'saib','kela2');

// console.log(fruits);
// console.log(spliceFruits);

// const fruits = ['apple','banana','graphes','mango','kela'];
// let spliceFruits = fruits.splice(3,1,'saib','kela2');

// console.log(fruits);
// console.log(spliceFruits);

// a = 1
// b = a++
// console.log(b)
// //post increment

// a = 1
// b = ++a
// console.log(b)
// //pre increment

// const car = {
//   name: 'honda',
//   model: 2016,
//   color: 'red',
//   automatic: true
// };

// const car1 = {
//   name: 'swift',
//   model: 2017,
//   color: 'black',
//   automatic: false
// };

// console.log(car);
// console.log(car1);

// const cars = [
//   {name: 'honda',
//     model: 2016,
//     color: 'red',
//     automatic: true
//   },
//   {name: 'swift',
//     model: 2014,
//     color: 'Green',
//     automatic: false
//   }
// ];
// console.log(cars[1].model);

// const person1 = {
//   firstname: 'Ibad',
//   middlename: 'ur',
//   lastname: 'Rehman',
//   age: 20,
//   "eye-color" : 'blue',
// }
// console.log(person1["eye-color"])

// let cleanCities = ["karachi","lahore","Islamabad","peshawar"];

// // let matchFound = "no";
// let matchFound = false;

// for (let i = 0; i<=cleanCities.length; i++){
//   if ("Islamabad" === cleanCities[i]){
//     // matchFound = "yes";
//     matchFound = true;
//     console.log("it's one of the cleanest cities");
//     break;
//   }
// }
// if (matchFound === false){
//   alert("It's not in the list")
// }

//nested loop practice

// var firstname = ["Jasper", "Spencer",'Henri','John',"Esme"];
// var lastname = [" Roman",' Sandoval',' Martin',' Camacho',' Knox'];
// var fullname = [];
// var fullname2 = [];

// for(var i = 0; i < firstname.length; i++){
//   for(var j = 0; j < lastname.length; j++){
//     fullname.push(firstname[i] + lastname[i]);
//   }
// }

// console.log(fullname);

// for(var i = 0; i < firstname.length; i++){
//   for(var j = 0; j < lastname.length; j++){
//     fullname2.push(firstname[i] + lastname[j]);
//   }
// }

// console.log(fullname2);

//title case practice

// //1st method
// let country = 'pAkIstan'

// let firstcharac = country.slice(0,1).toUpperCase();
// let othercharac = country.slice(1).toLowerCase();
// // firstcharac = firstcharac.toUpperCase(); //aese bhi karskte hen
// // othercharac = othercharac.toLowerCase(); //aese bhi karskte hen
// var titleCase = firstcharac + othercharac;

// console.log(titleCase)

// //2nd method
// let firstname = 'arSaLan bHai'

// console.log(firstname[0].toUpperCase() + firstname.slice(1).toLowerCase());

//3rd method

// let month = prompt("enter a month");

// let characInMonth = month.length;

// if (characInMonth > 3){
//   let monthAbb = month.slice(0,3)
//   console.log(monthAbb)
// }

// //math table by loop
// let num = 8

// for (let i = 1;i<=10;i++){
//   console.log(num + " x " + i + " = " + (i * num));
// }

//indexof & lastindexoff method
// let text = "my name is ibad, my name"
// let parttext = text.lastIndexOf("name")
// console.log(parttext);

// //charAt method
// let text = "my name is ibad, my name"
// let firstcharac = text.charAt(3)
// console.log(firstcharac)

// //text replace
// let text = 'Mr Blue has blue car and blue House';
// let result = text.replace(/blue/gi,'red');
// console.log(result);

// //construct date
// const date = new Date()
// console.log(date)
// const date2 = new Date("2004",4 ,08,23,24,25)
// console.log(date2)
// const date3 = new Date().getMinutes();
// console.log(date3)
// const date4 = new Date(2004,4,8,)
// console.log(date4)
// const date5 = new Date('may 08 2004 6:20:')
// console.log(date5)

// function greetingMessage(){
//   console.log('hello ibad, welcome to our website')
// }
// greetingMessage()

// function greetingMessage(name){
//   // console.log('hello ' + name +', welcome to our website') //by single quotes
//   console.log(`Hello ${name}, welcome to our website`) //by backticks
// }
// greetingMessage('Ibad')
// greetingMessage('Arsalan')

// function greetingMessage(name){
//   return `Hello ${name}, welcome to our website`
// }
// let message1 = greetingMessage('Ibad')
// let message2 = greetingMessage('Arsalan')
// console.log(message1)
// console.log(message2)

// function greetingMessage(name='Hello'){
//   console.log(`${name} welcome to our website`)
// }
// greetingMessage('ibad')
// greetingMessage()

// const person1 = {
//   firstname: 'Ibad',
//   middlename: 'ur',
//   lastname: 'Rehman',
//   age: 20,
//   fullName: function (){
//     console.log(this.firstname + ' ' + this.middlename + ' '+ this.lastname)
//   }
// }

// person1.fullName()

// let num1= [1, 2, 3]
// let num2= [4, 5, 6]

// let combinedNum = [...num1 ,...num2]
// console.log(combinedNum)

// const addUnlimitedNum = (...num3) => {
//   let funcresult = 0;
//   for (let i = 0;i<num3.length;i++){
//     funcresult += num3[i]
//   }
//   return funcresult
// }

// const funcresult = addUnlimitedNum(0, 1,5,20,4,10,50,450);
// console.log(funcresult)

// function showMessage (message){
//   console.log(message)
// }
// showMessage('hello')

// //RETURN PRACTICE
// const add = (a,b)=>{
//   let addresult = a+b
//   return addresult
// }
// let addresult = add(4,4)
// console.log(addresult)

// //callback function
// const dosomething = (callback) => {
//   console.log("do something");
//   callback();
// };
// const dosomething2 = () => {
//   console.log("do something second variable");
// };
// dosomething(dosomething2);

// console.log('first')
// setTimeout(()=>{
//   console.log('second')
// },2000)
// console.log('third')

// const getVideos = ()=>{
//   return['video1','video2','video3','video4']
// }

const userLogin = (userEmail, pass, callback) =>{
  setTimeout(() => {
    callback(userEmail)
  }, 1000);
}

userLogin('ibad@abc.com', "1234",(email)=>{
  console.log(email)
})