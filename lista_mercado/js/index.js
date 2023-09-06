const cardContent = window.document.getElementsByClassName("card-content")[0];
var countIndex = 0;


function deleteComponent(index){
    const itemDelete = window.document.getElementById(index);  
    itemDelete.outerHTML = ""; 
}

function onChecked(index) {
    const itemChecked = window.document.getElementById(index);
    const itemRad = itemChecked.getElementsByClassName("item-rad")[0];
    const span = itemRad.getElementsByTagName("span")[0];
    const contentInput = itemChecked.getElementsByClassName("card-content-input")[0];

    const isExistElemnt = itemChecked.getElementsByClassName("item-rad-checked");

    const input = itemChecked.getElementsByTagName("input")[0];

    console.log(input);
    if (isExistElemnt.length <= 0) {
        //checked
        if (input.value.trim() !== "") {
            itemRad.setAttribute("class", "item-rad item-rad-checked");
            contentInput.setAttribute("class", "card-content-input card-content-input-checked");
            span.innerHTML = "check_circle";
        }
    } else {
        //unclecked
        itemRad.setAttribute("class", "item-rad");
        contentInput.setAttribute("class", "card-content-input");
        span.innerHTML = "radio_button_unchecked";
    }

}

function addItem() {
    const item = document.getElementById(countIndex - 1);
    if (item) {
        const input = item.getElementsByTagName("input")[0];
        if (input.value.trim() !== "") {
            appendComponent();
        }
    } else {
        appendComponent();
    }
}

function appendComponent() {
    //Constroi LI
    var li = window.document.createElement("li");
    li.setAttribute("id", countIndex++);
    li.setAttribute("class", "card-content-item");

    // Constroi DIV-DEL
    var btnClose = window.document.createElement("div");
    btnClose.setAttribute("class", "item-del");
    btnClose.setAttribute("onClick", "deleteComponent(" + (countIndex - 1) + ")");

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
    cardContentInput.setAttribute("class", "card-content-input");

    //Constroi Input
    var input = window.document.createElement("input");

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addItem();
        }
    });

    cardContentInput.appendChild(input);
    itemDescription.appendChild(cardContentInput)
    li.appendChild(itemDescription);

    //Constroi DIv Item Rad
    var itemRad = window.document.createElement("div");
    itemRad.setAttribute("class", "item-rad");
    

    // `onChecked(${(countIndex -1)})`            
    itemRad.setAttribute("onClick", "onChecked(" + (countIndex - 1) + ")");

    var spanChecked = window.document.createElement("span");
    spanChecked.setAttribute("class", "material-symbols-outlined");
    spanChecked.innerHTML = "radio_button_unchecked";

    itemRad.appendChild(spanChecked)

    li.appendChild(itemRad);

    cardContent.appendChild(li);

    input.focus();
}