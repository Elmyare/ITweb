var image = document.getElementById("s1");
var image2 = document.getElementById("s8");

let timer;
let i = 1;
let sec = 200;
let flag = 0;
let count = 0; 

function run() {
    flag = 1;
    clearInterval(timer);
    timer = setInterval(tim, sec);
};

function pause() {
    flag = 0
    clearInterval(timer);
};

function faster() {
    if (flag == 1) {
        sec *= 2/3;
        clearInterval(timer)
        timer = setInterval(tim, sec);
    }
};

function slower() {
    if (flag == 1) {
        sec *= 1.5;
        clearInterval(timer);
        timer = setInterval(tim, sec);
    }
};

function tim() {
    count = count%2+1;
    if(count % 2 == 0){
        image.src = "s" + i + ".gif";
        i = i%12+1;
    } else {
        image2.src = "s" + i + ".gif";
        i = i%12+1;
    }
};