document.addEventListener('DOMContentLoaded', function() {
    function pintar(event, color = 'green') {
        event.target.style.backgroundColor = color;
    }

    const ele = document.getElementById("ele1");
    if (ele) {
        ele.addEventListener("click", function(event) {
            pintar(event, 'yellow');
        });
    }

    function changeToBlack(event) {
        event.target.style.backgroundColor = 'black';
    }

    ['azul', 'rojo', 'verde', 'amarillo'].forEach(id => {
        const div = document.getElementById(id);
        if (div) {
            div.addEventListener('click', changeToBlack);
        }
    });
});