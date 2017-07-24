function Cloze(fullText, cloze) {
	this.cloze = cloze + "... ";
	this.partial = "... " + fullText.split("George Washington")[1];
	this.complete = fullText
}
module.exports = Cloze