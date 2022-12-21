let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let progressStartValue = 0;
let progressEndValue = 100;
let speed = 100;
let progress = setInterval(() => {
	progressStartValue = progressStartValue + 1;
	valueContainer.textContent = `${progressStartValue}%`;
	if (progressStartValue <= 25) {
		progressBar.style.background = `conic-gradient(
    #4d5bf9 ${(progressStartValue + 0.5) * 3.6}deg,
    #cadcff ${(progressStartValue + 0.5) * 3.6}deg
  )`;
	} else if (progressStartValue > 25 && progressStartValue <= 50) {
		progressBar.style.background = `conic-gradient(
      #33ff00 ${(progressStartValue + 0.5) * 3.6}deg,
      #c9ffbb ${(progressStartValue + 0.5) * 3.6}deg
    )`;
	} else if (progressStartValue > 50 && progressStartValue <= 75) {
		progressBar.style.background = `conic-gradient(
      #ff9900 ${(progressStartValue + 0.5) * 3.6}deg,
      #ffdeac ${(progressStartValue + 0.5) * 3.6}deg
    )`;
	} else {
		progressBar.style.background = `conic-gradient(
      #ff2f2f ${(progressStartValue + 0.5) * 3.6}deg,
      #ffc5c5 ${(progressStartValue + 0.5) * 3.6}deg
    )`;
	}
	if (progressStartValue == progressEndValue) {
		clearInterval(progress);
	}
}, speed);
