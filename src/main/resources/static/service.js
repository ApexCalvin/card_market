function saveCard() {
    console.log('in saveCard()');

    const cardSet = document.getElementById("card_set").value.toLowerCase();
    const num = document.getElementById("card_collector_number").value;
    const pp = document.getElementById("card_purchase_price").value;

    // Data to be sent in the request body
    const cardData = {
        cardSet: cardSet,
        collectorNumber: num,
        purchasePrice: pp
    };

    // Define the fetch options for the POST request
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers as needed
        },
        body: JSON.stringify(cardData), // Convert the data to a JSON string
    };

    // Make the POST request using the Fetch API
    fetch("/cardmarket", fetchOptions)
        .then(response => {
            // Check if the request was successful (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the response JSON
            return response.json();
        })
        .then(data => {
            // Handle the data from the response
            console.log('POST request successful:', data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('POST request error:', error);
        });
}