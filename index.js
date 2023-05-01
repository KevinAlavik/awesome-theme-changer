function removeStylesheets() {
  var stylesheets = document.getElementsByTagName("link");
  for (var i = 0; i < stylesheets.length; i++) {
    if (
      stylesheets[i].getAttribute("rel") == "stylesheet" &&
      !stylesheets[i].hasAttribute("keep")
    ) {
      stylesheets[i].parentNode.removeChild(stylesheets[i]);
    }
  }
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

function loadTheme(file) {
    document.cookie = file;
    location.reload();
}

if (document.cookie != "") {
  removeStylesheets();
  const cssElement = document.createElement("link");
  cssElement.setAttribute("rel", "stylesheet");
  cssElement.setAttribute("href", document.cookie);
  document.body.appendChild(cssElement);
  console.log(document.cookie);
} else {
  deleteAllCookies();
  document.cookie = "global.css";
  console.log(document.cookie);
}

function reset() {
  deleteAllCookies();
  location.reload();
}
