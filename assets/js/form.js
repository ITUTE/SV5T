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
        hideAllParts(false);
        var btnSubmit = document.getElementById("next");
        btnSubmit.type = "submit";
        btnSubmit.innerHTML = "Gửi";
        btnSubmit.className = "btn btn-outline-warning disabled";
        btnSubmit.disabled = true;
    } else {
        showPart(parts[current], parts[next]);
    }
    if (current < parts.length)
    {
        saveValueToLocalStorage("current", next);
        var progress = document.getElementById("progress");
        var percent = (next + 1) * 100 / 8;
        if (percent <= 100)
        {
            progress.ariaValueNow = percent + "%";
            progress.style.width = percent + "%";
            progress.innerText = percent + "%";
        }
    }
}

function prePart() {
    var current = localStorage.getItem("current");
    var pre = parseInt(current) - 1;

    saveValueToLocalStorage("current", pre);
    if (pre <= 0) {
        var btnBack = document.getElementById("back");
        btnBack.disabled = true;
        btnBack.className = "btn btn-outline-secondary disabled";
        showPart(parts[current], parts[pre]);
    } else if (pre == parts.length - 1) {
        hideAllParts(true);
        document.getElementById(parts[pre]).hidden = false;
        var btnNext = document.getElementById("next");
        btnNext.type = "button";
        btnNext.innerHTML = "Tiếp tục";
        btnNext.className = "btn btn-outline-primary";
        btnNext.disabled = false;
    } else
        showPart(parts[current], parts[pre]);

    if (current >= 0)
    {
        var progress = document.getElementById("progress");
        var percent = (pre + 1) * 100 / 8;
        if (percent >= 0)
        {
            progress.ariaValueNow = percent + "%";
            progress.style.width = percent + "%";
            progress.innerText = percent + "%";
        }
    }
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

function submitForm() {
    window.alert("Gửi thành công!");
    //$('#model-message').modal('show');
    window.open('https://itute.github.io/SV5T/');
}