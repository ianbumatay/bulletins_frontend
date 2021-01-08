class Comment {
  constructor(comment){
    this.id = comment.id 
    this.bulletin_id = comment.attributes.bulletin_id
    this.content = comment.attributes.content
  }    


static submitComment(e) { 
  e.preventDefault()

const userInput = e.target.children[0].value //input


// const input2 = document.querySelector("#comment-form") 
// console.log(input2.children[0].value)
// console.log(input2.parentElement)

const commentList = e.target.nextElementSibling //delete button
console.log(commentList)

const bulletinId = e.target.parentElement.dataset.id 
//console.log(bulletinId)

const createLi = document.createElement("li")
createLi.dataset.id = bulletinId
createLi.innerText = userInput  

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
      
    let c = new Comment(comment.data) 
      c.render()
    
    })  
    e.target.reset()
  }    
  
  render(){
    const commentForm = document.querySelector("#comment-form") 
    console.log(commentForm)
    // console.log(commentForm.children[0])
    console.log(commentForm.nextElementSibling) 

    const commentList = commentForm.nextElementSibling

    // const ul = document.createElement("ul") 
    // const li = document.createElement("li") 

    // let createDiv = document.querySelector("#create-div")

    // ul.append(li)
    // createDiv.append(ul)
    

  }
  

    
} //


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

