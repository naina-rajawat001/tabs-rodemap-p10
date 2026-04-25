const tabs = document.querySelectorAll(".tabs")

for(let tab of tabs) {
    tab.addEventListener("click", (event)=> {
        tab.classList.remove("active-tab")
        console.log(event)
        el.classList.add("active-tab")
    })
}


