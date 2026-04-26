const tabs = document.querySelectorAll(".tabs")
const contentBox = document.querySelector("p")
let tabContent = "First Tab"

const defaultTab = document.getElementById("tab1")
defaultTab.classList.add("active-tab")


for(let tab of tabs) {
    tab.addEventListener("click", (event)=> {
        tabs.forEach(t => t.classList.remove("active-tab"))
        const activeTab = event.target
        const tabname = event.target.id
        if(tabname == "tab1") {
            tabContent = "First Tab"
        }else if(tabname == "tab2") {
            tabContent = "Second Tab"
        }else if (tabname == "tab3"){
            tabContent = "Third Tab"
        }else if (tabname == "tab4") {
            tabContent = "Fourth Tab"
        }
        activeTab.classList.add("active-tab")
        contentBox.innerText = `${tabContent} content to be displayed here`
    })

}


