class Comment {
  constructor(comment){
    this.id = comment.id 
    this.bulletin_id = comment.bulletin_id
    this.content = comment.content 
    
  }   



static submitComment(e) { 
  e.preventDefault()

  const userInput = e.target.children[0].value 
  const commentList = e.target.nextElementSibling 
  const bulletinId = e.target.parentElement.dataset.id  

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
        
      let c = new Comment(comment.data.attributes) 
        c.renderComment(commentList)
     })  
     e.target.reset()
  }    



  
  renderComment(commentList){  

    const createLi = document.createElement("li")
    createLi.dataset.id = this.bulletin_id
    createLi.innerText = this.content
  
     commentList.append(createLi)  
 }  


}



