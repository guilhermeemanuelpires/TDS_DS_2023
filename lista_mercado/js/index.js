const cardContent = window.document.getElementsByClassName("card-content")[0];  
var countIndex = 0;




function addItem(){
    // const item = window.document.getElementById(countIndex);
    console.log(countIndex,window.document.getElementById(countIndex));
    appendComponent();
}

function appendComponent(){
    //Constroi LI
    var li = window.document.createElement("li");
    li.setAttribute("id", countIndex++);
    li.setAttribute("class","card-content-item");

    // Constroi DIV-DEL
    var btnClose = window.document.createElement("div");
    btnClose.setAttribute("class","item-del");

    li.appendChild(btnClose); 

    //Constroi DIV-SPAN
    var spanClose = window.document.createElement("span");
    spanClose.setAttribute("class","material-symbols-outlined");
    spanClose.innerHTML = "close";

    btnClose.appendChild(spanClose);

    //Constroi DIv Descrição
    var itemDescription = window.document.createElement("div");
    itemDescription.setAttribute("class","item-description");

    var cardContentInput = window.document.createElement("div");
    cardContentInput.setAttribute("class","card-content-input");

    //Constroi Input
    var input = window.document.createElement("input");

    cardContentInput.appendChild(input);
    itemDescription.appendChild(cardContentInput)
    li.appendChild(itemDescription);
    
    //Constroi DIv Item Rad
    var itemRad =  window.document.createElement("div");
    itemRad.setAttribute("class","item-rad");

    var spanChecked = window.document.createElement("span");
    spanChecked.setAttribute("class","material-symbols-outlined");
    spanChecked.innerHTML = "radio_button_unchecked";

    itemRad.appendChild(spanChecked)

    li.appendChild(itemRad);

    cardContent.appendChild(li);

    input.focus();
}