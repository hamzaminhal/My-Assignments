// debugger
var expenses = [];

for(let i=1; i<=7; i++){
   var expense = parseFloat(prompt(`Please enter expense of day ${i}`));
   if(isNaN(expense)){
       alert("please enter only number")
       i--
    }else{
       expenses.push(expense)
   }
}

console.log(expenses)