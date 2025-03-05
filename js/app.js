const elementNumberKm = document.getElementById('numberKm');
const elementAge = document.getElementById('age');
const elementForm = document.getElementById('form');


elementForm.addEventListener('submit', function(event){
    event.preventDefault();

    const ticketPrice = calcTicket(elementNumberKm.value, elementAge.value);
    const ticketPriceElement = document.createAttribute('div'); 
    ticketPriceElement.innerHtml = ticketPrice;
    const divElement = document.querySelector("result");
    divElement.append(ticketPriceElement);

});


function calcTicket (userKm, userAge) {
     // Calcolo prezzo biglietto
    let costTicket = parseInt(0);
    let discount = parseInt(0);

    if (userAge >= 18 && userAge<= 64) {
        costTicket = userKm * 0.21;
    } else if (userAge <= 17) {
        costTicket = (userKm * 0.21);
        discount = (costTicket * 20) /100;
        costTicket = costTicket - discount;
    } else if (userAge >= 65) {
        costTicket = userKm * 0.21;
        discount = (costTicket * 40) /100;
        costTicket = costTicket - discount;
    }

    costTicket = costTicket.toFixed(2);

    return costTicket;

    
}

