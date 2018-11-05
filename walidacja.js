let send = document.querySelector(".send");
send.addEventListener("click", checkForm);
function addClass(element, className) {
    element.classList.add(className);
}
function removeClass(element, className) {
    element.classList.remove(className);
}
function checkForm() {
    let number = document.querySelector("#number");
    let text = document.querySelector("#text");
    let numberValue = number.value;
    let textValue = text.value;
    if (numberValue === '' || !parseInt(numberValue) || isNaN(numberValue) || numberValue < 1 || numberValue > 100) {
        addClass(number, 'is-invalid');
    } else {
        removeClass(number, 'is-invalid');
    }