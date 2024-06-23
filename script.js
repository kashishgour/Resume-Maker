 function addNewWEField() {
    // Adding New Field
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder" , "Enter Here")


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewSKField() {
    // Adding New Field
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder" , "Enter Here")

    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("skAddButton");

    skOb.insertBefore(newNode, skAddButtonOb);
}

function addNewQUField() {
    // Adding New Field
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("quField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder" , "Enter Here")

    let quOb = document.getElementById("qu");
    let quAddButtonOb = document.getElementById("quAddButton");

    quOb.insertBefore(newNode, quAddButtonOb);
}