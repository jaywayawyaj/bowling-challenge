class Game {
	constructor() {
		this.isOver = false;
		this.finalScore = null;
		this.frames = [];
	}

	bowl(pinsDown1, pinsDown2) {
		this.frames.push([pinsDown1, pinsDown2]);
		this.status();
	}

	currentFrame() {
		return this.frames.length;
	}

	status() {
		if(this.frames.length === 10) {
			this.finish(true);
		}
	}

	finish(bool) {
		if(bool === true) {
			this.isOver = true;
			this.finalScore = this.calculateScore();
			return this.finalScore;
		}
	}

	calculateScore() {
		let runningTotal = 0;
		let frame = this.frames;

		frame.forEach(function(frameScore, index) {
			let total = frameScore.reduce((score, pins) => score + pins)

			if(total === 10) {
				runningTotal += frame[index + 1][0] + 10;
			} else {
				frameScore.forEach(function(pinsDown) {
				runningTotal += pinsDown;
			})
			}
		})
		return runningTotal;
	}
}
