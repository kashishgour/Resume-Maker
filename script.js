function addNewWEField() {
    // Adding new Work Experience field
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewSKField() {
    // Adding new Skills field
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "skField", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("skAddButton");

    skOb.insertBefore(newNode, skAddButtonOb);
}

function addNewQUField() {
    // Adding new Qualification field
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "quField", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let quOb = document.getElementById("qu");
    let quAddButtonOb = document.getElementById("quAddButton");

    quOb.insertBefore(newNode, quAddButtonOb);
}

function generateRESUME() {
    // Generate Resume function
    let nameField = document.getElementById('namefield').value;

    // Set values in template
    document.getElementById("nameT1").textContent = nameField;
    document.getElementById("nameT2").textContent = nameField;
    document.getElementById("contactT").textContent = document.getElementById("Contactfield").value;
    document.getElementById("addressT").textContent = document.getElementById("Addressfield").value;
    document.getElementById("LinkedT").textContent = document.getElementById("LinkedInfield").value;
    document.getElementById("githubT").textContent = document.getElementById("Githubfield").value;
    document.getElementById("leetcodeT").textContent = document.getElementById("Leetcodefield").value;

    // Set Work Experience
    let wes = document.getElementsByClassName("weField");
    let weList = document.getElementById("weT");
    weList.innerHTML = ""; // Clear existing content

    for (let e of wes) {
        let li = document.createElement("li");
        li.textContent = e.value;
        weList.appendChild(li);
    }

    // Set Qualifications
    let qus = document.getElementsByClassName("quField");
    let quList = document.getElementById("quT");
    quList.innerHTML = ""; // Clear existing content

    for (let e of qus) {
        let li = document.createElement("li");
        li.textContent = e.value;
        quList.appendChild(li);
    }

    // Set Skills
    let sks = document.getElementsByClassName("skField");
    let skList = document.getElementById("skT");
    skList.innerHTML = ""; // Clear existing content

    for (let e of sks) {
        let li = document.createElement("li");
        li.textContent = e.value;
        skList.appendChild(li);
    }

    // Show template and hide form
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function printResume() {
    // Print Resume function
    window.print();
}
