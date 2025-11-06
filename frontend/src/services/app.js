const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '53ac12d579mshcce113ec13dcce6p1a5898jsn20a8a42bbbac',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

export async function getAll() {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
}