// Add money button functionality

document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('amount').value);
    const pin = document.getElementById('pin').value;

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const totalAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText = totalAvailableBalance;
})