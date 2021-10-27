let year = [1800, 1810, 1820, 1830, 1840, 1850, 1860, 1870, 1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010]
let unique = [539, 858, 1043, 2665, 2082, 2005, 2592, 2136, 1736, 2509, 3813, 1886, 872, 1300, 1006, 1259, 1732, 1208, 1003, 1121, 1896, 1706]
let our = [23, 22, 36, 125, 42, 49, 88, 68, 64, 77, 102, 17, 13, 29, 46, 129, 91, 72, 70, 74, 131, 121]
let id = [8, 6, 9, 93, 29, 57, 61, 44, 84, 45, 74, 18, 27, 30, 15, 32, 42, 43, 17, 33, 68, 83]
let their = [8, 7, 23, 98, 44, 29, 54, 26, 22, 27, 73, 16, 13, 12, 12, 13, 18, 16, 9, 5, 26, 35]
let you = [7, 4, 5, 12, 8, 15, 5, 2, 1, 8, 11, 1, 5, 0, 5, 3, 3, 4, 1, 16, 27, 32]
let president = ['Adams', 'Madison', 'Monroe', 'Jackson', 'Buren', 'Fillmore', 'Buchanan', 'Grant', 'Hayes', 'Harrison', 'McKinley', 'Taft', 'Wilson', 'Hoover', 'Roosevelt', 'Truman', 'Eisehower', 'Nixon', 'Carter', 'Bush', 'Clinton', 'Obama']

let piSum

let myFont;

function preload() {
	myFont = loadFont('EBGaramond-Medium.ttf');
	italic = loadFont('EBGaramond-MediumItalic.ttf');
}

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	cnv.parent("p5sketch"); 
	background(240);
}

function draw() {
	textFont(myFont);

	background(240);
	translate(width / 2, height / 2)
	scale(0.8, 0.8)
	translate(-width / 2, -height / 2)

	stroke(200)
	line(0, height, width, height)
	line(0, 0, 0, height)

	fill('#69140E')
	// x-axis
	for (let i = 0; i < year.length; i++) {
		stroke(200)
		line(((i + 1) / year.length) * width, height - 5, ((i + 1) / year.length) * width, height + 5)
		textAlign(CENTER)
		noStroke()
		text(year[i], ((i + 1) / year.length) * width, height + 30)
	}
	fill(150)
	textFont(italic);
	text('numbers of\nunique words', 0, -30)


	// 	y-axis
	let yScale = [800, 1200, 1700, 2200, 2700, 3200, 3600]
	for (let i = 0; i < yScale.length; i++) {
		let yPosition = map(yScale[i], min(unique), max(unique) + 500, 1, 0)
		stroke(200)
		line(-5, yPosition * height, 5, yPosition * height)
		noStroke()
		textAlign(RIGHT)
		textFont(italic);
		text(yScale[i], -20, yPosition * height + 5)
	}
	fill(150)
	text('(year)', width / 2 + 50, height + 60)
	textFont(myFont);

	// 	
	for (let i = 0; i < year.length; i++) {
		piSum = 0
		let sum = our[i] + id[i] + their[i] + you[i]
		let yPosition = map(unique[i], min(unique), max(unique) + 500, 1, 0)
		fill(0)
		let arcy = []
		arcy[0] = our[i] / sum
		arcy[1] = id[i] / sum
		arcy[2] = their[i] / sum
		arcy[3] = you[i] / sum

		noStroke()
		fill("#ecc8af")
		arc(((i + 1) / year.length) * width, yPosition * height, sum * 0.5, sum * 0.5, 0, 2 * PI * arcy[0]);
		piSum += arcy[0]
		fill("#c18c5d")
		arc(((i + 1) / year.length) * width, yPosition * height, sum * 0.5, sum * 0.5, 2 * PI * piSum, 2 * PI * (arcy[1] + piSum));
		piSum += arcy[1]
		fill("#e7ad99")
		arc(((i + 1) / year.length) * width, yPosition * height, sum * 0.5, sum * 0.5, 2 * PI * piSum, 2 * PI * (arcy[2] + piSum));
		piSum += arcy[2]
		fill("#ce796b")
		arc(((i + 1) / year.length) * width, yPosition * height, sum * 0.5, sum * 0.5, 2 * PI * piSum, 2 * PI * (arcy[3] + piSum));

	}

	for (let i = 0; i < year.length; i++) {
		let sum = our[i] + id[i] + their[i] + you[i]
		let yPosition = map(unique[i], min(unique), max(unique) + 500, 1, 0)
		fill("#ce796b")
		noStroke()
		textFont(italic);
		textAlign(CENTER)
		text(sum + ' / ' + unique[i], (i + 1) / year.length * width + 5, yPosition * height - sum * 0.3)
		fill(170)
		textFont(myFont);
		text(president[i], ((i + 1) / year.length) * width + 5, yPosition * height - sum * 0.3 - 17)
	}

	// 	lengend
	textFont(myFont);
	stroke(200)
	line(width - 120, -20, width + 65, -20)
	line(width - 120, -20, width - 120, 140)
	line(width - 120, 140, width + 65, 140)
	line(width + 65, -20, width + 65, 140)
	fill("#ecc8af")
	noStroke()
	circle(width - 120 + 20, 0, 15)
	textAlign(LEFT)
	fill(150)
	text('percentage of "OUR"', width - 120 + 35, 3)
	fill("#e7ad99")
	circle(width - 120 + 20, 30, 15)
	fill(150)
	text('percentage of "THEIR"', width - 120 + 35, 33)
	fill("#c18c5d")
	circle(width - 120 + 20, 60, 15)
	fill(150)
	text('percentage of "I"', width - 120 + 35, 63)
	fill("#ce796b")
	circle(width - 120 + 20, 90, 15)
	fill(150)
	text('percentage of "YOU"', width - 120 + 35, 93)
	text('keywords sum / unique words', width - 120 + 15, 123)
}

function windowResized() {
	cnv = resizeCanvas(windowWidth, windowHeight);
}