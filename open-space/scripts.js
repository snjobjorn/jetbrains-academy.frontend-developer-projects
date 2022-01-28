let enable = () => {
    console.log(document.querySelector("#password-input").value);
    let inputValue = document.querySelector("#password-input").value;
    if (inputValue === "TrustNo1") {
        document.querySelectorAll('input').forEach(function(el) {
            el.removeAttribute('disabled');
        })
        document.querySelector('#password-input').disabled = true;
        document.querySelector('#password-button').disabled = true;
        document.querySelector('#launch-button').disabled = true;
    }
}

let cond = 0;

let check = () => {
    cond = 0;
    document.querySelectorAll('input[type="checkbox"]').forEach(function(el) {
        if (el.checked === true) {
            cond = cond + 1;
        }
    });
    document.querySelectorAll('input[type="range"]').forEach(function(el) {
        if (el.value == '100') {
            cond = cond + 1;
            // console.log(el.value);
        }
    });
    console.log(cond);
    if (cond >= 11) {
        document.querySelector('#launch-button').disabled = false;
    }
}

let launch = () => {
    if (cond >= 11) {
        let rocket = document.querySelector(".rocket");
        let x = Number(getComputedStyle(rocket).left.substr(0, getComputedStyle(rocket).left.length - 2));
        rocket.style.left = 100 + x + "px";
        rocket.style.top = -100 + x + "px";
    }
}