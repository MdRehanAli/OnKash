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

function handleButtonStyle(id) {
    const formButtons = document.getElementsByClassName('form-button');
    for (const formButton of formButtons) {
        formButton.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        formButton.classList.add("border-gray-300");
    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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
    handleButtonStyle("add-money-button");
})

document.getElementById('cash-out-button').addEventListener('click', function () {
    toggle('cash-out-section');
    handleButtonStyle("cash-out-button");
})

document.getElementById('transfer-button').addEventListener('click', function () {
    toggle('transfer-money-section');
    handleButtonStyle("transfer-button");
})

document.getElementById('get-bonus-button').addEventListener('click', function () {
    toggle('get-bonus-section');
    handleButtonStyle("get-bonus-button");
})

document.getElementById('pay-bill-button').addEventListener('click', function () {
    toggle('pay-bill-section');
    handleButtonStyle("pay-bill-button");
})

document.getElementById('transaction-button').addEventListener('click', function () {
    toggle('transactions-section');
    handleButtonStyle("transaction-button");
})

