let send = document.querySelector(".send");
send.addEventListener("click", checkForm);
function addClass(element, className) {
    element.classList.add(className);
}
function removeClass(element, className) {
    element.classList.remove(className);
}
function checkForm() {
    let wiek = document.querySelector("#Number");
    let imie = document.querySelector("#InputName");
    let nazwisko = document.querySelector("#InputSurname");
    let email = document.querySelector("#InputEmail");
    let checkRadio = document.querySelector(".form-check-input");
    let wiekvalue = wiek.value;
    let imievalue = imie.value;
    let nazwiskovalue = nazwisko.value;
    let emailValue = email.value;
    var atpos = emailValue.indexOf("@");
    var dotpos = emailValue.lastIndexOf(".");
    if (wiekvalue === '' || !parseInt(wiekvalue) || isNaN(wiekvalue) || wiekvalue < 1 || wiekvalue > 100) {
        addClass(wiek, 'is-invalid');
        removeClass(wiek, 'is-valid');
    } else {
        removeClass(wiek, 'is-invalid');
        addClass(wiek, 'is-valid');
    }
    if(imievalue === '' || parseInt(imievalue)) {
        addClass(imie, 'is-invalid');
        removeClass(imie, 'is-valid');
    } else {
        removeClass(imie, 'is-invalid');
        addClass(imie, 'is-valid');
    }
    if(nazwiskovalue === '' || parseInt(nazwiskovalue)) {
        addClass(nazwisko, 'is-invalid');
        removeClass(nazwisko, 'is-valid');
    } else {
        removeClass(nazwisko, 'is-invalid');
        addClass(nazwisko, 'is-valid');
    }
    if(atpos<1 || dotpos<atpos+2 || dotpos+2>=emailValue.length) {
        addClass(email, 'is-invalid');
        removeClass(email, 'is-valid');
    } else {
        removeClass(email, 'is-invalid');
        addClass(email, 'is-valid');
    }
    if(checkRadio.checked)
    {
        removeClass(checkRadio, 'is-invalid');
        addClass(checkRadio, 'is-valid');
    }
    else
    {
        addClass(checkRadio, 'is-invalid');
        removeClass(checkRadio, 'is-valid');
    }
}