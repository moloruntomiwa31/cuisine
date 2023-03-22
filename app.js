const getElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) return element
    throw Error (
        `Check for ${selector}`
    )  
}

const links = getElement(".nav-links")
const navBtnDOM = getElement(".nav-btn")

navBtnDOM.addEventListener("click", () => {
    links.classList.toggle("show-links")
})

AOS.init({
    offset: 200,
    delay: 100,
    duration: 600,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top bottom"
})

