const colors = ["green","red",,"lightsalmon","gold","cyan","fuchsia","slategray","darkslateblue","darkblue","violet","indigo","purple","rosybrown","limegreen","teal","indigo","springgreen","tomato","crimson","olive","powderblue","maroon","sandybrown","salmon","mediumspringgreen","orange"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}