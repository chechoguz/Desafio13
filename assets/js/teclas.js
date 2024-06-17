let Var_Color = ""; 

document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');
    switch (event.key) {
        case 'a':
            Var_Color = 'pink';
            keyDiv.style.backgroundColor = Var_Color;
            break;
        case 's':
            Var_Color = 'orange';
            keyDiv.style.backgroundColor = Var_Color;
            break;
        case 'd':
            Var_Color = 'lightblue';
            keyDiv.style.backgroundColor = Var_Color;
            break;
        case 'q':
            createColorDiv('purple');
            break;
        case 'w':
            createColorDiv('gray');
            break;
        case 'e':
            createColorDiv('brown');
            break;
    }
});

function createColorDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    document.body.appendChild(newDiv);
}