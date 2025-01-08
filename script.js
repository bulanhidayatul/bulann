document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();

    let greeting;
    if (currentHour < 12) {
        greeting = "Mahasiswi Informatic";
    } else if (currentHour < 18) {
        greeting = "Mahasiswi Informatic";
    } else {
        greeting = "Mahasiswi Informatic" ;
    }

    greetingElement.textContent = greeting;
}); 