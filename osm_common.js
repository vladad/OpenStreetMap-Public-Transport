function httpGet(theUrl) {
	const xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", theUrl, false); // false for synchronous request
	xmlHttp.send(null);
	return xmlHttp.responseText;
}

function httpGetAsync(theUrl, callback) {
	const xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	}
	xmlHttp.open("GET", theUrl, true); // true for asynchronous
	xmlHttp.send(null);
}

function download(content, fileName, contentType) {
	const a = document.createElement("a");
	const file = new Blob([content], { type: contentType });
	a.href = URL.createObjectURL(file);
	a.download = fileName;
	a.click();
}


function addHeaderCell(tr, val) {
	const td = document.createElement("th");

	td.innerHTML = val;

	tr.appendChild(td);
}


function addTextCell(tr, val) {
	const td = document.createElement("td");

	td.innerHTML = val === undefined ? "-" : val;

	tr.appendChild(td);
}


function addRelationCell(tr, val) {
	const td = document.createElement("td");
	const anchor = document.createElement("a");
	anchor.href = "https://www.openstreetmap.org/relation/" + val
	anchor.text = val;
	td.appendChild(anchor);

	tr.appendChild(td);
}

function addWikidataCell(tr, val) {
	if (val === undefined) {
		addTextCell(tr, val);
		return;
	}

	const td = document.createElement("td");
	const anchor = document.createElement("a");
	anchor.href = "https://www.wikidata.org/wiki/" + val
	anchor.text = val;
	td.appendChild(anchor);

	tr.appendChild(td);
}

function addWikipediaCell(tr, val) {
	if (val === undefined) {
		addTextCell(tr, val);
		return;
	}
	const splittedVal = val.split(":");
	const lang = splittedVal[0]
	const page = splittedVal[1]

	const td = document.createElement("td");
	const anchor = document.createElement("a");
	anchor.href = "https://" + lang + ".wikipedia.org/wiki/" + page
	anchor.text = val;
	td.appendChild(anchor);

	tr.appendChild(td);
}