const serv_URL = 'http://localhost:3000/species';

async function getAllSpecies() {
    return fetch(serv_URL)
        .then((res)=>res.json())
        .then((dt)=> dt)
        .catch((e)=> e);
}

function updateSpecies(species) {
  
    return fetch(serv_URL, {
        method: 'PUT',
        headers : {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(species),
    }).then((res)=>res.json())
    .then((dt)=>dt)
    .catch((e)=> console.log(e));
    
}

export const mammalsService =  {
    getAllSpecies,
    updateSpecies
}