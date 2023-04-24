function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    var button = document.getElementById('back-to-top-btn');
    if (window.pageYOffset > 100) {
    button.style.display = 'block';
    }


function login() {
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  var rememberMe = document.getElementById("rememberMe").checked;

  var modal = document.getElementById("loginModal");
  var modalBackdrop = document.getElementsByClassName("modal-backdrop")[0];
  modal.style.display = "none";
  modalBackdrop.style.display = "none";
}

});
function searchPizza(event) {
  if (event.key === "Enter") {
      let searchTerm = document.getElementById("search").value.toLowerCase();

      let pizzas = document.querySelectorAll(".card-title");
      let firstMatch = null;

      for (let i = 0; i < pizzas.length; i++) {
          pizzas[i].classList.remove("highlight");
      }

      for (let i = 0; i < pizzas.length; i++) {
          let pizzaName = pizzas[i].textContent.toLowerCase();
          if (pizzaName.includes(searchTerm)) {
              pizzas[i].classList.add("highlight");
              if (firstMatch === null) {
                  firstMatch = pizzas[i];
              }
          }
      }

      if (firstMatch !== null) {
          let cardRect = firstMatch.parentElement.parentElement.getBoundingClientRect();
          let offset = cardRect.top + window.pageYOffset - 100;
          window.scrollTo({ top: offset, behavior: "smooth" });

          // blink red outline for 3 seconds
          let start = null;
          function blink(timestamp) {
              if (!start) start = timestamp;
              let elapsed = timestamp - start;
              if (elapsed < 1500) {
                  firstMatch.parentElement.parentElement.style.outline = (elapsed % 500 < 250) ? "2px solid red" : "none";
                  window.requestAnimationFrame(blink);
              } else {
                  firstMatch.parentElement.parentElement.style.outline = "none";
              }
          }
          window.requestAnimationFrame(blink);
      }
  }
}
function searchAndScroll() {
  let searchTerm = document.getElementById("search").value.toLowerCase();

  let pizzas = document.querySelectorAll(".card-title");
  let firstMatch = null;

  for (let i = 0; i < pizzas.length; i++) {
    pizzas[i].classList.remove("highlight");
  }

  for (let i = 0; i < pizzas.length; i++) {
    let pizzaName = pizzas[i].textContent.toLowerCase();
    if (pizzaName.includes(searchTerm)) {
      pizzas[i].classList.add("highlight");
      if (firstMatch === null) {
        firstMatch = pizzas[i];
      }
    }
  }

  if (firstMatch !== null) {
    let cardRect = firstMatch.parentElement.parentElement.getBoundingClientRect();
    let offset = cardRect.top + window.pageYOffset - 100;
    window.scrollTo({ top: offset, behavior: "smooth" });

    let start = null;
    function blink(timestamp) {
      if (!start) start = timestamp;
      let elapsed = timestamp - start;
      if (elapsed < 1500) {
        firstMatch.parentElement.parentElement.style.outline = (elapsed % 500 < 250) ? "2px solid red" : "none";
        window.requestAnimationFrame(blink);
      } else {
        firstMatch.parentElement.parentElement.style.outline = "none";
      }
    }
    window.requestAnimationFrame(blink);
  }
}


  