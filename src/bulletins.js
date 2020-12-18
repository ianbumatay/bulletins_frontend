
class Bulletin{ 

    static allBulletins = []

    constructor(bulletin){
        this.id = bulletin.id
        this.title = bulletin.attributes.title 
        this.content = bulletin.attributes.content 
        this.comments = bulletin.attributes.comments 
        Bulletin.allBulletins.push(this) 
        //console.log(bulletin)
     }  

     static renderBulletins(){
         for(let bulletin of this.allBulletins){
             bulletin.renderBulletin()
         }
     }


     static fetchBulletin(){
        fetch(`${BACKEND_URL}/bulletins`)
        .then(response => response.json())
        .then(bulletins => {
        
     for(const bulletin of bulletins) { 
      let b = new Bulletin( bulletin.data) 
      } 
      this.renderBulletins()
    })
   }   


  renderBulletin(){

     const divTag = document.querySelector("#bullets-container")
     const createDiv = document.createElement("div")
     createDiv.dataset.id = this.id
  
    divTag.appendChild(createDiv) 
  
    const hTag = document.createElement("h2")
    hTag.innerText = this.title
    const pTag = document.createElement("p")
    pTag.innerText = this.content


 
    const commentForm = document.createElement("form")
    commentForm.innerHTML += `<input type="text"  placeholder="comment"> <input type="submit">`
    commentForm.addEventListener("submit", Comment.submitComment)


    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "DELETE" 
    deleteBtn.addEventListener("click", this.deleteBulletin)

    // const commentList = document.createElement("ul")
    // this.comments.forEach(comment => {
    //     let c = new Comment(comment)
    //     c.renderComment(commentList)
        
    // })

    // const commentList = document.createElement('ul')
    // this.comments.forEach(comment => {
    //     let commentObj = new Comment(comment)
    //     console.log(commentObj)
    //     commentObj.renderComment(commentList)
    // }) 

    const createCommentList = document.createElement('ul') 
    this.comments.forEach(comment => {
      const li = document.createElement("li")
      // commentObj = new Comment(comment)
      
      li.innerText = comment.content
      createCommentList.appendChild(li)

     })

    createDiv.append(hTag, pTag, commentForm, createCommentList,deleteBtn)

  
}


   static submitBulletin(e){
    e.preventDefault() 
 
    const title = document.querySelector("#title").value
    const content = document.querySelector("#content").value 
    //console.log(title, content)  
 
    const options = {
      method: "POST",
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify({bulletin: {title: title, content: content}})
    }
 
   fetch(`${BACKEND_URL}/bulletins`, options)
     .then(response => response.json())
     .then(bulletin => { 
       
           let b = new Bulletin(bulletin.data)
           b.renderBulletin()
     }) 
   }  


    deleteBulletin(e){
    //console.log(e.target.parentElement) 
    let bulletinId = this.parentElement.dataset.id
    fetch(`${BACKEND_URL}/bulletins/${bulletinId}`, {
        method: "DELETE" 
      
    })
     this.parentElement.remove()
  } 
 


   

  
} // class BUlletin   



