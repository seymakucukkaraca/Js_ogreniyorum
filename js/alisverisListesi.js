var itemId = 0;
function hepsiniSil() {
    document.getElementById("urunler").innerHTML = "";
}

function elemanSil(id) {
    document.getElementById(id).remove();
}

function ekle() {
    var urun = document.getElementById("urunItem").value;
    var liste = document.createElement("li");
    liste.id = itemId;
    liste.innerHTML=urun;
    var silItem = document.createElement("span");
    silItem.innerHTML="  sil";
    silItem.setAttribute("onclick", "elemanSil(" + itemId + ")");
    document.getElementById("urunler").appendChild(liste).appendChild(silItem);
    itemId++;
}
