const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '403acd4b32mshb5c269a1ea859d8p126c3cjsn82c695e20bfd',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));