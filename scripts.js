let acc = document.getElementsByClassName("dept")
let i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active")

    let panel = this.nextElementSibling
    if (panel.style.display === "block") {
      panel.style.display = "none"
    } else {
      panel.style.display = "block"
    }
  })
}

/*****Slide Show*****/

let slideIndex = 1
showSlides(slideIndex)

//next/prev
function plusSlides(n) {
  showSlides(slideIndex += n)
}

//Image slide
function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName("slide-card")
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slides[slideIndex-1].style.display = "block"

}


//toggle responsive class

function myFunc() {
  let x = document.getElementById("myNav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

//toggle dropdown on click

function drpClick() {
  document.getElementById("drpContent").classList.toggle("show")
}

//close dropdown on window click

window.onclick = function (e) {
  if (!e.target.matches('.drpdwn-btn')) {
    let content = document.getElementsByClassName('drpdwn-content')
    let i
    for (i = 0; i < content.length; i++) {
      let showDrp = content[i]
      if (showDrp.classList.contains('show')) {
        showDrp.classList.remove('show')
      }
    }
  }
}



//////////////////////BONUS/////////////////////////

let array_one = ["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"]
let array_two = ["dog", "goose", "kite", "meal", "laptop"]

const array_three = array_one.filter(element => array_two.includes(element))

console.log(array_three)

//print answer

let printArray = document.getElementById("arrayThree")

printArray.innerHTML = `array_three = ` + `[${array_three.join(", ")}]`