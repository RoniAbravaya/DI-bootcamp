const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');
const switchBtn = document.getElementById('switchBtn');

const apiKey = '7afd64c3a04bae6601442931';
const apiUrl = 'https://v6.exchangerate-api.com/v6/';

// Fetch supported currencies
fetch(`${apiUrl}${apiKey}/codes`)
    .then(response => response.json())
    .then(data => {
        populateCurrencyOptions(data.supported_codes);
    })
    .catch(error => console.error('Error fetching supported currencies:', error));

function populateCurrencyOptions(currencies) {
    currencies.forEach(currencyCode => {
        const option = document.createElement('option');
        option.value = currencyCode;
        option.textContent = currencyCode;
        fromCurrencySelect.appendChild(option.cloneNode(true));
        toCurrencySelect.appendChild(option.cloneNode(true));
    });
}

// Event listener for the convert button
convertBtn.addEventListener('click', () => {
    const fromCurrencyCode = fromCurrencySelect.value;
    const toCurrencyCode = toCurrencySelect.value;
    const amount = amountInput.value;

    if (!fromCurrencyCode || !toCurrencyCode || !amount || isNaN(amount)) {
        alert('Please enter valid values.');
        return;
    }

    fetchConversionRate(fromCurrencyCode, toCurrencyCode, amount);
});

// Event listener for the switch button
switchBtn.addEventListener('click', () => {
    const tempCurrency = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = tempCurrency;
});

// Function to fetch conversion rate and display result
function fetchConversionRate(from, to, amount) {
    // Extract currency codes from the format "CurrencyCode, CurrencyName"
    const fromCurrencyCode = from.split(',')[0].trim();
    const toCurrencyCode = to.split(',')[0].trim();

    fetch(`${apiUrl}${apiKey}/pair/${fromCurrencyCode}/${toCurrencyCode}/${amount}`)
        .then(response => {
            console.log(response);  // Place it here if you want to log the response
            return response.json();
        })
        .then(data => {
            if (data.result === 'success') {
                const conversionResult = data.conversion_result || data.conversion_rate;
                resultDiv.textContent = `${amount} ${fromCurrencyCode} equals ${conversionResult} ${toCurrencyCode}`;
            } else {
                resultDiv.textContent = 'Error fetching conversion rate.';
            }
        })
        .catch(error => console.error('Error fetching conversion rate:', error));
}
