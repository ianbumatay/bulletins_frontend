
// class Bulletin{ 

//     static allBulletins = []

//     constructor(bulletin){
//         this.id = bulletin.id
//         this.title = bulletin.attributes.title 
//         this.content = bulletin.attributes.content 
//         this.comments = bulletin.attributes.comments 
//         Bulletin.allBulletins.push(this) 
        
//      }  

    //  static renderBulletins(){
    //      for(let bulletin of this.allBulletins){
    //          bulletin.render()
    //      }
    //  }


  //    static fetchBulletin(){
  //       fetch(`${BACKEND_URL}/bulletins`)
  //       .then(response => response.json())
  //       .then(bulletins => {
        
  //    for(const bulletin of bulletins) { 
  //     let b = new Bulletin( bulletin.data) 
  //     } 
  //     this.renderBulletins()
  //   })
  //  }  
   
  //  render(){
  //    const divTag = document.querySelector("#bullets-container")
  //    const createDiv = document.createElement("div")
  //    //createDiv.dataset.id = this.id
  //    this.createDiv = createDiv
  //    divTag.appendChild(createDiv) 
   
  //    this.renderBulletin(createDiv)
  //    this.renderForm()
  //    this.renderDelete()
  //    this.renderComments()
  
  //  }


  // renderBulletin(createDiv){

  //   const hTag = document.createElement("h2")
  //   hTag.innerText = this.title
  //   const pTag = document.createElement("p")
  //   pTag.innerText = this.content
  //   this.createDiv.append(hTag, pTag)
    // const commentForm = document.createElement("form")
    // commentForm.innerHTML += `<input type="text"  placeholder="comment"> <input type="submit">`
    // commentForm.addEventListener("submit", Comment.submitComment)

    // const deleteBtn = document.createElement("button") 
    // deleteBtn.innerText = "DELETE" 
    // deleteBtn.addEventListener("click", this.deleteBulletin) 

    // const createCommentList = document.createElement('ul') 
    // this.comments.forEach(comment => {
    //   const li = document.createElement("li")
    //   li.innerText = comment.content
    //   createCommentList.appendChild(li)
    // })

    //createDiv.append(hTag, pTag)  
    //createDiv.append(hTag, pTag, createCommentList,deleteBtn) 
    
//} 


// renderForm(){ 
//   const commentForm = document.createElement("form")
//   commentForm.innerHTML += `<input type="text"          placeholder="comment"> <input type="submit">`
//   commentForm.addEventListener("submit", Comment.submitComment) 
//   this.createDiv.append(commentForm)
// } 

// renderDelete(){ 
//    const deleteBtn = document.createElement("button") 
//     deleteBtn.innerText = "DELETE" 
//     deleteBtn.addEventListener("click", this.deleteBulletin) 
//     this.createDiv.append(deleteBtn)
// } 


// renderComments(){ 
//     const createCommentList = document.createElement('ul') 
//     this.comments.forEach(comment => {
//       const li = document.createElement("li")
//       li.innerText = comment.content
//       createCommentList.appendChild(li)
//     })
//     this.createDiv.append(createCommentList)
// }

  // static submitBulletin(e){
  //   e.preventDefault() 
 
  //   const title = document.querySelector("#title").value
  //   const content = document.querySelector("#content").value 
 
  //   const options = {
  //     method: "POST",
  //     headers: {
  //      'Accept': 'application/json',
  //      'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({bulletin: {title: title, content: content}})
  //   }
 
  //  fetch(`${BACKEND_URL}/bulletins`, options)
  //    .then(response => response.json())
  //    .then(bulletin => { 
       
  //          let b = new Bulletin(bulletin.data)
  //          b.renderBulletin()
  //   }) 
  // }  


//   deleteBulletin(e){
//   let bulletinId = this.parentElement.dataset.id
//   fetch(`${BACKEND_URL}/bulletins/${bulletinId}`, {
//       method: "DELETE" 
//     })
//      this.parentElement.remove()
//   } 
  
// } //  code end 


class Bulletin {
  constructor(bulletin){
    this.id = bulletin.id
    this.content = bulletin.attributes.content
    this.comments = bulletin.attributes.comments
  }

  static fetchBulletin(){
    fetch(`${BACKEND_URL}/bulletins`)
    .then(response => response.json())
    .then(bulletins => {
    
      for(const bulletin of bulletins){
        //console.log("rails", bulletins)
        let b = new Bulletin(bulletin.data) 
        //console.log("js", b)
        b.render();
      }
    })
  }   


  render(){ 
    const divTag = document.querySelector("#bullets-container") 
    //this.divTag = divTag
    const createDiv = document.createElement("div")
    createDiv.dataset.id = this.id 
    createDiv.setAttribute("id", "create-div")
    this.createDiv = createDiv
    divTag.appendChild(createDiv) 

    this.renderBulletin()
    //this.renderDelete()
    this.renderCommentForm() 
    this.createComments()
    this.renderDelete()
    
  } 

  renderBulletin(){ 

    // this.divTag.innerHTML += `<ul> <li>${this.content}</li></ul> ` 

   const createHtag = document.createElement("h2") 
   //createHtag.dataset.id = this.id
   const createPtag = document.createElement("p") 
   createPtag.innerText = this.content 

   createHtag.appendChild(createPtag)
   this.createDiv.appendChild(createHtag)
  }  

  
  renderDelete(){ 
   const deleteBtn = document.createElement("button") 
    deleteBtn.innerText = "DELETE" 
    //deleteBtn.dataset.id = this.id
    deleteBtn.addEventListener("click", this.deleteBulletin) 
    this.createDiv.append(deleteBtn)
  } 

  renderCommentForm(){ 
    const commentForm = document.createElement("form")
    commentForm.innerHTML += ` <input type="text" placeholder="Comment">  <input type="submit"> `
    commentForm.setAttribute("id", "comment-form") 

    // const commentUl =document.createElement("ul")
    // commentForm.append(commentUl)
    // commentUl.setAttribute("id", "comment-ul")

    commentForm.addEventListener("submit", Comment.submitComment) 
    this.createDiv.append(commentForm)
  }   

  createComments(){ 
    const createCommentList = document.createElement('ul')
    createCommentList.setAttribute("id", "comment-ul") 

    // this.comments.forEach(comment => { 
    //   console>log(comment)
    //   const c = new Comment(comment) 
    //   console.log(c)
    //   c.renderComment(commentList, createLi)
    // })
    
    this.createDiv.append(createCommentList)
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

