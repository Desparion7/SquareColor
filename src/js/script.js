const box = document.querySelector('.box');
const speedBtns = document.querySelectorAll('[data-setting="speed"]');
const colorBtns = document.querySelectorAll('[data-setting="color"]');
const slider = document.querySelector('#slider');
const sliderinfo = document.querySelector('.slider-info');

// const slowBtn = document.querySelector('.slow');

const squares = 364;
let sliderValue = 70;
let range = 360;
let speed = 1000;

const createSquare = () => {
	for (let i = 0; i < squares; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		square.addEventListener('mouseover', () => setColor(square));
		box.appendChild(square);
	}
};

const setColor = (square) => {
	let h;
	if (range === 360) {
		h = Math.floor(Math.random() * 360);
	} else {
		h = Math.floor(Math.random() * 60) + range;
	}

	const s = slider.value + '%';
	const l = '50%';

	square.style.backgroundColor = `hsl(${h},${s},${l})`;

	setTimeout(() => {
		square.style.backgroundColor = 'transparent';
	}, speed);
};

const handelSpeed = (btn) => {
	speed = btn.getAttribute('data-speed');
};
const handelColor = (btn) => {
	range = parseFloat(btn.getAttribute('data-color-range'));
};

const changeSaturation = () => {
	sliderinfo.textContent = slider.value;
};

speedBtns.forEach((btn) =>
	btn.addEventListener('click', () => handelSpeed(btn))
);
colorBtns.forEach((btn) =>
	btn.addEventListener('click', () => handelColor(btn))
);

slider.addEventListener('input', changeSaturation);
createSquare();
