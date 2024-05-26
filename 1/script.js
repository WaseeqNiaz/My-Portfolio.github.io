let sidebar = document.querySelector(".sidebarGo");
let inn = sidebar.getAttribute("areas-hidden");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
    if (inn === "true") {
        sidebar.setAttribute("areas-hidden", "false");
        inn = "false"; // Update the value of 'inn' after changing the attribute
    } else {
        sidebar.setAttribute("areas-hidden", "true");
        inn = "true"; // Update the value of 'inn' after changing the attribute
    } 
});