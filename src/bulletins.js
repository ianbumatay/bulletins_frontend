class Bulletin{
    constructor(id, title, content){
        this.id = id 
        this.title = title 
        this.content = content
    } 
    renderBulletin(){
        const divTag = document.querySelector("#bullets-container") 
        divTag.innerHTML += 
        `
      
          <h2> ${this.title} </h2>
          <p> ${this.content} </p>
          <button class="delete-btn" data-id = ${this.id} onclick ="deleteUser()"> X </button>
        `  
   } 

  //   renderForm(bulletin){
  //   //console.log(bulletin)
  //   const div = document.querySelector("#bullets-container")
  //   const htag = document.createElement("h2") 
  //   const ptag = document.createElement("p") 
  //   htag.innerText = bulletin.attributes.title
  //   ptag.innerText = bulletin.attributes.content
  //   div.appendChild(htag) 
  //   div.appendChild(ptag)
  // }


}