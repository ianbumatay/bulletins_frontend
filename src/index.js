console.log("connecting...") 

const BACKEND_URL = "http://localhost:3000/";   

const bulletinForm = document.querySelector("#bulletin-form") 

//const createLi = document.createElement("li")

bulletinForm.addEventListener("submit", Bulletin.submitBulletin) 


     
Bulletin.fetchBulletin()  