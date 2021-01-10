class Comment {
  constructor(comment){
    this.id = comment.id 
    this.bulletin_id = comment.attributes.bulletin_id
    this.content = comment.attributes.content
  }   

  static fetchComment(){
    fetch(`${BACKEND_URL}/comments`)
    .then(response => response.json())
    .then(comments => {
    
      for(const comment of comments){
        console.log("rails", comment)
        let c = new Comment(comment.data) 
        console.log("js", c)
        c.renderComment()
      }
    })
  }  
 

  static submitComment(e) { 
    e.preventDefault()

  const userInput = e.target.children[0].value //input

  //const commentList = e.target.nextElementSibling //this is ul button 
 
  //const commentList = document.querySelector("#comment-ul") 

  const bulletinId = e.target.dataset.id  //div
  console.log(e.target) 


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
        c.renderComment()
     })  
  }     

  renderComment(){  

    //const commentList = document.querySelector("#comment-ul")
    //console.log(commentList)
    const form = document.querySelector("#comment-form")
    const commentList = document.createElement("ul")

    const createLi = document.createElement("li")
    createLi.dataset.id = this.bulletin_id
    createLi.innerText = this.content 
    console.log(this.content)

    form.append(commentList)
    commentList.append(createLi)  
 }  


 







  // static submitComment(e) { 
  //   e.preventDefault()

  // const userInput = e.target.children[0].value //input

  // const commentList = e.target.nextElementSibling //this is ul button 
  // //const bindCommentList = commentList.bind() 
  // //const commentList = document.querySelector("#comment-ul") 

  // const bulletinId = e.target.parentElement.dataset.id  
  // //console.log(e.target.parentElement) 

  // // const bulletinId = document.querySelector("#create-div")
  // // bulletinId.dataset.id = bulletinId
  // // console.log(bulletinId)  

  // const createLi = document.createElement("li")
  //   createLi.dataset.id = bulletinId
  //   createLi.innerText = userInput
    
  //   //commentList.appendChild(createLi)  

  // const options = {
  //   method: "POST",
  //   headers: {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({comment: {content: userInput, bulletin_id: bulletinId}})
  // } 

  //   fetch(`${BACKEND_URL}/comments`, options)
  //     .then(response => response.json())
  //     .then(comment => {
        
  //     let c = new Comment(comment.data) 
  //       c.renderComment(commentList, createLi)
      
  //    })  
  //   e.target.reset() 
  // }    


//renderComment(commentList, createLi){  

//     //const commentList = document.querySelector("#comment-ul") 
//      //  console.log(commentList)
      
//     const createLi = document.createElement("li")
//     createLi.dataset.id = this.bulletin_id
//     createLi.innerText = this.content
    
    //commentList.appendChild(createLi)  
 // }  


  // static fetchComment(){
  //   fetch(`${BACKEND_URL}/comments`)
  //   .then(response => response.json())
  //   .then(comments => {
    
  //     for(const comment of comments){
  //       console.log("rails", comment)
  //       let c = new Comment(comment.data) 
  //       console.log("js", c)
  //       c.renderComment()
  //     }
  //   })
  // }  



}//



