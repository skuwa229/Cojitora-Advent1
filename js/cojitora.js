(window.onload = function() {
	const numbers = [1, 2, 3, 4, 5, 6];
	// shuffle
	const shuffle = function() {return Math.random()-.5};
	numbers.sort(shuffle);
	
	// find favicon
	const favicon = document.querySelector("link[rel*='icon']");
	
	// if favicon isn't exists
	if(!favicon){
		// time value to delete cache
		const time = new Date().getTime();
	
		// make DOM
		const link = document.createElement('link');
		link.type = 'type="image/png';
		link.rel = 'shortcut icon';
		link.href = 'https://raw.githubusercontent.com/skuwa229/Cojitora-Image/master/favicon' + numbers[0] + '.ico?v=' + time;
		
		// set favicon
		document.getElementsByTagName('head')[0].appendChild(link);
	}
})();
