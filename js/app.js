const elementNumberKm = document.getElementById('numberKm');
const elementAge = document.getElementById('age');
const elementForm = document.getElementById('form');
const elementResult = document.getElementById('result');

elementForm.addEventListener('submit', function (event) {
    event.preventDefault();

    elementResult.innerHTML = "";
    // Ottieni i valori inseriti
    const userKm = parseInt(elementNumberKm.value);
    const userAge = parseInt(elementAge.value);

    // Calcola il costo del biglietto
    const ticketCost = calcTicket(userKm, userAge);

    // Crea un nuovo elemento li
    const newListItem = document.createElement('li');
    newListItem.innerText = `Il costo del biglietto è:${ticketCost} €`;

    // Aggiungi il nuovo elemento li alla lista ul
    elementResult.appendChild(newListItem);

});


function calcTicket(userKm, userAge) {
    // Calcolo prezzo biglietto
    let costTicket = parseInt(0);
    let discount = parseInt(0);

    if (userAge >= 18 && userAge <= 64) {
        costTicket = userKm * 0.21;
    } else if (userAge <= 17) {
        costTicket = (userKm * 0.21);
        discount = (costTicket * 20) / 100;
        costTicket = costTicket - discount;
    } else if (userAge >= 65) {
        costTicket = userKm * 0.21;
        discount = (costTicket * 40) / 100;
        costTicket = costTicket - discount;
    }

    costTicket = costTicket.toFixed(2);

    return costTicket;


}

