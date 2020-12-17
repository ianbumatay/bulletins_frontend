// class Bulletin{
//     constructor(id, title, content){
//         this.id = id 
//         this.title = title 
//         this.content = content
//     } 
    // renderBulletin(){

        // const divTag = document.querySelector("#bullets-container") 
  //       divTag.innerHTML += 
  //       `
          
  //         <h2> ${this.title} </h2>
  //         <p> ${this.content} </p>
  //         <button class="delete-btn" data-id = ${this.id} onclick ="deleteUser()"> X </button><br> 


  //       `  
        
  

//   renderBulletins(){

//      const divTag = document.querySelector("#bullets-container")
//      const createDiv = document.createElement("div")
//      createDiv.dataset.id = this.id
  
//     divTag.appendChild(createDiv) // Dynamic <div>
  
//     const hTag = document.createElement("h2")
//     hTag.innerText = this.title//bulletin.data.attributes.title
//     const pTag = document.createElement("p")
//     pTag.innerText = this.content//bulletin.data.attributes.content 


 
//     const commentForm = document.createElement("form")
//     commentForm.innerHTML += `<input type="text"  placeholder="comment"> <input type="submit">`
//     commentForm.addEventListener("submit", Comment.submitCommentForm) 


//     const createCommentList = document.createElement("ul") 
//     //createCommentList.dataset.name = "commment-ul"
    
//     // this.comments.forEach(comment => { 
//     //     const li = document.createElement("li")
//     //     li.innerText = this.content
//     //     createCommentList.appendChild(li)
//     // }) 

//     // createDiv.innerHTML += 
//     // `
//     // <form>
//     // <input type="text"  placeholder="comment"> 
//     // <input type="submit">
//     // </form>
    
//     // `
    

//     createDiv.append(hTag, pTag, commentForm, createCommentList )   
//     //createDiv.append(hTag, pTag)  
    
    
  
  //} 

  

//} // class BUlletin   

 
  
  



