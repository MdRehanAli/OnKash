const validPin = 1234;

// function to get input values Numbr
function getInputValueNumber(id) {
    const inputFieldValueNumber = parseInt(document.getElementById(id).value);
    return inputFieldValueNumber;
}

// function to get input values 
function getInputValue(id) {
    const inputFieldValue = document.getElementById(id).value;
    return inputFieldValue;
}

// function to get input values Innertext
function getInnerText(id) {
    const elementValueText = parseInt(document.getElementById(id).innerText);
    return elementValueText;
}

// function to set innerText 
function setInnerText(value) {
    const availableBalanceElement = document.getElementById("available-balance");
    availableBalanceElement.innerText = value;
}

// function to toggle 
function toggle(id) {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
        console.log(form)
    }
    document.getElementById(id).style.display = "block";
}



// Add money button Features

document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const bank = getInputValue('bank');
    const accountNumber = getInputValue('account-number');
    const amount = getInputValueNumber('amount');
    const pin = getInputValueNumber('pin');


    const availableBalance = getInnerText('available-balance');


    if (accountNumber.length != 9) {
        alert("Please provide 9 digit valid account number");
        return;
    }

    if (pin !== validPin) {
        alert("please provide valid pin number.");
        return;
    }

    const totalAvailableBalance = amount + availableBalance;

    setInnerText(totalAvailableBalance);
})


// Cash Out button Features
document.getElementById('cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = getInputValueNumber('withdraw-amount');

    const availableBalance = getInnerText('available-balance');

    const coPin = getInputValueNumber('co-pin');
    const agentNumber = getInputValue('agent-number');

    if (agentNumber.length != 9) {
        alert("Please provide 9 digit valid account number");
        return;
    }

    if (coPin !== validPin) {
        alert("please provide valid pin number.");
        return;
    }

    const withdrawAfterBalance = availableBalance - amount;

    // getInnerText('available-balance') = withdrawAfterBalance;
    setInnerText(withdrawAfterBalance);

})








// toggling features 
document.getElementById('add-money-button').addEventListener('click', function () {
    toggle("add-money-section");
})

document.getElementById('cash-out-button').addEventListener('click', function () {
    toggle('cash-out-section');
})

document.getElementById('transfer-button').addEventListener('click', function () {
    toggle('transfer-money-section');
})

document.getElementById('get-bonus-button').addEventListener('click', function () {
    toggle('get-bonus-section');
})
document.getElementById('pay-bill-button').addEventListener('click', function () {
    toggle('pay-bill-section');
})
document.getElementById('transaction-button').addEventListener('click', function () {
    toggle('transactions-section');
})

