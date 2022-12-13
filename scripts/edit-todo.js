"use strict"

window.onload = function(){
    showInfoField(); 
    hideInfoField(); 

    document.getElementById("updateBtn").onclick = updateButtonOnClick; 
    document.getElementById("cancelBtn").onclick = cancelButtonOnClick; 
}



function updateButtonOnClick(){
    let inputValue = document.getElementById("updateBtn").value; 

    if (inputValue == todo[i].id)

    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(todo => {
            
        })
}

function cancelButtonOnClick(){
    
}

function showInfoField(){

}

function hideInfoField(){

}





// function that disables the form when "retrieve" is pressed 
// function that hides and shows the info fields 
// create and wire the "cancel" button 
// create the update button 