class Bulletin{
    constructor(id, title, content){
        this.id = id 
        this.title = title 
        this.content = content
    } 
    renderBulletin(){
        const divTag = document.querySelector("#li-container") 
        divTag.innerHTML += 
        `
      
          <h2> ${this.title} </h2>
          <p> ${this.content} </p>

        `
    }
}