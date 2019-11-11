let scores = [];
const boxes = document.getElementsByClassName("summarybox");

for (let box of boxes) {
    let scoreText = box.getElementsByClassName("summarynumber")[0].firstChild.nodeValue;
	let score = { 
         name : box.firstChild.nodeValue,
         text : scoreText, // origin text  
         type : box.classList[1], // additional class from summarybox
		 value : parseFloat(scoreText) // number score value
    };
    scores.push(score);
}
console.log(scores);