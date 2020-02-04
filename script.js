function display()
{
    let today = new Date();

    let hour = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    let output = hour + ':' + minute + ':' + seconds;

    document.getElementById('date').innerText = output;

}
setInterval(display, 1000);

const pi = 3.14;

function dia() {
    let diam = document.getElementById('number').value;

    let answer = diam * pi;

    document.getElementById("answer").innerText = answer;
}

function opp() {
    let diam = document.getElementById('number').value;

    let answer2 = diam * diam * pi * 0.25;

    console.log(answer2);

    document.getElementById("answer2").innerText = answer2;
}

function bereken() {
    opp();
    dia();
}