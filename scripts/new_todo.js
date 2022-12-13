"use strict"

window.onload = function(){

   document.getElementById("addBtn").onclick = addNewUserButton; 

}

function addNewUserButton(){
    let bodyData = {
    id: document.getElementById("addUserInput").value, 
    }
   
    fetch("http://jsonplaceholder.typicode.com/todos", {
        method: "POST", 
        body: JSON.stringify(bodyData),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(todos => {
            let userMessage = document.getElementById("textField"); 
            userMessage.innerHTML = todos.id + " New user added"; 
            
        }); 

       /*  .catch(err => {
            let errorMessage = document.getElementById(errorMessage); 
            errorMessage.innerHTML = "Unexpected error"; 
        }) */
    }
