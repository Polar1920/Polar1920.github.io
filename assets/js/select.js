function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var prodId = getParameterByName('prodId');

if(prodId==1){
    sel="assets/media/utiles1.jpg";
    selW = 356;
    selH = 206;
}

if(prodId==2){
    sel="assets/media/lapiz.jpg";
    selW = 292;
    selH = 221;
}

if(prodId==3){
    sel="assets/media/arbolvalores.png";
    selW = 446;
    selH = 470;

}

if(prodId==4){
    sel="assets/media/extremidadesnina.png";
    selW = 233;
    selH = 179;
}

if(prodId==5){
    sel="assets/media/extremidadesnino.jpg";
    selW = 200;
    selH = 282;
}

if(prodId==6){
    sel="assets/media/nina.png";
    selW = 282;
    selH = 399;
}

if(prodId==7){
    sel="assets/media/nino.jpg";
    selW = 630;
    selH = 631;
}

if(prodId==8){
    sel="assets/media/sentidosdelcuerpo.jpg";
    selW = 479;
    selH = 358;
}

if(prodId==9){
    sel="assets/media/utiles2.png";
    selW = 270;
    selH = 189;
}

if(prodId==10){
    sel="assets/media/vocales1.jpg";
    selW = 286;
    selH = 201;
}

if(prodId==11){
    sel="assets/media/vocales2.jpg";
    selW = 304;
    selH = 304;
}
