class Comment {
    constructor(id, bulletin_id, content){
        this.id = id, 
        this.bulletin_id = bulletin_id
        this.content = content
    }   

    
  

    renderComments() { 
    
    const commentsContainer = document.querySelector("#comments-container")
    commentsContainer.innerHTML += 
    
    `
    <ul> 
      <li> ${this.content}</li> 
    </ul>

    `

  //  const ul = document.createElement("ul")
  //  const li = document.createElement("li")
  //  li.innerText = this.content
  //  ul.appendChild(li)

   }

} 


