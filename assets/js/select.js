function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var prodId = getParameterByName('prodId');

if(prodId==1){
    sel="assets/media/utiles1.jpg";
}

if(prodId==2){
    sel="assets/media/lapiz.jpg";
}

if(prodId==3){
    sel="assets/media/arbolvalores.png";
}

if(prodId==4){
    sel="assets/media/extremidadesnina.png";
}

if(prodId==5){
    sel="assets/media/extremidadesnino.jpg";
}

if(prodId==6){
    sel="assets/media/nina.png";
}

if(prodId==7){
    sel="assets/media/nino.jpg";
}

if(prodId==8){
    sel="assets/media/sentidosdelcuerpo.jpg";
}