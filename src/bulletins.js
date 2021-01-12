
class Bulletin {
  constructor(bulletin){
    this.id = bulletin.id
    this.content = bulletin.attributes.content
    this.comments = []
    
  }

  static fetchBulletin(){
    fetch(`${BACKEND_URL}/bulletins`)
    .then(response => response.json())
    .then(bulletins => {
    
        for(const bulletin of bulletins){
        //console.log("rails", bulletins)
          let b = new Bulletin(bulletin.data) 
          //console.log(b.comments)
          bulletin.data.attributes.comments.forEach(comment => {
          const c = new Comment(comment) 
          //console.log(c) 
          b.comments.push(c) 
        
        })
       //console.log(b.comments)
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
    
  } 

  renderBulletin(){ 

    // this.divTag.innerHTML += `<ul> <li>${this.content}</li></ul> ` 

   const createHtag = document.createElement("h2") 
   //createHtag.dataset.id = this.id
   const createPtag = document.createElement("p") 
   createPtag.innerText = this.content 

   createHtag.appendChild(createPtag)
   //this.divTag.appendChild(createHtag)
   this.createDiv.appendChild(createHtag)
  }  

  renderCommentForm(){ 
    const commentForm = document.createElement("form")
    commentForm.innerHTML += ` <input type="text" id="comment-input" placeholder="Comment">  <input type="submit">`
    commentForm.setAttribute("id", "comment-form") 
    commentForm.dataset.id = this.id

      //const commentUl =document.createElement("ul")
    // commentForm.append(commentUl)
     // commentUl.setAttribute("id", "comment-ul")

    commentForm.addEventListener("submit", Comment.submitComment) 

    const createUl = document.createElement('ul')
    createUl.setAttribute("id", "comment-ul") 

    this.comments.forEach(comment => {
      comment.renderComment(createUl)
    })
    this.createDiv.append(commentForm, createUl) 
    //this.divTag.append(commentForm)
  }   

  
  renderDelete(){ 
   const deleteBtn = document.createElement("button") 
    deleteBtn.innerText = "DELETE" 
    //deleteBtn.dataset.id = this.id
    deleteBtn.addEventListener("click", this.deleteBulletin) 
    this.createDiv.append(deleteBtn) 
    //this.divTag.append(deleteBtn)
  } 

 

 
 

  static submitBulletin(e){
    e.preventDefault() 
 
    //const title = document.querySelector("#title").value
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
  //debugger; 
   //console.log(e.target.previousSibling) 
  console.log(e.target.parentElement)
  console.log(e.target)
   //let deleteId = parseInt(e.target.dataset.id) 
  let deleteId = this.parentElement.dataset.id 
  //   // // console.log(deleteId)
    
    fetch(`${BACKEND_URL}/bulletins/${deleteId}`, {
         method: "DELETE" 
      })
      //console.log(this)
    this.parentElement.remove() 
    
     
  }


}//

