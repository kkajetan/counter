const paragraphResult1 = document.querySelector(".time1");
const paragraphResult2 = document.querySelector(".time2");
const paragraphResult3 = document.querySelector(".time3");
const paragraphResult4 = document.querySelector(".time4");
const paragraphResult5 = document.querySelector(".time5");
const targetDate = new Date("2024-10-06T00:00:00").getTime();

const countdownInterval = setInterval(function () {
	const currentDate = new Date().getTime();
	const timeLeft = targetDate - currentDate;

	if (timeLeft <= 0) {
		clearInterval(countdownInterval);
		document.getElementById("countdown").innerHTML = "It's over!";
	} else {
		const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

		paragraphResult1.textContent = `${days} days`;
		paragraphResult2.textContent = `${hours} hours`;
		paragraphResult3.textContent = `${minutes} minutes`;
		paragraphResult4.textContent = `${seconds} seconds`;
	}
}, 1000);
