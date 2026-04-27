let elem = document.createElement("div");
elem.innerHTML = "<link rel='stylesheet' href= 'https://yacodesal.github.io/web-dev/header.css'>"
document.body.prepend(elem);

//grabs outside file and injects it into the html
fetch("https://yacodesal.github.io/web-dev/globalheader.html")
//arrow notation. grab textual content of fetched file
  .then((output) => output.text())
  .then((text) => {elem.innerHTML = elem.innerHTML + text;})
  .catch((e) => console.error(e));
