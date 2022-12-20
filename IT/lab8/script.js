var timers = [0,0,0,0];

function show_dropdown(id) {
    clearTimeout(timers[parseInt(id[1])]);
    document.getElementById(id).style.display = "block";
}

function hide_dropdown(id) {
    timers[parseInt(id[1])] = setTimeout(()=>{document.getElementById(id).style.display = "none";}, 300);
}