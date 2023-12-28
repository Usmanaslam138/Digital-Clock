let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

function digital_clock(){
let current_date = new Date();
let h = current_date.getHours();
let m = current_date.getMinutes();
let s = current_date.getSeconds();
if (h > 12){
    h = h - 12
}
hrs.innerHTML = (h<10?"0":"") + (h)
min.innerHTML = (m<10?"0":"") + (m)
sec.innerHTML = (s<10?"0":"") + (s)
}
setInterval(digital_clock,1000)