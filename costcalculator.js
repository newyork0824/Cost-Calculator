sumbitBtn = document.getElementById("submit-btn")
expenseInput = document.getElementById("expense-input")
costInput = document.getElementById("cost-input")
expensesTable = document.getElementById("expenses-table")
totalCostTable = document.getElementById("total-cost-table")


let costs = []
let expensesList = []
  let totalCosts = 0

function findTotalCosts(){
  totalCosts = 0
  for(let i=0; i<costs.length; i++) {
    
    totalCosts += parseInt(costs[i])
  }
    console.log(totalCosts)
  
  totalCostTable.innerHTML = ` 
        <tr>
          <th>Total Cost </th>
        </tr>
        <tr>
        <td>$${totalCosts}</td>
        </tr>
      </table>`
}


sumbitBtn.addEventListener("click", function(){
  expensesList.push(expenseInput.value)
  costs.push(costInput.value)
 
  expensesTable.innerHTML += 
    `<tr>
      <td> ${expenseInput.value} </td>
      <td> $${costInput.value} </td>
     </tr>`
  
  findTotalCosts()
})



