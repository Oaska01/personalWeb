function toggleMenu(){
    // documnet inbuild system in javascript that will target an elemnet on our web page so we can use that element
    // we are targeting (menu-links)
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    // toggle function is a built in javascript function 
    // The toggle() method toggles between hide() and show() for the selected elements.
    // This method checks the selected elements for visibility. show() is run if an element is hidden. hide() is run if an element is visible - This creates a toggle effect.
    // we are targetting these 2 elements and we we click it it will add or remove the open class
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}