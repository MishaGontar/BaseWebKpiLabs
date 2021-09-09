window.onload = function() {
    let dropdown = document.getElementsByClassName("dropdown-btn");
    let i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
}

function change(props) {
    let a = document.getElementById('context')
    a.innerHTML = props
}
function changeText(props) {
    let a = document.getElementById('context1')
    a.innerHTML = props
}