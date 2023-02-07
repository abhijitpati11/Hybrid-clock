let hr = document.querySelector('#hr');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');


setInterval(displayClock);

function displayClock() {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;

  // creating digital clock
  let hours = document.getElementById('hour');
  let mins = document.getElementById('minutes');
  let secs = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  // toggling am-pm
  let am = h >= 12 ? 'PM' : 'AM';
  
  // convert to 12 hours format
  if(h > 12) h -= 12;

  // adding 0 before single digit number
  h = (h<10) ? '0'+h : h;
  m = (m<10) ? '0'+m : m;
  s = (s<10) ? '0'+s : s;

  hours.innerHTML = h;
  mins.innerHTML = m;
  secs.innerHTML = s;
  ampm.innerHTML = am;
}


displayClock();

