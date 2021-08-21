const parts = ["thong-tin", "dao-duc-tot", "hoc-tap-tot", "the-luc-tot", "tinh-nguyen-tot", "hoi-nhap-tot", "uu-tien", "submit"];

function nextPart() {
    var current = localStorage.getItem("current");
    var index = parts.indexOf(current);
    if (index >= 0) {
        saveLocalStorage("current", parts[index + 1]);
        showPart(current, parts[index + 1]);
    } else {
        saveLocalStorage("current", parts[0]);
        showPart(current, parts[0]);
    }
}

function prePart() {
    var current = localStorage.getItem("current");
    var index = parts.indexOf(current);
    if (index >= 0) {
        saveLocalStorage("current", parts[index - 1]);
        showPart(current, parts[index - 1]);
    } else {
        saveLocalStorage("current", parts[0]);
        showPart(current, parts[0]);
    }
}

function showPart(current, part) {
    document.getElementById(current).hidden = true;
    document.getElementById(part).hidden = false;
    document.getElementById(part).scrollIntoView();
}

function loadData(field) {
    var data = localStorage.getItem(field);
    if (data != null)
        document.getElementById(field).value = data;
}

function checkUserInput() {
    var ckb = document.getElementById("ckb-xac-nhan");
    var btnSubmit = document.getElementById("submit");
    if (ckb.checked) {
        btnSubmit.className = "btn btn-outline-warning";
        btnSubmit.disabled = false;
    } else {
        btnSubmit.className = "btn btn-outline-warning disabled";
        btnSubmit.disabled = true;
    }
}

function saveLocalStorage(field) {
    localStorage.setItem(field, document.getElementById(field).value);
}

function saveLocalStorage(field, value) {
    localStorage.setItem(field, value);
}