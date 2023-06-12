const whatsappButton = document.getElementById("whatsappButton");
whatsappButton.addEventListener("click";

function whatsappButton(){
    const phoneNumber = "3795578960";
    const message = "Hola quiero hacer un pedido de:";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url,"_blanck");

});
