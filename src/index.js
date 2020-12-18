console.log("connecting...") 

const BACKEND_URL = "http://localhost:3000/";   



// function fetchBulletin(){
//   fetch(`${BACKEND_URL}/bulletins`)
//     .then(response => response.json())
//     .then(parsedBulletins => {
  
//       for(const bulletin of parsedBulletins) { 
//           //console.log("rails obj", bulletin) 
//           //debugger; 
//           const commentsArray = [] 
//           bulletin.data.attributes.comments.forEach(comment => { 
//             let newComment = new Comment(comment.id, comment.bulletin_id, comment.content)
//             commentsArray.push(newComment)
//           })

//           let b = new Bulletin( bulletin.data.id, bulletin.data.attributes.title, bulletin.data.attributes.content, commentsArray)
//           //console.log("js obj", b) 
//           b.renderBulletins()
//     }
//   }) 
// }   

//fetchBulletin()  


 const bulletinForm = document.querySelector("#bulletin-form") 
 //console.log(bulletinForm) 
 bulletinForm.addEventListener("submit", Bulletin.submitBulletin) 
     //console.log("clicked")


//  function submitForm(e){
//    e.preventDefault() 

//    const title = document.querySelector("#title").value
//    const content = document.querySelector("#content").value 
//    //console.log(title, content)  

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
//     .then(bulletin => { 
      
//            //console.log("rails obj", bulletin) 
//           let b = new Bulletin(bulletin.data.id, bulletin.data.attributes.title, bulletin.data.attributes.content, bulletin.data.attributes.commentw)
//           //console.log("js obj", b) 
//           b.renderBulletin()
      
//     }) 
   
//  } 


function deleteUser(){

  //debugger;

    let bulletinId = parseInt(event.target.dataset.id) 

    fetch(`${BACKEND_URL}/bulletins/${bulletinId}`, {
      method: "DELETE" 
    }) 
    this.location.reload()
} 






function submitComment(e) { 
  e.preventDefault()

  //console.log(e.target)

  const userInput = e.target.children[0].value
  console.log(userInput)  
   
  commentList = e.target.nextElementSibling
  console.log(commentList) 

  const bulletinId = e.target.parentElement.dataset.id 
  console.log(e.target.parentElement)


   const createLi = document.createElement("li")
   console.log(createLi)
   createLi.dataset.id = bulletinId
   createLi.innerText = userInput//.data.attributes.content 

   console.log(userInput)
   commentList.appendChild(createLi)  

    const options = {
      method: "POST",
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment: {content: userInput, bulletin_id: bulletinId}})
    } 
   
    fetch(`${BACKEND_URL}/comments`, options)
    .then(response => response.json())
    .then(comment => {
      
      console.log(comment)
      let c = new Comment(comment.data.id, comment.data.attributes.bulletinId, comment.data.attributes.content ) 
      console.log(c)
      //c.renderComments()
      //Comment {id: "50", bulletin_id: undefined, content: "cghv"}

    })  
    e.target.resest()
  }  


  function fetchComments(){
  fetch(`${BACKEND_URL}/comments`)
  //   .then(response => response.json())
  //   .then(comments => {
  
  //     for(const comment of comments) { 
  //         console.log("rails obj", comment) 
  //         let c = new Comment(comment.data.id, comment.data.attributes.bulletinId, comment.data.attributes.content ) 
  //         console.log(c)
  //         console.log("js obj", c) 
  //        //c.renderComments()
  //   }
  // }) 
}   

fetchComments()




function deleteBulletin(e){
  //console.log(e.target.parentElement) 
  let bulletinId = e.target.parentElement.dataset.id
  fetch(`${BACKEND_URL}/bulletins/${bulletinId}`, {
      method: "DELETE" 
    
  })
  e.target.parentElement.remove()
} 

Bulletin.fetchBulletin()  