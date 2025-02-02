document.getElementById("saveButton").addEventListener("click", saveCard);

function saveCard() {

    const card_set = document.getElementById("card_set").value;
    const card_collNum = document.getElementById("card_collNum").value;
    const card_purchasePrice = document.getElementById("card_purchasePrice").value;
    const isFoil_radios = document.getElementsByName('card_isFoil');
    let card_isFoil;

    for (let i = 0; i < isFoil_radios.length; i++) {
        if (isFoil_radios[i].checked) {
        card_isFoil = isFoil_radios[i].value === 'true'; // convert from string to boolean
        break;
        }
    }

    const card = { // data to be sent in the request body
        cardSet: card_set,
        collectorNumber: card_collNum,
        foil: card_isFoil,
        purchasePrice: card_purchasePrice
    };

    const fetchOptions = { // configure for POST request
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // add any other headers as needed
        },
        body: JSON.stringify(card), // convert data to JSON
    };

    fetch("/cardmarket", fetchOptions) // POST request using Fetch API
        .then(response => {
            if (!response.ok) { // if not OK
                throw new Error(`HTTP error! Status: ${response.status}`);
            }  
            return response.json(); // if OK, return response as JSON aka "data"
        })
        .then(data => {
            console.log('POST request successful!', data);
            alert(`POST request successful:\n\nSet: ${card_set}\nCollector #: ${card_collNum}\nFoil: ${card_isFoil}\nPurchase Price: ${card_purchasePrice}`);
        })
        .catch(error => {
            console.error('POST request error:', error);
        });
}