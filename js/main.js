let button1 = document.getElementById('button');
console.log('button1');

let button2 = document.getElementById('button1');
console.log('button2');

let button3 = document.getElementById('button2');
console.log('button3');

let slider1 = document.getElementById('slider1');
console.log('slider1');

let slider2 = document.getElementById('slider2');
console.log('slider2');

let slider3 = document.getElementById('slider3');
console.log('slider3')


button1.addEventListener('click', function () {
    button1.style.opacity = "1";
    button2.style.opacity = "0.2";
    button3.style.opacity = "0.2";

    slider1.style.display = "flex";
    slider2.style.display = "none";
    slider3.style.display = "none";
});

button2.addEventListener('click', function () {
    button2.style.opacity = "1";
    button1.style.opacity = "0.2";
    button3.style.opacity = "0.2";
    
    slider2.style.display = "flex";
    slider1.style.display = "none";
    slider3.style.display = "none";
});

button3.addEventListener('click', function () {
    button3.style.opacity = "1";
    button2.style.opacity = "0.2";
    button1.style.opacity = "0.2";
    
    slider3.style.display = "flex";
    slider2.style.display = "none";
    slider1.style.display = "none";
});



