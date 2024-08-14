//click burger menu to change icon and toggle fly-out content
function showMenuAndChangeIcon() {
  let menuIcon = document.querySelector(".menu-icon")
  // get the style of current element
  let menuIconStyle = window.getComputedStyle(menuIcon)
  let currentImg = menuIconStyle["background-image"]
  // with hypen, this is one way to access the attribute with [] or alternatively with camelCase attribute name
  //let currentImg = menuIconStyle.backgroundImage
  let flyoutContent = document.querySelector(".flyout-menu-content")
  console.log(currentImg)
  if (currentImg.includes("xmark.svg")) {
    flyoutContent.style.display = "none"
    menuIcon.style.backgroundImage = "url(./bars-solid.svg)"
  } else {
    menuIcon.style.backgroundImage = "url(./xmark.svg)"
    flyoutContent.style.display = "block"
  }
}
//onhover, nav-link
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar")
  const scrollThreshold = 200 // Height in pixels where the navbar should appear
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
})
//click destinations and show menu
function toggleDestinationsMenu() {
  let destinationsMenu = document.querySelector(".destinations-menu")
  let destinationMenuStyles = window.getComputedStyle(destinationsMenu)
  let currentDisplay = destinationMenuStyles["display"]
  console.log(currentDisplay)
  if (currentDisplay === "none") {
    destinationsMenu.style.display = "block"
  } else {
    destinationsMenu.style.display = "none"
  }
}
let destinationBtn = document.querySelector("#destinations")
destinationBtn.addEventListener("click", toggleDestinationsMenu)
