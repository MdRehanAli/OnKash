// Add money button Features

document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('amount').value);
    const pin = parseInt(document.getElementById('pin').value);
    const validPin = 1234;

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);


    if (accountNumber.length != 9) {
        alert("Please provide 9 digit valid account number");
        return;
    }

    if (pin !== validPin) {
        alert("please provide valid pin number.");
        return;
    }

    const totalAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText = totalAvailableBalance;
})


// Cash Out button Features
document.getElementById('cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = parseInt(document.getElementById('withdraw-amount').value);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    const coPin = parseInt(document.getElementById('co-pin').value);
    const agentNumber = document.getElementById('agent-number').value;
    const validPin = 1234;

    if (agentNumber.length != 9) {
        alert("Please provide 9 digit valid account number");
        return;
    }

    if (coPin !== validPin) {
        alert("please provide valid pin number.");
        return;
    }

    const withdrawAfterBalance = availableBalance - amount;

    document.getElementById('available-balance').innerText = withdrawAfterBalance;

})








// toggling features 
document.getElementById('add-money-button').addEventListener('click', function () {
    document.getElementById('cash-out-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'block';
})

document.getElementById('cash-out-button').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'block';
})


