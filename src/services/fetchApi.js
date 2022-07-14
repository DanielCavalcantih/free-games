const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d391be664mshb24497759ba28e6p1b2b28jsn8e0139996c0a',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

export const fetchFreeGames = () => {
  return fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
    .then(response => response.json())
    .catch(err => console.error(err));
}

export const fetchSpecificGame = (id) => {
	return fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
		.then(response => response.json())
		.catch(err => console.error(err));
}

