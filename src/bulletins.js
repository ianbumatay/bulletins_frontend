


class Bulletin{

    constructor(id, title, content, comments){
        this.id = id 
        this.title = title 
        this.content = content 
        this.comments = comments  
        console.log(this)
     } 




     static fetchBulletin(){
        fetch(`${BACKEND_URL}/bulletins`)
        .then(response => response.json())
        .then(bulletins => {
        
     for(const bulletin of bulletins) { 
        //console.log("rails obj", bulletin) 
        //debugger; 
    //    const commentsArray = [] 
    //    bulletin.data.attributes.comments.forEach(comment => { 
    //    let newComment = new Comment(comment.id, comment.bulletin_id, comment.content)
    //    commentsArray.push(newComment)

     //})

      let b = new Bulletin( bulletin.data.id, bulletin.data.attributes.title, bulletin.data.attributes.content, bulletin.data.attributes.comments)
      //console.log("js obj", b) 
       this.renderBulletins()

      }
    })
   }   
  
  

  

  renderBulletins(){

     const divTag = document.querySelector("#bullets-container")
     const createDiv = document.createElement("div")
     createDiv.dataset.id = this.id
  
    divTag.appendChild(createDiv) // Dynamic <div>
  
    const hTag = document.createElement("h2")
    hTag.innerText = this.title//bulletin.data.attributes.title
    const pTag = document.createElement("p")
    pTag.innerText = this.content//bulletin.data.attributes.content 


 
    const commentForm = document.createElement("form")
    commentForm.innerHTML += `<input type="text"  placeholder="comment"> <input type="submit">`
    commentForm.addEventListener("submit", submitComment) 


    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "DELETE" 
    deleteBtn.addEventListener("click", deleteBulletin)

    const createCommentList = document.createElement("ul")

    this.comments.forEach(comment => {
        const li = document.createElement("li")
        li.innerText = this.content 
        createCommentList.appendChild(li)
    })

    createDiv.append(hTag, pTag, commentForm, createCommentList,deleteBtn)
  
  }   


   

  
} // class BUlletin   



