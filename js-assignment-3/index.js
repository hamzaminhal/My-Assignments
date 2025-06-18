// debugger
var expenses = [];
var totalExpense =0
var avgExp

for(let i=1; i<=7; i++){
   var expense = parseFloat(prompt(`Please enter expense of day ${i}`));
   if(isNaN(expense)){
       alert("please enter only number")
       i--
    }else{
       expenses.push(expense)
   }
}

function getToExpense(){
   
   for(var i=0; i<expenses.length; i++){
      totalExpense += expenses[i]
   }
   document.getElementById("total").innerText = `Total Expense of the week is ${totalExpense}`

}
function getAverageExpense(){
      getToExpense()
      avgExp = totalExpense/expenses.length
      document.getElementById("avg").innerText = `Average Expense of the week is ${avgExp}` 
   }


