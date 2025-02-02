function deleteCard(cardId) {
    console.log("Deleting...", cardId);

    const fetchOptions = { // configure for DELETE request
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // add any other headers as needed
        },
    };

    fetch(`/cardmarket/${cardId}`, fetchOptions) // POST request using Fetch API
    .then(response => {
        if (!response.ok) { // if not OK
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log('Delete request successful!');
        alert('Delete request successful.');
    })    
    .catch(error => {
        console.error('Delete request error:', error);
    });
}

function displayCardImage() {
    console.log("In displayCardImage method...")
}