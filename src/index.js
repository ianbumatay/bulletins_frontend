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



const divTag = document.querySelector("#bullets-container")
const createDiv = document.createElement("div") 



function fetchBulletins(){
    fetch(`${BACKEND_URL}/bulletins`)
      .then(response => response.json())
      .then(bulletins => bulletins.forEach(renderBulletins))
        
  
}  

fetchBulletins()  


const bulletinForm = document.querySelector("#bulletin-form") 
 //console.log(bulletinForm) 
 bulletinForm.addEventListener("submit", submitForm) 
     //console.log("clicked")


 function submitForm(e){
   e.preventDefault() 

   const title = document.querySelector("#title").value
   const content = document.querySelector("#content").value 
   console.log(title, content)  

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
  .then(bulletins => renderBulletins(bulletins))  

  }





function renderBulletins(bulletin){

  // const divTag = document.querySelector("#bullets-container")
  // const createDiv = document.createElement("div")

  divTag.appendChild(createDiv) // Dynamic <div>

  const hTag = document.createElement("h2")
  hTag.innerText = bulletin.data.attributes.title

  const pTag = document.createElement("p")
  pTag.innerText = bulletin.data.attributes.content 

  const commentForm = document.createElement("form")
  commentForm.innerHTML += `<input type="text"  placeholder="comment"> <input type="submit">`
  commentForm.addEventListener("submit", submitCommentForm)

  const createCommentList = document.createElement("ul")

  createDiv.append(hTag, pTag, commentForm, createCommentList) 

} 


function submitCommentForm(e){
  e.preventDefault() 

  const comment = e.target.children[0].value
   //console.log(comment)  
   commentList = e.target.nextElementSibling
   //console.log(commentList)

   const createLi = document.createElement("li")
   createLi.innerText = comment 

   commentList.appendChild(createLi)
   

   const options = {
    method: "POST",
    headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
    },
    body: JSON.stringify({comment: {content: comment}})
  }

 fetch(`${BACKEND_URL}/comments`, options)



} 




