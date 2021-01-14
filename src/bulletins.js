
class Bulletin {
  constructor(bulletin){
    this.id = bulletin.id
    this.content = bulletin.attributes.content
    //this.comments = []

    this.comments = bulletin.attributes.comments
  }

  static fetchBulletin(){
    fetch(`${BACKEND_URL}/bulletins`)
    .then(response => response.json())
    .then(bulletins => {
    
        for(const bulletin of bulletins){
        
         // let b = new Bulletin(bulletin.data) 
         
          // bulletin.data.attributes.comments.forEach(comment => {
          // const c = new Comment(comment) 
          // b.comments.push(c) 
        
        //}) 
        let b = new Bulletin(bulletin.data) 
        b.render();
      }
    })
  }   


  render(){ 
    
    const bulletsFormDiv = document.querySelector("#bullets-form-div") 
    const createDiv = document.createElement("div") 

    createDiv.dataset.id = this.id 
    createDiv.setAttribute("id", "create-div")
    this.createDiv = createDiv

    bulletsFormDiv.appendChild(createDiv) 

    this.renderBulletin()
    this.renderCommentForm() 
    this.renderDelete()  
    //sthis.manyFunction()
  } 

  renderBulletin(){ 


   const createHtag = document.createElement("h2") 
   const createPtag = document.createElement("p") 
   createPtag.innerText = this.content 

   createHtag.appendChild(createPtag)
   this.createDiv.appendChild(createHtag)
  }  

  renderCommentForm(){ 
    const commentForm = document.createElement("form")
    commentForm.innerHTML += ` <input type="text" id="comment-input" placeholder="Comment">  <input type="submit">`
    commentForm.setAttribute("id", "comment-form") 
    commentForm.addEventListener("submit", Comment.submitComment) 

    const createUl = document.createElement('ul')
    createUl.setAttribute("id", "comment-ul") 

    this.comments.forEach(comment => { 
      let newComment = new Comment(comment)
      newComment.renderComment(createUl)
    })
    this.createDiv.append(commentForm, createUl) 
  }   

  
  renderDelete(){ 
    const deleteBtn = document.createElement("button") 
    deleteBtn.innerText = "DELETE" 
    deleteBtn.addEventListener("click", this.deleteBulletin) 
    this.createDiv.append(deleteBtn) 
  } 
 

  static submitBulletin(e){
    e.preventDefault() 
 
    const content = document.querySelector("#content").value 
 
    const options = {
      method: "POST",
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({bulletin: {content: content}})
    }
 
   fetch(`${BACKEND_URL}/bulletins`, options)
     .then(response => response.json())
     .then(bulletin => { 
       
           let b = new Bulletin(bulletin.data)
           b.render()
    }) 
  }  

  deleteBulletin(e){ 

  let deleteId = this.parentElement.dataset.id 
 
    fetch(`${BACKEND_URL}/bulletins/${deleteId}`, {
         method: "DELETE" 
      })
    this.parentElement.remove()   
  } 







}

