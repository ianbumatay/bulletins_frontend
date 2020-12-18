class Comment {
    constructor(comment){
        this.id = comment.id 
        this.bulletin_id = comment.bulletin_id
        this.content = comment.content
    }   

    static createComment(e){
      e.preventDefault()
      console.log(e.target)
    
      const userInput = e.target.children[0].value
      console.log(userInput)  
       
       commentList = e.target.nextElementSibling//e.target.nextElementSibling
       //console.log(commentList) 
    
      const bulletinId = e.target.parentElement.dataset.id 
      //console.log(e.target.parentElement) 

      Comment.submitComment(userInput, commentList, bulletinId) 

      e.target.reset()

    }

    static submitComment(comment, commentList, bulletinId) { 
    
    
      // console.log(e.target)
    
      // const userInput = e.target.children[0].value
      // console.log(userInput)  
       
      //  commentList = e.target.nextElementSibling//e.target.nextElementSibling
      //  console.log(commentList) 
    
      // const bulletinId = e.target.parentElement.dataset.id 
      // console.log(e.target.parentElement)
    
    
      //  const createLi = document.createElement("li")
      //  //console.log(createLi)
      //  createLi.dataset.id = this.bulletinId
      //  createLi.innerText = this.userInput//.data.attributes.content 
    
      //  //console.log(userInput)
      //  commentList.appendChild(createLi)  
    
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
          
          //console.log(comment)
          let c = new Comment(comment)//(comment.data.id, comment.data.attributes.bulletinId, comment.data.attributes.content ) 
          //console.log(c)
          c.renderComments(commentList)
          
        })  
      
      }   

    renderComment(commentList){ 
     
       const createLi = document.createElement("li")
       //console.log(createLi)
       createLi.dataset.id = this.bulletinId
       createLi.innerText = this.userInput//.data.attributes.content 
    
       //console.log(userInput)
       commentList.appendChild(createLi)  

    }
 
    
    
    
    
   
} //


