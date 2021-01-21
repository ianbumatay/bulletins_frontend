console.log("connecting...") 

const BACKEND_URL = "http://localhost:3000/";  

const bulletinForm = document.querySelector("#bulletin-form") 
bulletinForm.addEventListener("submit", Bulletin.submitBulletin) 
   
Bulletin.fetchBulletin()  




