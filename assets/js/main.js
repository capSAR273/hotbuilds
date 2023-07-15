console.log('Main JS file loaded.');


window.onload = function() {

    var headSelect = document.getElementById("head-items");
    var neckSelect = document.getElementById("neck-items");
    var ring1Select = document.getElementById("ring1-items");
    var ring2Select = document.getElementById("ring2-items");
    var chestSelect = document.getElementById("chest-items");
    var bootSelect = document.getElementById("boot-items");
    var gloveSelect = document.getElementById("glove-items");

    var headItemsArray = ["Wind Crown", "Wind Crown 2", "Wind Crown 3"];
    var neckItemsArray = ["Jade Amulet"];
    var ringItemsArray = ["Iron Ring", "Wooden Ring"];
    var chestItemsArray = ["Chain Mail"];
    var bootItemsArray = ["Runner Shoes"];
    var gloveItemsArray = ["Quickhand Gloves"];

    for(var i = 0; i < headItemsArray.length; i++){
        var opt = headItemsArray[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        headSelect.appendChild(el);
    }

    for(var i = 0; i < neckItemsArray.length; i++){
        var opt = neckItemsArray[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        neckSelect.appendChild(el);
    }

    for(var i = 0; i < ringItemsArray.length; i++){
        var opt = ringItemsArray[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        ring1Select.appendChild(el);
    }

    for(var i = 0; i < ringItemsArray.length; i++){
        var opt = ringItemsArray[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        ring2Select.appendChild(el);
    }

    for(var i = 0; i < chestItemsArray.length; i++){
        var opt = chestItemsArray[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        chestSelect.appendChild(el);
    }

    for(var i = 0; i < gloveItemsArray.length; i++){
        var opt = gloveItemsArray[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        gloveSelect.appendChild(el);
    }

    for(var i = 0; i < bootItemsArray.length; i++){
        var opt = bootItemsArray[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        bootSelect.appendChild(el);
    }
};

function generateHash() {
                        
    var headSelect = document.getElementById("head-items");
    var neckSelect = document.getElementById("neck-items");
    var ring1Select = document.getElementById("ring1-items");
    var ring2Select = document.getElementById("ring2-items");
    var chestSelect = document.getElementById("chest-items");
    var bootSelect = document.getElementById("boot-items");
    var gloveSelect = document.getElementById("glove-items");
    var allItems = headSelect.options[headSelect.selectedIndex].value + 
    neckSelect.options[neckSelect.selectedIndex].value + 
    ring1Select.options[ring1Select.selectedIndex].value + 
    ring2Select.options[ring2Select.selectedIndex].value +
    chestSelect.options[chestSelect.selectedIndex].value +
    bootSelect.options[bootSelect.selectedIndex].value +
    gloveSelect.options[gloveSelect.selectedIndex].value;

    let hash = 0;
    for (let i = 0, len = allItems.length; i < len; i++){
        let chr = allItems.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    document.getElementById("hashContent").innerHTML = hash;
}

function decryptHash(){
    let decrypted = 0;
    var buildHash = document.getElementById("buildImportText").value;
    for (let i = 0, len = buildHash.length; i < len; i++){
        let chr = buildHash.charCodeAt(i);
        decrypted = (decrypted >> 5) - decrypted + chr;
        decrypted |= 0;
    }
    document.getElementById("decryptedContent").innerHTML = decrypted;
}