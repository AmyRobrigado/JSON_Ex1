"use strict"

window.onload = function(){
    disableFormField(); 
    enableFormField(); 
    showInfoField(); 
    hideInfoField(); 
    
    
    document.getElementById("retrieveBtn").onclick = retrieveButtonOnClick; 
    document.getElementById("updateBtn").onclick = updateButtonOnClick; 
    document.getElementById("cancelBtn").onclick = cancelButtonOnClick; 
}

function retrieveButtonOnClick(){
    let infoInput = document.getElementById("infoInput").value; 
 
    fetch("https://jsonplaceholder.typicode.com/todos/" + infoInput)
        .then(response => response.json())
        .then(todos => {
        
            let idPara = document.getElementById("idPara"); 
            let titlePara = document.getElementById("titlePara"); 
            let completePara = document.getElementById("completePara"); 

            idPara.value = todos.id;
            titlePara.value = todos.title; 
            completePara.value = todos.completed;

            showInfoField();  
            disableFormField(); 
        })
}

function updateButtonOnClick(){
    let bodyData = {
        "id": document.getElementById("idPara").value,
        "title": document.getElementById("titlePara").value,
        "completed": document.getElementById("completePara").value, 
      }
    fetch("http://jsonplaceholder.typicode.com/todos", {
        method: "PUT", 
        body: JSON.stringify(bodyData), 
        headers: {"Content-type": "application/json; charset=UTF-8" }  
    })
    .then(response => response.json())
    .then(todos => {
        let textField = document.getElementById("textField"); 

        textField.innerHTML = "Your current information has been updated"; 
    })
    .catch(err => {
        let confirmationMessage = document.getElementById("confirmationMessage"); 
        confirmationMessage.innerHTML = "Unexpected Error"; 
    })
}

function cancelButtonOnClick(){
    window.location.href= "../pages/index.html"
}

function disableFormField(){
    document.getElementById("infoInput").disabled = true; 
}

function enableFormField(){
    document.getElementById("infoInput").disabled = false; 
}

function showInfoField(){
    document.getElementById("infoContainer").style.display = "block"; 
}

function hideInfoField(){
    document.getElementById("infoContainer").style.display = "none"; 
}