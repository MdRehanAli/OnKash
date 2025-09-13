// Login button functionality

document.getElementById('login').addEventListener('click', function (event) {
    event.preventDefault();
    const mobileNumber = 123456789;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile-number').value;
    const pinNumberValue = document.getElementById('pin-number').value;

    const mobileNumberValueInt = parseInt(mobileNumberValue);
    const pinNumberValueInt = parseInt(pinNumberValue);

    if (mobileNumber === mobileNumberValueInt && pinNumber === pinNumberValueInt) {
        window.location.href = "./home.html"
    }
    else {
        alert("Invalid! For Mobile use: 123456789 & for pin use: 1234");
    }
})