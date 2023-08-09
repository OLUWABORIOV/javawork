import './style.css'
console.log(image) // Image.png
console.log("Hello world")
import JSConfetti from 'js confetti'

//Use this Image in our app
let imageElement = document.createElement('img')
imageElement.src = image;
imageElement.alt = 'image';



//console.log(imageElement)
// let imageElement2 = document.querySelector('img')
// imageElement2.src = image
// imageElement2.alt = 'image'
// imageElement2.classList.add('image')

const jsConfetti = new JSConfetti()

jsConfetti.addConfetti()






// let div = document.querySelector("div.container");
//  console.log("div: ", div)

//  if (div) {
//     div.innerHTML = `<h1>The Result of 2 + 2 is ${2 + 2}<h1>
//     <p>Some Text</p>
//     <p>Some Text</p>
//     <a href="https://google.com">Google</a>`;
//  } 
//  console.log(div.previousElementSibling)
//  const googleLink = div.lastElementSibling
// console.dir(googleLink)
//  console.log(div.previousElementSibling)
//  console.log(div.nextElementSibling)
