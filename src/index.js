console.log("connecting...") 


 const BACKEND_URL = "http://localhost:3000/";  

 const bulletinForm = document.querySelector("#bulletin-form") 
 //console.log(bulletinForm) 

 bulletinForm.addEventListener("submit", submitForm) 
     //console.log("clicked")
 function submitForm(e){
   e.preventDefault() 

   const title = document.querySelector("#title").value
   const content = document.querySelector("#content").value 
   //console.log(title, content)  

   const options = {
     method: "POST",
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
     },
     body: JSON.stringify({bulletin: {title: title, content: content}})
   }

   
   fetch(`${BACKEND_URL}/bulletins`, options)
   .then(response => response.json())
   //.then(bulletinsObj => console.log(bulletinsObj.data))
   .then(bulletinsObj => renderBulletin(bulletinsObj.data))
   
 } 

//  function renderBulletin(bulletin){
//    //console.log(bulletin)
//    const div = document.querySelector("#bullets-container")
//    const htag = document.createElement("h2") 
//    const ptag = document.createElement("p") 
//    htag.innerText = bulletin.attributes.title
//    ptag.innerText = bulletin.attributes.content
//    div.appendChild(htag) 
//    div.appendChild(ptag)
//  }

//  function renderBUlletin(bulletin){ 
//   const div = document.querySelector("#bullets-container") 
//   div.innetHTML += 
//   `    
//    <h2> ${this.title} </h2>
//    <p> ${this.content} </p>
  
//   `
//  } 


// function fetchBulletin(){
//   fetch(`${BACKEND_URL}/bulletins`)
//    .then(response => response.json())
//    .then(console.log)
//    //.then(Obj => Obj.data.forEach(renderBulletin))
  
// } 

// fetchBulletin() 


function fetchBulletin(){
fetch(`${BACKEND_URL}/bulletins`)
  .then(response => response.json())
  .then(parsedBulletins => {

    for(const bulletin of parsedBulletins) { 
        console.log("rails obj", bulletin) 
        let b = new Bulletin( bulletin.data.attributes.title, bulletin.data.attributes.content)
        console.log("js obj", b) 
        b.renderBulletin()
    }
  }) 
} 

fetchBulletin()
