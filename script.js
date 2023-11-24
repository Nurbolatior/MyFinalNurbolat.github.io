const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
})

window.onscroll = function() {
  scrollFunction();
}

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const openMenuBtn = document.getElementById('openMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const popupMenu = document.getElementById('popupMenu');

  openMenuBtn.addEventListener('click', function () {
    popupMenu.style.display = 'block';
  });

  closeMenuBtn.addEventListener('click', function () {
    popupMenu.style.display = 'none';
  });
})




// Функция для прокрутки вверх при нажатии кнопки
function scrollToTop() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для других браузеров
}



//функция назад
function goBack() {
  window.history.back();
}


document.addEventListener('DOMContentLoaded', function () {
  const animateButton = document.getElementById('animateButton');
  const audioElement = document.getElementById('audioElement');
  const displayText = document.getElementById('displayText');

  animateButton.addEventListener('click', function () {
    // Воспроизведение аудио
    audioElement.play();

    // Показ текста
    displayText.textContent = "Congratulations, there is now a 20% discount on products in this category.";
    displayText.style.display = 'block';

    // Можно добавить другие действия после нажатия кнопки
    // Например, изменение стилей или анимации
  });
});







// Get references to the elements
const stars = document.getElementById('stars');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const header = document.querySelector('header');

// Add scroll event listener
window.addEventListener('scroll', function() {
  // Get the current scroll position
  let value = window.scrollY;
  
  // Update element styles based on scroll position
  stars.style.left = value * 0.25 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
})


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};