const generateNumber = () => {
    return Math.floor(Math.random() * 100)
}

const randomNumber = generateNumber();

const verifyGuess = () => {
    const inputedNumber = document.querySelector('#num-input').value

    let result = '';
    let isRight = false;

    if (inputedNumber > randomNumber) {
        result = 'Número maior'
    } else if (inputedNumber < randomNumber) {
        result = 'Número menor'
        isRight = true
    } else {
        result = 'Número igual'
    }

    showResult(result, isRight)
}

const showResult = (result, isRight) => {
    const span = document.querySelector("#resultado")

    span.innerHTML = result;
    if (isRight) {
        span.style.setProperty("background-color", "green")
    } else {
        span.style.setProperty("background-color", "red")
    }
}