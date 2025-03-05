const elementNumberKm = document.getElementById('numberKm');
const elementAge = document.getElementById('age');
const elementSubmit = document.getElementById('sendForm');
const elementResult = document.getElementById('result');

console.log(elementNumberKm);
console.log(elementAge);
console.log(elementSubmit);

elementSubmit.addEventListener('submit', function(event){
    event.preventDefault();

    // Calcolo prezzo biglietto
    let costTicket = parseInt(0);
    let discount = parseInt(0);

    const age = elementAge.value;
    const km = elementNumberKm.value;

    if (age >= 18 && age<= 64) {
        costTicket = km * 0.21;
    } else if (age <= 17) {
        costTicket = (km * 0.21);
        discount = (costTicket * 20) /100;
        costTicket = costTicket - discount;
    } else if (age >= 65) {
        costTicket = km * 0.21;
        discount = (costTicket * 40) /100;
        costTicket = costTicket - discount;
    }

    console.log(parseFloat(costTicket.toFixed(2)));

    //Stampa a schermo il risultato
    elementResult.classList.remove('hidden');


});

