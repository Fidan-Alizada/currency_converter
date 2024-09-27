document.getElementById('converter-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const amount = document.getElementById('amount').value;
  const baseCurrency = document.getElementById('base-currency').value;
  const targetCurrency = document.getElementById('target-currency').value;

  if (amount === '' || isNaN(amount)) {
    alert('Please enter a valid amount');
    return;
  }

  // Курсы валют
  const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, AZN: 1.70, TRY: 27.00, RUB: 96.00 },
    EUR: { USD: 1.18, GBP: 0.88, AZN: 2.00, TRY: 31.75, RUB: 113.00 },
    GBP: { USD: 1.33, EUR: 1.14, AZN: 2.28, TRY: 36.00, RUB: 128.00 },
    AZN: { USD: 0.59, EUR: 0.50, GBP: 0.44, TRY: 15.78, RUB: 56.00 },
    TRY: { USD: 0.037, EUR: 0.032, GBP: 0.028, AZN: 0.063, RUB: 3.55 },
    RUB: { USD: 0.010, EUR: 0.0088, GBP: 0.0078, AZN: 0.018, TRY: 0.28 }
  };

  if (baseCurrency === targetCurrency) {
    document.getElementById('result').textContent = `${amount} ${baseCurrency} = ${amount} ${targetCurrency}`;
    return;
  }

  const rate = exchangeRates[baseCurrency][targetCurrency];
  const convertedAmount = (amount * rate).toFixed(2);

  document.getElementById('result').textContent = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`;
});
