//STEP 1: LOAD EXPRESS FRAMEWORK
const express = require('express');
const app = express();

//USE MORGAN MIDDLEWARE LIBRARY
const morgan = require('morgan');
app.use(morgan('common'));

// ARRAY OF TOP MOVIES
let favoriteMovies = [
	{
		rank: 1,
		name: 'Star Wars Episode IV: A New Hope',
		director: ['George Lucas'],
		rating: 8.6
	},

	{
		rank: 2,
		name: 'INSIDE',
		director: ['Bo Burnham'],
		rating: 8.7
	},

	{
		rank: 3,
		name: 'Skyfall',
		director: ['Sam Mendes'],
		rating: 7.8
	},

	{
		rank: 4,
		name: 'Star Wars Episode V: Empire Strikes Back',
		director: ['Irvin Kershner'],
		rating: 8.6
	},

	{
		rank: 5,
		name: 'Back to the Future',
		director: ['Robert Zemeckis'],
		rating: 8.5
	},

	{
		rank: 6,
		name: 'COCO',
		director: ['Lee Unkrich', 'Adrian Molina'],
		rating: 8.4,

	},

	{
		rank: 7,
		name: 'Spider-Man: Into the Spider-Verse',
		director: ['Bob Persichetti', 'Peter Ramsey', 'Rodney Rothman'],
		rating: 8.4,
	},

	{
		rank: 8,
		name: 'Avengers: Infinity War',
		director: ['Anthony Russo', 'Joe Russo'],
		rating: 8.4,
	},

	{
		rank: 9,
		name: 'Inglorious Basterds',
		director: ['Quentin Tarantino'],
		rating: 8.3,
	},

	{
		rank: 10,
		name: 'UP',
		director: ['Pete Doctor', 'Bob Peterson'],
		rating: 8.2,
	}
];

//STEP 2: GET MOVIES IN JSON FOR '/movies' URL REQUEST
app.get('/movies', (req, res) => {
	res.json(favoriteMovies);
});

//GET WELCOME MESSAGE 
app.get('/', (req, res) => {
	res.send('Welcome to my favorite movies app!');
});

//USE EXPRESS STATIC CONTENT FROM THE PUBLIC DIR
app.use(express.static('public'));

//ERROR HANDLING
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something is not right!');
   });

// LISTEN TO PORT 8080
app.listen(8080, () => {
	console.log('Your app is listening on port 8080.');
});
