var movies = [
  {
    id: 70111470,
    title: 'Die Hard',
    releaseYear: '1988',
    recentRatings: [8, 4, 6, 3, 5]
  },
  {
    id: 654356453,
    title: 'Slumdog Millionaire',
    releaseYear: '2008',
    recentRatings: [10, 9, 9, 10, 6]
  },
  {
    id: 65432445,
    title: 'Fantasia',
    releaseYear: '1940',
    recentRatings: [9, 10, 8, 7, 7]
  },
  {
    id: 68145375,
    title: 'Crash',
    releaseYear: '2005',
    recentRatings: [6, 9, 5, 8, 8]
  },
  {
    id: 75162632,
    title: 'The Godfather',
    releaseYear: '1974',
    recentRatings: [10, 9, 10, 10, 10]
  }
];

// const strNum = ['2008', '1940', '1988'];

const sortByNewest = (movieArr) => {
  const sorted = movieArr.sort((a, b) => {
    return parseFloat(b.releaseYear) - parseFloat(a.releaseYear);
  });

  return sorted.map((movie) => {
    return movie.title;
  });
};

console.time();
const test = sortByNewest(movies);
// returns ['Slumdog Millionaire', 'Crash', 'Die Hard', 'The Godfather', 'Fantasia']
console.log('test', test);
console.timeEnd();
