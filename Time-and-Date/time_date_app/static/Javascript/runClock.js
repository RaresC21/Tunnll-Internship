function updateClock() {
	var now = new Date();
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
		      'August', 'Setpember', 'October', 'November', 'December'];

	var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	var date = [now.getDate(), months[now.getMonth()], now.getFullYear()].join(' ');

	document.getElementById('time').innerHTML = [date, time].join(' / ');
	setTimeout(updateClock, 1000);
}
updateClock();
    
