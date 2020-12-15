class Bulletin{
    constructor(id, title, content){
        this.id = id 
        this.title = title 
        this.content = content
    } 
    // renderBulletin(){

        // const divTag = document.querySelector("#bullets-container") 
  //       divTag.innerHTML += 
  //       `
          
  //         <h2> ${this.title} </h2>
  //         <p> ${this.content} </p>
  //         <button class="delete-btn" data-id = ${this.id} onclick ="deleteUser()"> X </button><br> 


  //       `  
        
  //       const contentContainer = document.createElement("div")
  //       const hTag = document.createElement("h2")
  //       hTag.innerText = this.title

  //       const pTag = document.createElement("p")
  //       pTag.innerText = this.content 
 
  //       divTag.appendChild(contentContainer)

        
  //        const commentForm = document.createElement("form") 
  //        commentForm.innerHTML += `<input =type="text" id="comment" placeholder="comment"> <input type="submit">` 
   

  //        contentContainer.append(hTag, pTag, commentForm)
  //  } 

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
    commentForm.addEventListener("submit", submitCommentForm)

    const createCommentList = document.createElement("ul")

    createDiv.append(hTag, pTag, commentForm, createCommentList) 
  
  } 

  

} // class BUlletin  



// const commentList = document.createElement('ul')
// this.comments.forEach(comment => {
//     let commentObj = new Comment(comment)
//     console.log(commentObj)
//     commentObj.renderComment(commentList)