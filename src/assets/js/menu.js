export function menu(){
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.querySelector(".header__nav");

    if(headerToggle){
        headerToggle.addEventListener("click", () => {
            headerNav.classList.toggle("show");

            headerToggle.getAttribute("aria-expended") === "true" 
            ? headerToggle.setAttribute("aria-expended", "false")
            : headerToggle.setAttribute("aria-expended", "true");
            
        })
    }
}