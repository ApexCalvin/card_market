document.getElementById("getButton").addEventListener("click", getCards);

async function getCards() {

    const display = document.getElementById('display');
    
    const cards = await fetchFromLocalDb();   
    if (!cards.length) {
        display.innerHTML = "<p>No card data from local db available.</p>";
        return; // stops executing the rest of the code
    }

    // Use Promise.all to handle the asynchronous operations in map
    const collectionToDisplay = await Promise.all(cards.map(async (card) => {
            
        const dataFromScryfall = await fetchFromScryfall(card.cardSet, card.collectorNumber);
        if (!dataFromScryfall) { //colspan = stretchs 5 columns in the table
            return `
                <tr>
                    <td colspan="5">
                        Error fetching card data: ${card.cardSet} ${card.collectorNumber}
                    </td>
                    <td>
                        <button class="greyButtons" onClick="deleteCard(${card.id})">X</button>
                    </td>
                </tr>
            `;
        }

        let priceBasedOnFoil = card.foil == true ? 
            (dataFromScryfall.prices.usd_foil || 0) : 
            (dataFromScryfall.prices.usd || 0);
        let calculatedGain_percent = ((100 * (priceBasedOnFoil / card.purchasePrice)) - 100).toFixed(2);
        calculatedGain_percent = isFinite(calculatedGain_percent) ? calculatedGain_percent : "0.00";
        let calculatedGain_amount = (priceBasedOnFoil - card.purchasePrice).toFixed(2);
        const gainClass = calculatedGain_amount >= 0 ? 'gain-positive' : 'gain-negative';
        const imageLink = String(dataFromScryfall.image_uris.normal);

        return `
            <tr>
                <td><img src=${imageLink} alt="Card Image" onClick="displayCardImage()"></td>
                <td>${dataFromScryfall.name}</td>
                <td>$${card.purchasePrice}</td>
                <td>$${priceBasedOnFoil || 'N/A'}</td>
                <td class="${gainClass}">$${calculatedGain_amount} (${calculatedGain_percent}%)</td>
                <td><button class="greyButtons" onClick="deleteCard(${card.id})">X</button></td>
            </tr>
        `;
    }));

    display.innerHTML = collectionToDisplay.join('');
}

async function fetchFromLocalDb() {
    try { 
        const response = await fetch("/cardmarket"); // defaulted GET request
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        } 
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching card data from local db:", error);
        return []; // doesn't break mapper
    }
}

async function fetchFromScryfall(set, collNum) {
    const scryfall_apiUrl = `https://api.scryfall.com/cards/${set}/${collNum}`;
    console.log(scryfall_apiUrl);

    try {
        const response = await fetch(scryfall_apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching card data from Scryfall:", error);
        return null; // doesn't break mapper
    }
}