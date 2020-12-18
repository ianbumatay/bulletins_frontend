class Comment {
    constructor(comment){
        this.id = comment.id 
        this.bulletin_id = comment.attributes.bulletin_id
        this.content = comment.attributes.content
    }   

      static submitComment(e) { 
        e.preventDefault()

      const userInput = e.target.children[0].value
      const commentList = e.target.nextElementSibling
      const bulletinId = e.target.parentElement.dataset.id 
     
       const createLi = document.createElement("li")
       createLi.dataset.id = bulletinId
       createLi.innerText = userInput
       console.log(createLi)
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
          
          console.log("rails" , comment)
          let c = new Comment(comment.data)
          console.log(c)
          
          
        })  
        e.target.reset()
      }   

    
    
    
    
   
} //


