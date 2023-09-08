const cardContent = window.document.getElementsByClassName("card-content")[0];
var countIndex = 0;
var lista_items = [];


function saveListStorange() {
    const items = window.document.querySelectorAll("li");

    lista_items = [];

    items.forEach((item) => {


        const id = item.id;
        const input = item.getElementsByTagName("input")[0];
        const status = item.getElementsByTagName("span")[1].innerHTML === "check_circle";

        if (input.value !== "") {
            lista_items.push({
                id: id,
                value: input.value,
                status: status,
            });
        }

    });
    window.localStorage.setItem("dados", JSON.stringify(lista_items));
}

function loadItems() {
    const list = window.localStorage.getItem("dados");

    if (list) {
        const data = JSON.parse(list);

        data.forEach((item) => {
            addItem(item);
            countIndex = item.id;
        });

    } else {
        window.localStorage.setItem("dados", []);
    }

};

function deleteComponent(index) {
    const itemDelete = window.document.getElementById(index);
    itemDelete.outerHTML = "";
    saveListStorange();
}

function onChecked(index) {
    const itemChecked = window.document.getElementById(index);
    const itemRad = itemChecked.getElementsByClassName("item-rad")[0];
    const span = itemRad.getElementsByTagName("span")[0];
    const contentInput = itemChecked.getElementsByClassName("card-content-input")[0];

    const isExistElemnt = itemChecked.getElementsByClassName("item-rad-checked");

    const input = itemChecked.getElementsByTagName("input")[0];

    if (isExistElemnt.length <= 0) {
        //checked
        if (input.value.trim() !== "") {
            itemRad.setAttribute("class", "item-rad item-rad-checked");
            contentInput.setAttribute("class", "card-content-input card-content-input-checked");
            span.innerHTML = "check_circle";
            input.disabled = true;
        }
    } else {
        //unclecked
        itemRad.setAttribute("class", "item-rad");
        contentInput.setAttribute("class", "card-content-input");
        span.innerHTML = "radio_button_unchecked";
        input.disabled = false;
    }
    saveListStorange();
}

function addItem(item) {

    if (item) {
        appendComponent(item.id, item.value, item.status);
    } else {
       
        const item = document.getElementById(countIndex);
        countIndex++;
        if (item) {
            const input = item.getElementsByTagName("input")[0];
            if (input.value.trim() !== "") {
                appendComponent(countIndex);
                saveListStorange();
            }
        } else {
            appendComponent(countIndex);
        }
    }

}

function appendComponent(index, value, status) {
    //Constroi LI
    var li = window.document.createElement("li");
    li.setAttribute("id", index);
    li.setAttribute("class", "card-content-item");

    // Constroi DIV-DEL
    var btnClose = window.document.createElement("div");
    btnClose.setAttribute("class", "item-del");
    btnClose.setAttribute("onClick", "deleteComponent(" + (index) + ")");

    li.appendChild(btnClose);

    //Constroi DIV-SPAN
    var spanClose = window.document.createElement("span");
    spanClose.setAttribute("class", "material-symbols-outlined");
    spanClose.innerHTML = "close";

    btnClose.appendChild(spanClose);

    //Constroi DIv Descrição
    var itemDescription = window.document.createElement("div");
    itemDescription.setAttribute("class", "item-description");

    var cardContentInput = window.document.createElement("div");

    if (status) {
        cardContentInput.setAttribute("class", "card-content-input " +
            " card-content-input-checked");
    } else {
        cardContentInput.setAttribute("class", "card-content-input");
    }


    //Constroi Input
    var input = window.document.createElement("input");
    input.disabled = status;

    if (value) {
        input.value = value;
    }

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addItem();
        }
    });

    input.addEventListener("blur", () => {
        saveListStorange();
    });

    cardContentInput.appendChild(input);
    itemDescription.appendChild(cardContentInput)
    li.appendChild(itemDescription);

    //Constroi DIv Item Rad
    var itemRad = window.document.createElement("div");

    if (status) {
        itemRad.setAttribute("class", "item-rad item-rad-checked");
    } else {
        itemRad.setAttribute("class", "item-rad");
    }


    // `onChecked(${(countIndex -1)})`            
    itemRad.setAttribute("onClick", "onChecked(" + (index) + ")");

    var spanChecked = window.document.createElement("span");
    spanChecked.setAttribute("class", "material-symbols-outlined");

    if (status) {
        spanChecked.innerHTML = "check_circle";
    } else {
        spanChecked.innerHTML = "radio_button_unchecked";
    }

    // spanChecked.innerHTML = status ? "check_circle" : "radio_button_unchecked";


    itemRad.appendChild(spanChecked)

    li.appendChild(itemRad);

    cardContent.appendChild(li);

    input.focus();
}

loadItems();