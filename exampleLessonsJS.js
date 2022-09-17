// const max = 100;
// const min = 20;

// for (let i = min; i <= max;i += 5){
//     console.log(i)
// }

//////////////////////////////////////

// const genres = ["Jazz","Blues"];
// genres.push("Рок-н-ролл")
// const lastElement = genres.length-1
// const deleteElement =genres.slice(0,1)
// genres.splice(0,"Country", "Reggae")

// console.log(genres)
// console.log(genres[0]);
// console.log(genres[lastElement]);
// console.log(deleteElement);

//////////////////////////////////////

// const values = '8 11';

// console.log()

//////////////////////////////////////

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i=1; i< fruits.length; i+=1)
// console.log(`${fruits[i]}`,i)

///////////////////////////////////////////////

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const phoneNames = names.split(',');
// const phoneNumber = phones.split(',')

// console.log(phoneNames)
// console.log(phoneNumber);

// for (let i=0;i<phoneNames.length;i+=1){
//     console.log(`${phoneNames[i]}:${phoneNumber[i]}`)
// }

///////////////////////////////////////////////////

// const string = 'Welcome to the future';
// const srtArr = string.split(' ')

// srtArr.shift();
// srtArr.pop()

// console.log(srtArr)

///////////////////////////////////////////////

// const string = 'Welcome to the future';

// console.log(string.split('').reverse().join(''))

////////////////////////////////////////////////
// function calcBMI (weight, height) {
//     const weightNum = parseFloat(weight.replace(',','.'));
//     const heightNum = parseFloat(height.replace(',','.'));

//     return parseFloat(weightNum / Math.pow(heightNum,2)).toFixed(1);

// }


// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

////////////////////////////////////////

// function min(a,b){
// //  return a < b ? a : b;

// let res = arguments[0]
// for (const num of arguments){
//     if (num < res){
//         res = num
//     }
// }
// return res
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1, -1)); // 1

/////////////////////////////////////////

// function getRectArea(dimensions) {
//     const [x,y] = dimensions.split(' ');

//     return parseFloat(x) * parseFloat(y)
// }

// console.log(getRectArea('8 11'));

/////////////////////////////////////

// function logItems(items) {
//     for (let i=0; i< items.length; i+=1){
//         console.log(`${i+1} - ${items[i]}`)
//     }
    
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//////////////////////////////////////////////////

// function printContactsInfo(names, phones) {
//     const phoneNames = names.split(',');
//     const phoneNumber = phones.split(',');

//     for (let i=0;i<phoneNames.length;i+=1){
//     console.log(`${phoneNames[i]}:${phoneNumber[i]}`)
//     }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

////////////////////////////////////////////////////////

// function findLargestNumber(numbers) {
//     let res = numbers[0];

//     for (const number of numbers) {
//         if (number > res) {
//             res = number
//         }
//     }

//     return res;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

//////////////////////////////////////////////////////////

// function calAverage() {
//     let total = 0;

// for (const value of arguments){
//     total += value
// }
// return total / arguments.length
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

////////////////////////////////////////////////////

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name){
//     if (courses.includes(name)) return;
     
//     courses.push(name)
// }


// function removeCourse(name){
//     const index = courses.indexOf(name)

//     if (index != -1){
//         courses.splice(index, 1);
//     } else{
//         console.log('Courses not found')
//     }
// }


// function updateCourse(oldName, newName){
//     const index = courses.indexOf(oldName)

//     if (index != -1){
//         courses.splice(index, 1, newName);
//     } else{
//         console.log('Courses not found')
//     }
// }
// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

/////////////////////////////////////////////////////////////

// function createProduct(partialProduct, callback) {
//     const product = { id: Date.now(), ...partialProduct };
//     callback(product);
//   }
  
//   function logProduct(product) {
//     console.log(product);
//   }
  
//   function logTotalPrice(product) {
//     console.log(product.price * product.quantity);
//   }
  
//   createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
//   createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

//////////////////////////////////////////////////

// const createProduct = (partialProduct, callback) => {
//     const product = { id: Date.now(), ...partialProduct };
//     callback(product);
//   }
  
//   const logProduct = (product) => {
//     console.log(product);
//   }
  
//    const logTotalPrice = (product) => {
//     console.log(product.price * product.quantity);
//   }
  
//   createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
//   createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/////////////////////////////////////////

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = (message) => {
//   console.log(`✅ Success! ${message}`);
// }
// const  handleError = (message) => {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//////////////////////////////////////

// const  each = (array, callback) => {
//     const newArr = [];
//     for (const el of array) {
//       newArr.push(callback(el));
//     }
//     return newArr;
//   }
  
//   console.log(
//     each([64, 49, 36, 25, 16],  (value) => value * 2),
//   );
//   console.log(
//     each([64, 49, 36, 25, 16], (value) => value - 10),
//   );
//   console.log(
//     each([64, 49, 36, 25, 16],  (value) => Math.sqrt(value)),
//   );
//   console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value))
//   );
//   console.log(
//     each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value))
//   );

/////////////////////////////////////

// function logItems(items) {
//     console.log(items);
    
//    items.forEach((item,i)=>console.log(`${i + 1} - ${items[i]}`))
//   }
  
//   logItems(['Mango', 'Poly', 'Ajax']);
//   logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/////////////////////////////////////////

// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     // for (let i = 0; i < nameList.length; i += 1) {
//     //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//     // }
//     nameList.forEach((name,i) => console.log(`${nameList[i]}: ${phoneList[i]}`))
// }
  
//   printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300',
//   });

///////////////////////////////

// function calсulateAverage(...args) {
//     let total = 0;
//     // for (let i = 0; i < args.length; i++) {
//     //   total += args[i];
//     // }
//     // return total / args.length;

//     args.forEach((item) => (total += item));

//     return total / args.length;
//   }
  
//   console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
//   console.log(calсulateAverage(14, 8, 2)); // 8
//   console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

///////////////////////////////////////
// function abbrevName(name){
//   const letter = name[0];
//     for (i>0; i<name.length; i+=1){
//       if(name[i]=name.toUpperCase()){
//       return letter.push(name[i])
//     }
//     }
// }
function abbrevName(name){
  const answer = [name[0]]
  for(let i = 0; i < name.length; i++) {
      if(name[i] === " ") {
          answer.push(name[i + 1]);
      }
  }
  return answer.map(el => el.toUpperCase()).join(".")
}
console.log(abbrevName(Sam, Harris))