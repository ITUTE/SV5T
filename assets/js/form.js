function saveLocalStorage(field) {
    localStorage.setItem(field, document.getElementById(field).value);
}

function showPart(current, part) {
    document.getElementById(current).hidden = true;
    document.getElementById(part).hidden = false;
    document.getElementById(part).scrollIntoView();
}