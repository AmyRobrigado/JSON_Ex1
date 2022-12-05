"use strict"

window.onload = function(){

    //show/hide functions
    

    //onclick event
    document.getElementById("loremBtn").onclick = OnClickLoremBtn;

    // fetch 
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
       for(let i=0; i<data.length; i++){
        document.getElementById("textField").innerHTML = data[i].title;
       } 
    })
   
}

function showLoremIpsumTitles(){

}

function hideLoremIpsumTitles(){

}


function OnClickLoremBtn(){
    document.getElementById("textField").innerHTML = data[i].title;
}

