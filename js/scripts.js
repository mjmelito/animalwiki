window.onload = function() {

  const form = document.querySelector("form");

  form.onsubmit = function(event) {
    event.preventDefault();

    let Turtles = document.getElementById("Turtles");
    Turtles.setAttribute("class", "hidden");
    let Snakes = document.getElementById("Snakes");
    Snakes.setAttribute("class", "hidden");
    let Insects = document.getElementById("Insects");
    Insects.setAttribute("class", "hidden");

    const animal = (document.querySelector("input#animal").value);

    if (animal === "Turtles") {
      Turtles.removeAttribute("class");
    }
    else if (animal === "Snakes") {
      Snakes.removeAttribute("class");
    }
    else if (animal === "Insects") {
      Insects.removeAttribute("class");
    }
  };
};