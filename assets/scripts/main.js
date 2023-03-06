let tarjetas = ''
const mainHome = document.getElementById('cards')

for (let event of events) {
  tarjetas += `<div class="card" style="width: 18rem;">
    <img src=${event.image} alt="Imagen de evento">
    <div class="card-body">
     <h5 class="card-title">${event.name}</h5>     <p class="card-text">${event.description}</p>
       <a href="mailto:${event.price}" class="btn btn-primary">Mandame un email</a>
           </div>
  </div>`
}

console.log(tarjetas);

mainHome.innerHTML = tarjetas

const cardsIndividual = document.getElementsByTagNameNS('div')