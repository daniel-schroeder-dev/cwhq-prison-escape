const player = document.querySelector('#player');

document.body.addEventListener('keydown', e => {
	keys = {
		"ArrowUp": 5,
		"ArrowDown": -5,
		"ArrowRight": 5,
		"ArrowLeft": -5,
	};

	if (e.key == "ArrowUp" || e.key == "ArrowDown") {
		let bottom = +window.getComputedStyle(player).bottom.split("px")[0];
		player.style.bottom = bottom + keys[e.key] + "px";
	} else if (e.key == "ArrowLeft" || e.key == "ArrowRight") {
		let left = +window.getComputedStyle(player).left.split("px")[0];
		player.style.left = left + keys[e.key] + "px";
	}
	
});
