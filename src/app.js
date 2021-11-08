const obj1 = require('./logger')
const obj2 = require('./util/helper')
const obj3= require('../Validator/formatter')

obj1.mylog ("Abhisek")
obj1.welcome()
console.log(obj1.myurl)

console.log("---------------------------------------------------------------------------------")


obj2.printdate();
obj2.printmonth();
obj2.getBatchInfo();


console.log("---------------------------------------------------------------------------------")



obj3.trimString();
obj3.lowerCase();
obj3.uppercase();



console.log("---------------------------------------------------------------------------------")

const obj4 = require('lodash');
const arr1=["jan","feb","mar","apr","may","june","july","Aug","Sep","Oct","Nov","Dec"]
const arr2=[1,3,5,7,9,11,13,15,17,19,]
const arr3=([1,3],[2,2],[4,4],[7])
const arr4=([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])

console.log(obj4.chunk(arr1,3));
console.log(obj4.tail(arr2));
console.log(obj4.union(arr3));
console.log(obj4.fromPairs(arr4));



