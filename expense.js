 const budgetValue = document.getElementById("budgetValue");
const product = document.getElementById("productValue");
const price = document.getElementById("priceValue");
const calBtn = document.getElementById("calBtn")
 const budgetNumber = document.getElementById("budgetNumber")
const addBtn = document.getElementById("addBtn")
let exp =[] 





calBtn.addEventListener("click" , event =>{
    event.preventDefault();
    getBudget();

   
})
addBtn.addEventListener("click" , event =>{
;
 if(budgetValue.value === "" || product.value ==="" || price.value ==="" ){
    return
 } 
  getExpense()
  getBal()
 addTask()


} )

function getBudget(){
   budget = Number(budgetValue.value);
   budgetNumber.textContent= `$${budget}`
   return budget
}


function addTask(){
    list = document.getElementById("list")
    li = document.createElement("li")
    delbtn = document.createElement("button")
    priceSpan = document.createElement("span")
    nameSpan = document.createElement("span")
    nameSpan.textContent = product.value;
    delbtn.classList.add("del-list")

    delbtn.textContent = "Delete"
    delbtn.style.fontSize = "0.7rem"
    delbtn.style.marginTop = "0"
    priceSpan.textContent = `$${price.value}`
    li.appendChild(nameSpan)
    li.appendChild(priceSpan)
    li.appendChild(delbtn)
    list.prepend(li)
    li.classList.add("li")
    li.style.display = "flex"
    li.style.textAlign = "center" 
    li.style.justifyContent = "space-between"
    li.style.padding = "0.8rem 1rem";
    li.style.alignItems = "cemter"
    
       product.value = "";
       price.value = "";
       
       // local storage
       
  
 localStorage.setItem("expenses" , list.innerHTML)


 //////
     
    delbtn.addEventListener("click" , event =>{
    event.target.parentElement.remove()
     localStorage.setItem("expenses" , list.innerHTML)
  
})

}


function getExpense(){
   exp.push(parseFloat(price.value))
   getTotal()

   const total= getTotal()
   return total

}
function getTotal(){///the sum of the prices
const total = exp.reduce((previous , current ) => previous + current) 
document.getElementById("expenseNumber").textContent = `$${total}`
return total
}

function getBal(){
const totalExpense = getExpense()
const totalBudget = getBudget()
totalBal = Number(totalBudget) - Number(totalExpense)
console.log(totalBal)
document.getElementById("balNumber").textContent = `$${totalBal}`
}


window.addEventListener("DOMContentLoaded" , ()=>{
    list = document.getElementById("list")
    list.innerHTML = localStorage.getItem("expenses") || "";


    document.querySelectorAll(".del-list").forEach(btn =>{
        btn.addEventListener("click" , event =>{
            event.target.parentElement.remove()
            localStorage.setItem("expenses" , list.innerHTML)
        })
    })
})


