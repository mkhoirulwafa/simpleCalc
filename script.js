function getHist() {
	return document.getElementById('hist-value').innerText;
}

function printHist(n){
	document.getElementById('hist-value').innerText=n;
}

function getOutput() {
	return document.getElementById('output-value').innerText;
}

function printOutput(n){
	if (n==""){
		document.getElementById('output-value').innerText=n
	}
	else{
	document.getElementById('output-value').innerText=formattedNumber(n);
	}
}

function formattedNumber(n) {
	if (n=='-') {
		return '';
	}
	var n = Number(n);
	var value = n.toLocaleString('en');
	return value;
}

function balikinFormatNumber(n){
	return Number(n.replace(/,/g,''));
}

var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function(e) {
		if (this.id=='clear') {
			printHist('');
			printOutput('');
		}
		else if (this.id=='backspace') {
			var output = balikinFormatNumber(getOutput()).toString();
			if (output) {
				output=output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output = getOutput();
			var hist = getHist();
			if (output==''&&hist!='') {
				if (isNaN(hist[hist.length-1])) {
					hist = hist.substr(0,hist.length-1);
				}
			}
			if (output!=''|| hist!='') {
				output = output==''?output:balikinFormatNumber(output);
				hist = hist+output;
				if (this.id=='=') {
					var result= eval(hist);
					printOutput(result);
					printHist('');
				}
				else{
					hist= hist+this.id;
					printHist(hist);
					printOutput('');
				}
			}
		}
	});
}

 var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click', function(e) {
		var output = balikinFormatNumber(getOutput());
		if(output!=NaN){
			output=output+this.id;
			printOutput(output);
		}
	});
}






