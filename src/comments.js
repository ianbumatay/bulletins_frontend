class Comment {
  constructor(comment){
    this.id = comment.id 
    this.bulletin_id = comment.attributes.bulletin_id
    this.content = comment.attributes.content
  }   
  


static submitComment(e) { 
  e.preventDefault()

const userInput = e.target.children[0].value //input

const commentList = e.target.nextElementSibling //this is ul button

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
      
    let c = new Comment(comment.data) 
      c.renderComment(commentList, bulletinId)
    
    })  
    e.target.reset() 
  }   
  
  
  renderComment(commentList, bulletinId){  
    
    const createLi = document.createElement("li")
    createLi.dataset.id = this.bulletinId
    createLi.innerText = this.content
    
     commentList.appendChild(createLi)  

  }  

  static fetchBulletin(){
    fetch(`${BACKEND_URL}/comments`)
    .then(response => response.json())
    .then(comments => {
    
      for(const comment of comments){
        console.log("rails", bulletins)
        let c = new Comment(comment) 
        console.log("js", b)
        c.renderComment(commentList)
      }
    })
  }   


    
} // 



