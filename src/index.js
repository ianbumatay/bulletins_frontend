console.log("connecting...") 

// test that we can get data from the backend
const BACKEND_URL = "http://localhost:3000"; 

fetch(`${BACKEND_URL}/bulletins`)
  .then(response => response.json())
  .then(parsedBulletins => {

    for(const bulletin of parsedBulletins) { 
        console.log("rails obj", bulletin) 
        let b = new Bulletin(bulletin.id, bulletin.title, bulletin.content)
        console.log("js obj", b)
    }
  })