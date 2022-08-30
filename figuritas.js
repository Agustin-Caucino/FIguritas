const wrapperDiv = document.querySelector('.wrapper');
const paises = [
    {
        nombre: "FWC",
        figus: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
    },
    {
        nombre: "Qatar",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Ecuador",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Senegal",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Holanda",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Inglaterra",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Iran",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "EEUU",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Gales",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Argentina",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Arabia Saudita",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Mexico",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Polonia",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Francia",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Australia",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Dinamarca",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Tunez",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "España",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Costa Rica",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Alemania",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Japon",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Belgica",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Canada",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Marruecos",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Croacia",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Brasil",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Serbia",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Suiza",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Camerun",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Portugal",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Ghana",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Uruguay",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    {
        nombre: "Corea del Sur",
        figus: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    }
];



for (element in paises){
    wrapperDiv.innerHTML += `<div class='pais'><h1> ${paises[element].nombre} </h1></div>`;
    for(i=0; i<paises[element].figus.length;i++){
        wrapperDiv.innerHTML += `<div class='numeroFigu'> ${paises[element].figus[i]} </div>`;
    }
}
const numeros = document.querySelectorAll('.numeroFigu');
for (i=0; i<numeros.length; i++){
    numeros[i].addEventListener('click', (e) => {
        e.target.classList.toggle('repetida');
});
}

