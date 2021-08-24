const parts = ["thong-tin", "dao-duc-tot", "hoc-tap-tot", "the-luc-tot", "tinh-nguyen-tot", "hoi-nhap-tot", "uu-tien"];

var submitted = false;

function nextPart() {
    var current = localStorage.getItem("current");
    var next = parseInt(current) + 1;
    console.log(next);
    if (current <= 0) {
        var back = document.getElementById("back");
        back.className = "btn btn-outline-secondary";
        back.disabled = false;
    }
    if (next > parts.length) {
        checkUserInput();
    } else if (next == parts.length) {
        //document.getElementById("xac-nhan").hidden = false;
        hideAllParts(false);
        var btnSubmit = document.getElementById("next");
        btnSubmit.type = "submit";
        btnSubmit.innerHTML = "Gửi";
        btnSubmit.className = "btn btn-outline-warning disabled";
        btnSubmit.disabled = true;
    } else {
        showPart(parts[current], parts[next]);
    }
    saveValueToLocalStorage("current", next);
    var progress = document.getElementById("progress");
    var percent = (next + 1) * 100 / 8 + "%";
    progress.ariaValueNow = percent;
    progress.style.width = percent;
    progress.innerText = percent;
}

function prePart() {
    var current = localStorage.getItem("current");
    var pre = parseInt(current) - 1;
    var progress = document.getElementById("progress");
    var percent = (pre + 1) * 100 / 8 + "%";
    progress.ariaValueNow = percent;
    progress.style.width = percent;
    progress.innerText = percent;

    saveValueToLocalStorage("current", pre);
    if (pre <= 0) {
        var btn = document.getElementById("back");
        btn.disabled = true;
        btn.className = "btn btn-outline-secondary disabled";
        showPart(parts[current], parts[pre]);
    } else if (pre == parts.length - 1) {
        document.getElementById("alert").hidden = true;
        hideAllParts(true);
        document.getElementById(parts[pre]).hidden = false;
    }
    else
        showPart(parts[current], parts[pre]);
}

function showPart(current, part) {
    document.getElementById(current).hidden = true;
    document.getElementById(part).hidden = false;
    document.getElementById("top").scrollIntoView();
}

function loadData(field) {
    var data = localStorage.getItem(field);
    if (data != null)
        document.getElementById(field).value = data;
}

function hideAllParts(value) {
    document.getElementById("alert").hidden = value;
    document.getElementById("xac-nhan").hidden = value;
    var i;
    for (i = 0; i < parts.length; i += 1) {
        document.getElementById(parts[i]).hidden = value;
    }
    document.getElementById("top").scrollIntoView();
}

function checkUserInput() {
    var ckb = document.getElementById("ckb-xac-nhan");
    var btnSubmit = document.getElementById("next");

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

function saveValueToLocalStorage(field, value) {
    localStorage.setItem(field, value);
}

function showTarget(submitted) {
    if (submitted) {
        document.getElementById("hidden_iframe").hidden = false;
    }
}

function submitForm() {
    var btn = document.getElementById("submit");
    btn.addEventListener('click', (e) => {
        e.preventDefault;
        showTarget(true);
    })
    btn.click();
    //location.href="https://www.google.com";
}