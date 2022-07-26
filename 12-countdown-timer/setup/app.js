const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const counter = document.querySelectorAll('.deadline-format h4');
const deadline = document.querySelector('.deadline');
console.log(counter)

// programın çalışması için countdown yapılan tarihin günümüzden ileride olması gerekir
const futureDate = new Date(2022,7,01,18,30);
const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const date = futureDate.getDate();
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();
const day = futureDate.getDay();

giveaway.innerHTML = ` 
<h4>${weekdays[day]}, ${date} ${months[month]} ${year}, ${hour}:${mins}</h4>
`;
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime-today;
  // 1 sec = 1000 ms
  // 1 min = 60 sec
  // 1 hour = 60 min
  // 1 day = 24 hour
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;
  let days = t/oneDay;
  days = Math.floor(days);
  let hours = (t%oneDay)/oneHour;
  hours = Math.floor(hours);
  let mins = (t%oneHour)/oneMin;
  mins = Math.floor(mins);
  let secs = (t%oneMin)/1000;
  secs = Math.floor(secs);
  // console.log(days, hours, mins, secs);
  
  // set value arrays
  const values = [days, hours, mins, secs];

  // değer 10'dan küçün ise başına sıfır ekliyoruz.
  function format (item) {
    if (item < 10) {
      item = `0${item}`;
      return item;
    }
    return item;
  }

  // nodelist h4 array'ini for each ile dönüyoruz ve gün saat dakika ve saniye değerlerini ekliyoruz
  counter.forEach (function (item, index) {
    item.innerHTML = format(values[index]);
  })

  // eğer counter sıfıra ulaşursa intervalı kaldırıyoruz.
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4>Maaşlar yattı</h4>`
  }
}

let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();