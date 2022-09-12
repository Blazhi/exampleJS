
//////////////// lesson one go it 
// Example 1 - Математические операторы
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes ;
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)
/////////////////////////////////
// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students +=  50;
// console.log(students);

/////////////////////////////////
// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.
// const result = 108 + 223 - 2 * 5;

// console.log(result);

//////////////////////////////////
// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

//////////////////////////////////
// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. 
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 или 24,7, то 
// есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = "88,3";
// let height = "1.75";

// const bmi = weight / Math.pow(height, 2);
// console.log(bmi); // 28.8

//////////////////////////////////////


// const a = 120;
// const b = 180;

// const biggestNum = a > b ? a : b ;
// console.log(biggestNum)
///////////////////////////////////////////

// let link = 'https://my-site.com/about';
// const endLink = link.endsWith('/');

// if (endLink === false) {
//     console.log(link +"/")
// }

/////////////////////////////////////////////////

// let link = 'https://my-site.com/about';
// const endLink = link.endsWith('/');

// if (endLink === false) {
//     if (link.includes("my-site") === true){
//         console.log(link +"/")
//     }
// } else {
//     console.log(`В ${link} нет "my-site"`)
// }

/////////////////////////////////////////////////

// let link = 'https://somesite.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }
// link.includes('my-site') && !link.endsWith('/') ? link += '/' : link
// console.log(link);

/////////////////////////////////////////////////
// const hours = 30;
// let message = ``;

// if(hours < 17){
//  message = `Pending`;
// } else if ( hours >=17 && hours <= 24 ){
//     message = `Expires`
// } else if (hours > 24){
//     message = `Overdue`
// }
// console.log(message)

/////////////////////////////////////////////////////
// сли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"


// const  daysUntilDeadline = 5;
// let message = ``;


// if ( daysUntilDeadline === 0){
//  message = `Сегодня`
// } else if (daysUntilDeadline === 1){
//     message = `Завтра`
// } else if (daysUntilDeadline === 2){
//     message = `Послезавтра`
// } else if (daysUntilDeadline >= 3){
//     message = `Дата в будущем`
// }
// console.log(message)
//////////////////////////////////////////////

const max = 100;
const min = 20;

for (let i = min;i = max; i+=5){
console.log(i)
}


////////////////////////////////////////////////

// const numbers = [2,45,31,3,9,1];
// let smallestNumber = numbers[0];
// for (const number of numbers){
//   if  (number<smallestNumber){
//     smallestNumber=number;
//   }
// }
// console.log (`smallestNumber:`,smallestNumber)
// ////

// const tittle = 'Top 10 benefits of React framework';

// const normalizedTittle = tittle.toLowerCase();
// console.log (normalizedTittle);

// const words = normalizedTittle.split(' ');
// console.log(words)

// const slug = words.join('-');
// const slug1 = tittle.toLowerCase().split(' ').join('-');

// console.log (slug1);


// function calcBMI(weight, height) {
//   const weightNum = parseFloat(weight.replace(',','.'));
//   const heightNum = parseFloat(height.replace(',','.'));

  
//   return parseFloat((weightNum/Math.pow(heightNum,2)).toFixed(1));
// }

//  const bmi = calcBMI('88.3','1.75');
//  console.log(bmi);

// function min(){
//   // return a < b ?  a:b;
//   let res = arguments[0];
//   for (const num of arguments){
//     if (num < res) {
//       res = num;
//     }
//   }
// return res;
// // }

// // console.log(min(2,5));
// // console.log(min(3,-1));
// // console.log(min(1,1,-5));


// function calAverage() {
//   let sum = 0;

//   for (const number of arguments)  {
//     sum += arguments;
//   }

//   return sum;
// }

// console.log(calAverage(1, 2, 3, 4));
// console.log (calAverage(14, 8, 2));







// switch (card) {
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//   count++;
//   break;
  
//       case 10:
//       case "J":
//       case "Q":
//       case "K":
//       case "A":
//       count --;
//       break;
//   }
//   if (count>0){
//     return count + "Bet";
//   } else {
//       return count + " Hold";
//     }

// const birthDay = 2007;
// console.log (birthDay)

// let x = 10;
// let y = 4;

// console.log ('x + y =',x + y);
// console.log ('x - y =',x - y);
// console.log ('x * y =',x * y);
// console.log ('x / y =',x / y);
// console.log ('x % y =', x % y);

//////////////////////////////////

// let value = 10;

// value += 9;
// // console.log (value);


// // const x = 1;
// // const y = 9;
// // const z = 10;

// // console.log (z > y)
// ///////////////////////////////////////

// // console.log(Number.parseInt("10vsdnsiin")) // 10

// console.log ((0.4 + 0.9).toFixed(4)); // 1.3000

// console.log (Math.floor(1.9)); //1

// console.log (Math.ceil(1.9)); //2

// console.log ('max =',Math.max (1,4,5,67,1,31,4)); //67

// console.log ('min =',Math.min (1,425,6363,1,0.2,45)); //0.2

// console.log ('2 pow 6 = ',Math.pow(2,6)); // 64

// const age = 10;

// console.log (1 < age || age > 90);

// console.log (1 < age && age > 9);

/////////////////////////////////////////////////

// let  cost;
// const subscription = "premim";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "standart") {
//   cost = 100;
// } else if (subscription === "premim"){
//   cost = 500;
// } else {
//   console.log("not subscription");
// }

// console.log(cost);

/////////////////////////////////////////////////

// let cost;
// const subscription = "pro";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500

/////////////////////////////////////////////////

// const num1 = 5;
// const num2 = 10;
// let biggestNum = num1 > num2 ? num1 : num2;

// console.log(biggestNum)

/////////////////////////////////////////////////

// const clients = ["Mango", "Poly", "Ajax"];
// clients [0]= "Kivi";


// // const lastElement = clients.length-1; // опрделяем последний элемент в масиве

// console.log (clients[0]); //Kivi

// console.log(clients.length) // 3

// console.log (clients); //"Mango", "Poly", "Ajax"

// console.log (clients[lastElement]);//ajax

/////////////////////////////////////////////////////
// const clients = ["Mango", "Poly", "Ajax"];

// for (let i = 0; i < clients.length; i += 1){
//   console.log (clients[i])
// }

///////////////////////////////////////////////////

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "client not to find";

// for (let client of clients){
//   if (client === clientNameToFind){
//     message = "Client to find";
//     break;
//   }
  
// }
// console.log(message)

/////////////////////////////////////////////////////////

// const clients  = ("Mango, Poly, Ajax");
// console.log (clients.split(" "));

// const words = ["JavaScript", "это", "интересно"];
// console.log (words.join(" "))

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log (clients.includes("kiwi"))

// const numbers = [1, 2, 3, 4, 5];
// console.log (numbers.pop(1))
// console.log (numbers)

// const numbers = [];

// numbers.push(1);


// numbers.push(2);
// console.log (numbers)

// numbers.push(3);


// numbers.push(4);
// console.log (numbers)

// const numbers = [];
// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]
////////////////////////////////////////////////

// let sub = 100;
// const pay = "pro";

// if (pay === "pro"){
//     sub = 500 ;
// } else if  ( pay === "pay and play"){
//     sub = 0;
// }

// console.log (sub);
// /////////////////////////////////////////////////////////////
// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 100

// const friends = [
//     {name:'Mango', online: false},
//     {name:'Kiwi', online: true},
//     {name:'Poly', online: true},
//     {name:'Ajax', online: false},
// ];

// console.table(friends);

// for (const friend of friends){
//     console.log(friend.name)
// }

// const findFriendByName = function(allFriends, friendName){
//     for (const friend of allFriends){
//        console.log(friend);
//        console.log(friend.name);
       
//        if (friend.name === friendName){
//            return 'имя найдено'
//        }
//     }
//     return 'имя не найдено';
//    };

// console.log (findFriendByName( friends, 'Poly'))

////////////////////////////////////////////////////////////////////////////////////

// const getAllNames = function (allFriends){
//     const names = [];

//     for (const friend of allFriends ){
//         // console.log (friend.name);

//         names.push(friend.name);
//     }

//     return names;
// };
// console.log(getAllNames(friends));

/////////////////////////////////////////////////////////////////////////

// const getOnlineFriends = function(allFriends){
//     const onlineFriends = [];

//     for (const friend of allFriends){
//         console.log(friend);
//         console.log(friend.online);
    
//         if(friend.online){
//             onlineFriends.push(friend);
//         }
//     }

//     return  onlineFriends;
// };
// console.log(getOnlineFriends(friends));



////////////////////////////////////////////////////////////////////////////

// const getOfflineFriends = function(allFriends){
  
//     const offlineFriends = [];
  
//     for (const friend of allFriends){
//         console.log(friend);
//         console.log(friend.online);
    

//     if (!friend.online){
//        offlineFriends.push(friend)
//     }

//     return offlineFriends;
// }}
// console.log(getOfflineFriends(friends));

/////////////////////////////////////////////

// const user = {
//     name:'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';

// user.hobby = 'skydiving';

// user.premium = false;
// перебрали массив и консоле подставили значение

// const keys = Object.keys(user);

// for (const key of keys){
//     console.log(`${key}: ${user[key]}`);
// }
// второй вариант решения при помощи Object.entries

// for (const item of Object.entries(user)){
//     console.log(`${item[0]}: ${item[1]}`)
// }

// console.log(user)

///////////////////////////////////////////////////////

// for ... in использование на примере

// const animal = {
//     legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// all keys

// for (const key in dog){
// console.log(key);
// }


// only own keys

// for (const key of Object.keys(dog)){
//     console.log(key);
// }

////////////////////////////////////////////////////////////////////

// function getSalariesSum(salaries = {}){
// let sum = 0;

//     for (const salary of Object.values(salaries)){
//        sum += salary
//     }
//     return sum;
// }

// console.log(
//     getSalariesSum({
//         John: 100,
//         Ann: 160,
//         Pete:130,
//     })
// )

// console.log(getSalariesSum({}))

////////////////////////////////////////////////////////////////////////

// function calcTotalPrice (stones, stoneName){
//     // let totalPrice = 0;


// for (const item of stones){

//     // const name = item.name;
//     // const price = item.price;
//     // const quantity = item.quantity;



//     if (item.name === stoneName){
//         return item.price * item.quantity;
//     }
// }

//     return 0;
// }

// const stones = [
//     { name: 'Изумруд',price: 1300, quantity: 4},
//     { name: 'Брилллиант',price: 2700, quantity: 3},
//     { name: 'Сапфир',price: 400, quantity: 7},
//     { name: 'Щебень',price: 200, quantity: 2},
// ];

// console.log(calcTotalPrice(stones, 'Щебень'));
// console.log(calcTotalPrice(stones, 'Изумруд'));

/////////////////////////////////////////////////////////////////////////////////

////Задача "Найди число"

// const x = Math.floor(Math.random() * 100) +1;

// let userInput;

// do {
//     userInput = Number(prompt('Enter your number'));

//     if (userInput>x){
//         console.log(`${userInput} > x`)
//     }

    
//     if (userInput<x){
//         console.log(`${userInput} < x`)
//     }
// } while (userInput !== x);

// console.log('число найдено')

//////////////////////////////////////////////////

// const numbers = [2,45,31,3,9,1];

// let smallestNumber = numbers[0];

// for (const number of numbers){
//     if (number < smallestNumber){
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber)

// console.log(smallestNumber)

/////////////////////////////////////////////////////////////////

// const clients = ["Mango", "Ajax", "Poly"];
// console.table(clients);

// // for (const client of clients){
// //     console.log(client);
// // }

// for (let i=0; i < clients.length; i += 1){
//     console.log(clients[i]);
// }
/////////////////////////////////////////////////////////////////////

//   const cart = [54, 29, 105, 70, 92, 17, 120];
//     let total = 0;

// //   for (let i=0; i < cart.length; i += 1){
// //     console.log(cart[i]);

// //     total += cart[i];
    
// //   };

//   for (const value of cart){
//     total += value;
//   }
//   console.log('Total:',total);

//////////////////////////////////////////////////////////////////////////
// сумма всех четных чисел

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11 ];
// let total = 0;

// for (const number of numbers){
//     // console.log(number);

//     if (number % 2 === 0){
//         console.log(`${number} - Chetnoe`);

//         total+=number;
//     } else console.log(`${number} - Ne chetnoe!`)
// }

// console.log('Total:',total);
////////////////////////////////////////////////////////////////////////////////////
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3mn']
// const loginToFind = 'poly1scute';

// // for (const login of logins){
// //     if (login === loginToFind){
// //         console.log(`${login} - to find`)
// //     }
// // }

// const message =  logins.includes(loginToFind) 
// ? `${loginToFind} to find` 
// : 'not find';

// console.log(message)
 /////////////////////////////////////////////////////////////////////
//  const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3mn']

//  const findLogin = function( allLogins,loginToFind){


//     for (const login of allLogins){
//     if (login === loginToFind){

//         return `${loginToFind} - to find`;

//     } 
// }
//         return `${loginToFind} - not to find`;
// //  }
// return allLogins.includes(loginToFind)
// ? `${loginToFind} - to find`
// : `${loginToFind} - not to find`

//  }

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'poly1scute'));
 ///////////////////////////////////////

//  const numbers = [51, 18, 13, 24, 7, 85, 19];

//  let smallestNumber = numbers[0];

// for (const number of numbers){
//     if (number < smallestNumber){
//         mallestNumber === number 
//     }
// }
// console.log (smallestNumber)

/////////////////////////////////////////////////////////////////////////////

// const calcTotalPrice = function (items){
//     console.log(items);
    
//     let total = 0;

//     for (const item of items){
//         total += item
//     }
//     return total;
// };

// console.log(calcTotalPrice([1, 2, 3]));
// console.log(calcTotalPrice([5,10,15,20]));
// console.log(calcTotalPrice([100,200,300]));

//////////////////////////////////////////////

// const friends = [ 'Mango', 'Poly', 'Kiwi', 'Ajax']

// const friendJoin = friends.join(",");

// console.log (friendJoin)

///////////////////////////////////////////////////

// const string = 'JavaScript';

// const letters = string.split('');

// let invertedString = '';

// console.log(letters);

// for (const letter of letters){
// console.log(letter);

////// first variant

// if (letter === letter.toLowerCase()) {
//    console.log('эта буква в нижнем р(letter === letter.toLowerCase())егистре -', letter);

//    invertedString += letter.toUpperCase();

// } else {
//     console.log('эта буква в верхнем регистре -', letter);
//      invertedString+= letter.toLowerCase()
// }

/// second variant

// invertedString +=
// letter === letter.toLowerCase()
// ?  invertedString += letter.toUpperCase()
// : invertedString+= letter.toLowerCase();
// }
// console.log(invertedString)

///////////////////////////////////////////////////////////////
//// function 

// const changeCase = function(string){
//     const letters = string.split('');
//     let invertedString = '';
//     console.log(letters);

//     for (const letter of letters){
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//     ? letter.toUpperCase()
//     : letter.toLowerCase();
//     }

//     return invertedString
// }

// console.log(changeCase('qweRTY'));
// console.log(changeCase('mAnGo'));





////////////////////////////////////////////////////////////////

// const tittle = 'Top 10 benefits of React fraemwork';

// const words = tittle.toLowerCase();

// const normTittle = words.split(' ')

// const slug = normTittle.join("-")

// console.log(slug)

//////////////////////////////

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let total = 0;



// for (const number of array1){
//     total +=number;
// };

// for (const value of array2){
//     total += value;
// };

// const allArray = array1.concat(array2);

// for (const value of allArray){
//     total += value;
// }
// console.log(total)


//////////////////

// const logItems = function(items){
// for (const item of items){
//     console.log(item)
// }
// }

// logItems([ 'Mango', 'Poly', 'Kiwi', 'Ajax']);
// logItems([1,2,3,4,5]);

/////////////////////////////////////////////////

// const findSmallesNumber = function(numbers){
//     let smallestNumber = numbers[0];
    
//     for (const number of numbers){
//         // console.log(number);
//     if (number < smallestNumber){
//         smallestNumber = number;
//     }
//     }
//     return smallestNumber
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15]));
// console.log(findSmallesNumber([100, 54, 8, 12, 47]));

/////////////////////////////////////////////////////////////////
// const slugify = function(string){
//     return string.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Top 10 benefits of React fraemwork'));
// console.log(slugify('Azure Static Web Apps are Awesome'))

//////////////////////////////////////////////////

// const fn = function(){
// console.log(arguments)

// const arg = Array.from(arguments)
// console.log(arg);

// for(const arg of arguments){
//     console.log(arg)
// }
// }

// fn (1,2,3);
// fn (1,2,3,4,5);

////////////////////////////////////////////////////////////

//  const add = function(...args){
// console.log(args);

// let total = 0;

// for (const arg of args){
//     total +=arg
// }
// return total;
//  }

// console.log(add(1,2,3));
// console.log(add(1,2,3,4,5,6))

///////////////////////////////////////////

// const filterNumbers = function(array,...args){
//     console.log('array: ',array);
//     console.log('args: ',args);

//     const uniqueElements = [];

//     for (const element of array){
//         if (args.includes(element)){
           
//             uniqueElements.push(element);
//             console.log(`${element} есть везде`)

//         }
//     }
//     return uniqueElements
// }

// console.log(filterNumbers([1, 2, 3, 4, 5],10, 15, 20, 4, 1));

////////////////////////////////////////////////////////////////

// function  multiply (a,b){
//     return a * b;
// }
// console.log(multiply(3,3));
// console.log(multiply(5,5))

////////////////////

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

// console.log()

/////////////////////////////

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       return this.books;
//     },
//     addBook(bookName) {
//       this.books.push(bookName);
//     },
//     removeBook(bookName) {
//       const bookIndex = this.books.indexOf(bookName);
//       this.books.splice(bookIndex, 1);
//     },
//   };
  
//   console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
//   bookShelf.addBook("The Mist");
//   bookShelf.addBook("Dream Guardian");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
//   bookShelf.removeBook("The Mist");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']
/////////////////////////////////

// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);
// console.log(`${hours}:${minutes}`)

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

//////////////////////////////////

// function calcBMI({weight, height}) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
//   }
  
  // Было
  // console.log(calcBMI('88,3', '1.75'));
  // console.log(calcBMI('68,3', '1.65'));
  // console.log(calcBMI('118,3', '1.95'));
  
  // Ожидается
//   console.log(
//     calcBMI({
//       weight: '88,3',
//       height: '1.75',
//     }),
//   );
//   console.log(
//     calcBMI({
//       weight: '68,3',
//       height: '1.65',
//     }),
//   );
//   console.log(
//     calcBMI({
//       weight: '118,3',
//       height: '1.95',
//     }),
//   );

//////////////////////////////////////////////////

// function printContactsInfo({names, phones}) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//       console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
//   }
  
//   // Было
//   // printContactsInfo(
//   //   'Jacob,William,Solomon,Artemis',
//   //   '89001234567,89001112233,890055566377,890055566300',
//   // );
  
//   // Ожидается
//   printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300',
//   });

  /////////////////////////////////////////////

//   function getBotReport({
//     companyName,
//     bots: {repair: repairBots,defence: defenceBots},
// }) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
//   }
  
//   // Было
//   // console.log(getBotReport('Cyberdyne Systems', 150, 50));
  
//   // Ожидается
//   console.log(
//     getBotReport({
//       companyName: 'Cyberdyne Systems',
//       bots: {
//         repair: 150,
//         defence: 50,
//       },
//     }),
//   ); // "Cyberdyne Systems has 200 bots in stock"

////////////////////////////////////////////////////////

// Решение
// function getStockReport({ 
//     companyName,
//      stock,
//     }) {
//    let total = 0;

//    for (const value of Object.values(stock)){
//     total+=value
//    }
//     return `${companyName} has ${total} items in stock`;
//   }
  
//   console.log(
//     getStockReport({
//       companyName: 'Cyberdyne Systems',
//       stock: {
//         repairBots: 150,
//         defenceBots: 50,
//       },
//     }),
//   ); // "Cyberdyne Systems has 200 items in stock"
  
//   console.log(
//     getStockReport({
//       companyName: 'Belacci',
//       stock: {
//         shoes: 20,
//         skirts: 10,
//         hats: 5,
//       },
//     }),
//   ); // "Belacci has 35 item in stock"

////////////////////////////////////////////////////

// Дополни функцию createContact(partialContact) так, чтобы она возвращала новый 

// объект контакта с добавленными свойствами id и createdAt, а также list со значением "default" 
// если в partialContact нет такого свойства.

// Решение
// function createContact({list = 'default', ...partialContact}) {
//   return {
//     id: new Date(),
//     createdAt: Date.now(),
//     list,
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

//////////////////////////////////////////////////////////

// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так,
// чтобы она возвращала новый обьект со свойством fullName, вместо firstName и lastName.

// Решение
// function transformId({ firstName,lastName,...user}) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...user,
// }
// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// )