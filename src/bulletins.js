class Bulletin{
    constructor(id, title, content,comments){
        this.id = id 
        this.title = title 
        this.content = content 
        this.comments = comments
    }  



    // renderBulletin(){

        // const divTag = document.querySelector("#bullets-container") 
  //       divTag.innerHTML += 
  //       `
          
  //         <h2> ${this.title} </h2>
  //         <p> ${this.content} </p>
  //         <button class="delete-btn" data-id = ${this.id} onclick ="deleteUser()"> X </button><br> 


  //       `  
        
  

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
    // this.comments.forEach(comment => {
    //      let c = new Comment(comment.data.id, comment.data.attributes.bulletinId, comment.data.attributes.content ) 
    //     console.log(c)
    // }) 
        

 

    createDiv.append(hTag, pTag, commentForm, createCommentList,deleteBtn) 
    
    
    //createDiv.append(hTag, pTag)  
 
  
  }  

   
  
  

  

} // class BUlletin   



