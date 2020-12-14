class Bulletin{
    constructor(id, title, content){
        this.id = id 
        this.title = title 
        this.content = content
    } 
    renderBulletin(){

        const divTag = document.querySelector("#bullets-container") 
  //       divTag.innerHTML += 
  //       `
          
  //         <h2> ${this.title} </h2>
  //         <p> ${this.content} </p>
  //         <button class="delete-btn" data-id = ${this.id} onclick ="deleteUser()"> X </button><br> 


  //       `  
        
        const contentContainer = document.createElement("div")
        const hTag = document.createElement("h2")
        hTag.innerText = this.title

        const pTag = document.createElement("p")
        pTag.innerText = this.content 

        
        divTag.appendChild(contentContainer)

        
         const commentForm = document.createElement("form") 
         commentForm.innerHTML += `<input =type="text" id="comment" placeholder="comment"> <input type="submit">`

         contentContainer.append(hTag, pTag, commentForm)
   } 

  

} // class BUlletin end