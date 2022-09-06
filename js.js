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

const friends = [
    {name:'Mango', online: false},
    {name:'Kiwi', online: true},
    {name:'Poly', online: true},
    {name:'Ajax', online: false},
];

console.table(friends);

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

const getOfflineFriends = function(allFriends){
  
    const offlineFriends = [];
  
    for (const friend of allFriends){
        console.log(friend);
        console.log(friend.online);
    

    if (!friend.online){
       offlineFriends.push(friend)
    }

    return offlineFriends;
}}
console.log(getOfflineFriends(friends));