function randomIndex(data) {
  return Math.floor(Math.random() * data.length + 1);
}

async function getProverb() {
	try {
		const res = await axios.get("https://type.fit/api/quotes");
		const data = await res.data;
		let i = randomIndex(data);
		document.querySelector('#citation').textContent = data[i]['text'];
		if(data[i]['author'] === null){
			document.querySelector('#auteur').textContent = "...";
		} else {
			document.querySelector('#auteur').textContent = data[i]['author'];
		}
		
	} catch (e) {
		console.log(e);
	}
}

document.querySelector('#refresh').addEventListener('click', getProverb);
