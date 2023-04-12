// //STEP 1
const favoriteMovies = [
  'Jurassic Park',
  'Forrest Gump',
  'Avengers Endgame',
  'Dungeons & Dragons',
  'Star Trek',
];

// console.log(favoriteMovies[1]);

// //STEP 2

// const movies = new Array(5);
// favoriteMovies.forEach((movie, index) => (movies[index] = movie));
// console.log(movies);

// //STEP 3

// const movies = new Array(5);
// favoriteMovies.forEach((movie, index) => (movies[index] = movie));
// movies.splice(2, 0, 'The Mask');
// console.log(movies.length);

// //STEP 4

// const movies = [];
// favoriteMovies.forEach((movie, index) => (movies[index] = movie));
// delete movies[0];

// console.log(movies);

// //STEP 5
// const movies = [];
// favoriteMovies.forEach((movie, index) => (movies[index] = movie));
// movies.push('The Mask', 'Ace Ventura: Pet Detective');
// for (let movie in movies) {
//   console.log(movies[movie]);
// }

// //STEP 6

// const movies = [];
// favoriteMovies.forEach((movie, index) => (movies[index] = movie));
// movies.push('The Mask', 'Ace Ventura: Pet Detective');
// for (let movie of movies) {
//   console.log(movie);
// }

// //STEP 7
// const movies = [];
// favoriteMovies.forEach((movie, index) => (movies[index] = movie));
// movies.push('The Mask', 'Ace Ventura: Pet Detective');
// movies.sort();
// for (let movie of movies) {
//   console.log(movie);
// }

// //STEP 8

// const movies = [];
// favoriteMovies.push('The Mask', 'Ace Ventura: Pet Detective');
// movies.push('The Mask', 'Ace Ventura: Pet Detective');
// const leastFavMovies = ['Beaches', 'Twilight', 'Jack Frost'];

// console.log('Movies I like:', '\n \n');
// for (let movie of favoriteMovies) {
//   console.log(movie);
// }

// console.log('\n');

// console.log('Movies I regret watching:', '\n \n');
// for (let movie of leastFavMovies) {
//   console.log(movie);
// }

// //STEP 9

// favoriteMovies.push('The Mask', 'Ace Ventura: Pet Detective');
// const leastFavMovies = ['Beaches', 'Twilight', 'Jack Frost'];

// console.log('Movies I like:', '\n \n');
// for (let movie in favoriteMovies) {
//   console.log(favoriteMovies[movie]);
// }

// console.log('\n');

// console.log('Movies I regret watching:', '\n \n');
// for (let movie in leastFavMovies) {
//   console.log(leastFavMovies[movie]);
// }

// const movies = favoriteMovies.concat(leastFavMovies);
// movies.sort().reverse();
// console.log(movies);

// //STEP 10

// favoriteMovies.push('The Mask', 'Ace Ventura: Pet Detective');
// const leastFavMovies = ['Beaches', 'Twilight', 'Jack Frost'];

// console.log('Movies I like:', '\n \n');
// for (let movie in favoriteMovies) {
//   console.log(favoriteMovies[movie]);
// }

// console.log('\n');

// console.log('Movies I regret watching:', '\n \n');
// for (let movie in leastFavMovies) {
//   console.log(leastFavMovies[movie]);
// }

// const movies = favoriteMovies.concat(leastFavMovies);
// movies.sort().reverse();
// console.log(movies);
// const lastItem = movies.slice(movies.length - 1, movies.length)[0];
// console.log(lastItem);

// //STEP 11

// // favoriteMovies.push('The Mask', 'Ace Ventura: Pet Detective');
// // const leastFavMovies = ['Beaches', 'Twilight', 'Jack Frost'];

// // console.log('Movies I like:', '\n \n');
// // for (let movie in favoriteMovies) {
// //   console.log(favoriteMovies[movie]);
// // }

// // console.log('\n');

// // console.log('Movies I regret watching:', '\n \n');
// // for (let movie in leastFavMovies) {
// //   console.log(leastFavMovies[movie]);
// // }

// // const movies = favoriteMovies.concat(leastFavMovies);
// // movies.sort().reverse();
// // console.log(movies);
// // const firstItem = movies.slice(0, 1)[0];
// // console.log(firstItem);

// // //STEP 12

// // const movieIndices = leastFavMovies.map((movie) => movies.indexOf(movie));
// // const moviesILike = ['Jumanji', 'Honey, I Shrunk the Kids', 'Nutty Professor'];
// // movieIndices.forEach((movieIndex, index) => {
// //   movies[movieIndex] = moviesILike[index];
// // });
// // movies.sort().reverse();
// // console.log(movies);

// //STEP 13

// // const movies = [
// //   ['Forrest Gump', 1],
// //   ['Jurassic Park', 2],
// //   ['Avengers Endgame', 3],
// //   ['Dungeons & Dragons', 4],
// //   ['Star Trek', 5],
// // ];

// // for (let movieArray of movies) {
// //   console.log(movieArray.filter((item) => typeof item === 'string')[0]);
// // }

// //STEP 14

// // const employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];

// // const showEmployee = (employees) => {
// //   employees.forEach((employee) => console.log(employee));
// // };

// // showEmployee(employees);

// //STEP 15

// let testData = [58, '', 'abcd', true, null, false, 0];

// const filterValues = (values) => {
//   return values.filter((value) => value);
// };

// console.log(filterValues(testData));

// //STEP 16

// testData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const getRandomItem = (values) => {
//   const index = Math.floor(Math.random() * values.length);
//   return values[index];
// };

// console.log(getRandomItem(testData));

// //STEP 17

// const getLargestNumber = (nums) => {
//   let largestNumber;
//   nums.forEach((num) => {
//     if (!largestNumber) {
//       largestNumber = num;
//     }

//     if (largestNumber < num) {
//       largestNumber = num;
//     }
//   });

//   return largestNumber;
// };

// console.log(getLargestNumber(testData));
