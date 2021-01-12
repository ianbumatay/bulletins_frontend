class Comment {
  constructor(comment){
    this.id = comment.id 
    this.bulletin_id = comment.bulletin_id
    this.content = comment.content 
    
  }   



static submitComment(e) { 
  e.preventDefault()

  const userInput = e.target.children[0].value //form input 

  const commentList = e.target.nextElementSibling // <ul>
  //this.commentList = commentList
  console.log(commentList)
  //const commentList = document.querySelector("#comment-ul") 

  const bulletinId = e.target.parentElement.dataset.id  //div. parentElement
  console.log(e.target.parentElement) 


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
        
       // console.log("submit", comment)
      let c = new Comment(comment.data.attributes) 
        c.renderComment(commentList)
        //console.log(c)
     })  
   // e.target.reset()
  }    



  
  renderComment(commentList){  
   
    //const commentList = document.querySelector("#comment-ul") 
    console.log(commentList)

    const createLi = document.createElement("li")
    createLi.dataset.id = this.bulletin_id
    createLi.innerText = this.content
    console.log(this.content) 
    console.log(this.bulletin_id)

    console.log(this)

     commentList.append(createLi)  
 }  




  // static fetchComment(commentList){
  //   fetch(`${BACKEND_URL}/comments`)
  //   .then(response => response.json())
  //   .then(commentObj => { 

  //     console.log(commentObj)
    
  //     for(let comment of commentObj){
  //        console.log("rails", comment)
  //       let c = new Comment(comment.data) 
  //       //console.log("js", c)
  //       c.renderComment(commentList)
  //     }
  //  })
  // }  



}//



