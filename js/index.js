let date = new Date();
let months = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');

document.getElementById('actual-date').textContent = date.getDate() + ' ' + months[date.getMonth()];