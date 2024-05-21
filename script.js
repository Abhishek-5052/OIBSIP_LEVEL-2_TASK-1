function redirectToCalculator() {
    window.location.href = "calculator.html";
}

const customCursor = document.getElementById('customCursor');

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.classList.add('click-effect');
        });

        button.addEventListener('mouseup', () => {
            button.classList.remove('click-effect');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('click-effect');
        });
    });
});

