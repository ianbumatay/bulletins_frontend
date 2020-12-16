class Comment {
    constructor(id, bulletin_id, content){
        this.id = id, 
        this.bulletin_id = bulletin_id
        this.content = content
    }  

  rendercomments() { 
    
    // const divForm = document.getElementById("div-form") 
  
    // const commentForm = document.createElement("form")
    // commentForm.innerHTML += 
    // `
    // <input type="text"  placeholder="comment"> 

    // <input type="submit">

    // ` 
    // divForm.appendChild(commentForm) 

   const ul = document.createElement("ul")
   const li = document.createElement("li")
   li.innerText = this.content
   ul.appendChild(li)

  }

} 


