console.log("connecting...") 

//const BACKEND_URL = "http://localhost:3000/";  


// function fetchBulletin(){
//   fetch(`${BACKEND_URL}/bulletins`)
//     .then(response => response.json())
//     .then(parsedBulletins => {
  
//       for(const bulletin of parsedBulletins) { 
//           //console.log("rails obj", bulletin) 
//           let b = new Bulletin( bulletin.data.id, bulletin.data.attributes.title, bulletin.data.attributes.content)
//           console.log("js obj", b) 
//           b.renderBulletin()
//     }
//   }) 
// }   

// fetchBulletin()  


//  const bulletinForm = document.querySelector("#bulletin-form") 
//  //console.log(bulletinForm) 
//  bulletinForm.addEventListener("submit", submitForm) 
//      //console.log("clicked")


//  function submitForm(e){
//    e.preventDefault() 

//    const title = document.querySelector("#title").value
//    const content = document.querySelector("#content").value 
//    console.log(title, content)  

//    const options = {
//      method: "POST",
//      headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//      },
//      body: JSON.stringify({bulletin: {title: title, content: content}})
//    }

   

//   fetch(`${BACKEND_URL}/bulletins`, options)
//     .then(response => response.json())
//     .then(bulletin => 
      
    //   { 
      
    //        console.log("rails obj", bulletin) 

    //       let b = new Bulletin(bulletin.data.id, bulletin.data.attributes.title, bulletin.data.attributes.content)
    //       //console.log("js obj", b) 
    //       b.renderBulletin()
      
    // }) 
   
 //} 


// function deleteUser(){

//   //debugger;

//     let bulletinId = parseInt(event.target.dataset.id) 

//     fetch(`${BACKEND_URL}/bulletins/${bulletinId}`, {
//       method: "DELETE" 
//     }) 
//     this.location.reload()
//}
const BACKEND_URL = "http://localhost:3000/";  

const bulletinForm = document.querySelector("#bulletin-form") 
//const titleInput = document.querySelector("#title")
//console.log(titleInput) 
//const contentInput =document.querySelector("#content") 
//console.log(content) 

//add event 
bulletinForm.addEventListener("submit", submitForm) 

//create submitForm function 

function submitForm(e){
  e.preventDefault() 

  const title = document.querySelector("#title").value
  const content =document.querySelector("#content").value  

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
           .then(bulletins => renderBUlletin(bulletins)) 

}

