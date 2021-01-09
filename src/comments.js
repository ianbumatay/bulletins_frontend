class Comment {
  constructor(comment){
    this.id = comment.id 
    this.bulletin_id = comment.attributes.bulletin_id
    this.content = comment.attributes.content
  }  
  


static submitComment(e) { 
  e.preventDefault()

const userInput = e.target.children[0].value //input
//this.userInput = userInput

const commentList = e.target.nextElementSibling //this is ul button
//this.commentList = commentList
//console.log(commentList)

const bulletinId = e.target.parentElement.dataset.id 
//  this.bulletinId = bulletinId
// // this.bulletinId = bulletinId
//console.log(e.target.parentElement)

// const createLi = document.createElement("li")
// createLi.dataset.id = bulletinId
// createLi.innerText = userInput  
// commentList.appendChild(createLi)  

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
      
    let c = new Comment(comment.data) 
      c.renderComment(commentList, bulletinId)
    
    })  
    e.target.reset() 

  }   
  
  
  renderComment(commentList, bulletinId){  

    //const commentForm = document.querySelector("#comment-form") //form
    //console.log(commentForm) 

    //const commentList = commentForm.nextElementSibling // ul
    //console.log(commentList) 

    // const divId = document.querySelector("#create-div")
    // console.log(divId)
    
    const createLi = document.createElement("li")
    createLi.dataset.id = this.bulletinId
    createLi.innerText = this.content
    
     commentList.appendChild(createLi)  

  } 

//   static fetchComment(){
//   fetch(`${BACKEND_URL}/comments`)
//   .then(response => response.json())
//   .then(comments => {
  
//     for(const comment of comments){
//       //console.log("rails", bulletins)
//       let b = new Comment(comment.data) 
//       //console.log("js", b)
//       //b.renderComments();
//     }
//   })
// }   
  

    
} // 

// static fetchBulletin(){
//   fetch(`${BACKEND_URL}/comments`)
//   .then(response => response.json())
//   .then(bulletins => {
  
//     for(const comment of comments){
//       //console.log("rails", bulletins)
//       let b = new Comment(comment.data) 
//       //console.log("js", b)
//       b.renderComments();
//     }
//   })
// }   




// class Comment {
//   constructor(comment){
//     this.id = comment.id 
//     this.bulletin_id = comment.attributes.bulletin_id
//     this.content = comment.attributes.content
//   } 
  
//   static submitComment(e){
//     e.preventDefault() 
//    //debugger;
//     //console.log(e.target.firstElementChild) 

//     const userInput = e.target.firstElementChild.value

//     //query input 

//     const options = {
//       method: "POST", 
//       headers: {
//         'Accept': 'application/json', 
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({comment: {content: userInput}}) // set up params
//     } 

//     fetch(`${BACKEND_URL}/comments`, options)
//       .then(response => response.json()) 
//       .then(comment => { console.log(comment.data)
        
//         // let c = new Comment(comment.data)
//         //    console.log(c)
//       })


//   }



// } 

