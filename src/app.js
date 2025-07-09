import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

 let valuecart = {
  values: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
  suits: [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrlG-14xWYfBeupMMnsV8qZrM1i_194c65g&s",
    },
    {
      img: "https://svgsilh.com/svg/761861.svg",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/05/11/02/25/pica-761860_1280.png",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEA3xtkjgxgu6yVTt1q6dZ5dJWXZK5I6op1g&s",
    }
  ]
};


  function mostrarValue() {
    const randomValue = valuecart.values[Math.floor(Math.random() * valuecart.values.length)];
    const randomSuits = valuecart.suits[Math.floor(Math.random() * valuecart.suits.length)];

    //los queeyselector de los valores 
    document.querySelector("#value").innerHTML =`${randomValue}`
    document.querySelector("#numberTop").textContent = randomValue;
    document.querySelector("#numberBottom").textContent = randomValue;

    //los queryselector de los suits
    document.querySelector("#suitTop").innerHTML = `<img src="${randomSuits.img}" style=" width:50px">`;
    document.querySelector("#suitBottom").innerHTML = `<img src="${randomSuits.img}" style=" width:50px">`;

  }

window.onload = mostrarValue;

const boton = document.getElementById('miBoton');
boton.addEventListener('click', () => {
  location.reload();
});





