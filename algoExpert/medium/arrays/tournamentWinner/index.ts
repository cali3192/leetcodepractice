/*

questions:
1. what happens in the case of a tie?
2. how to handle empty arrays?

*/

export function tournamentWinner(competitions: string[][], results: number[]) {
  // Write your code here.

  // define the teams object where we will be adding teams and corresponding scores
  const teamScores: { [key: string]: number } = {};

  // track the "team in the lead"
  let winner = { score: 0, team: "" };

  // loop through to populate teamScores
  for (let i = 0; i < competitions.length; i++) {
    const [home, away] = competitions[i];

    // get current winner
    const currWinner = results[i] === 1 ? home : away;

    // update the score for the current winner in the team scores object
    teamScores[currWinner] = (teamScores[home] || 0) + 3;

    // if the currWinners tournament score is greater than the current winner score
    if (teamScores[currWinner] > winner.score) {
      // update the winner object
      winner = {
        score: teamScores[currWinner],
        team: currWinner,
      };
    }
  }

  // return the tournament winner
  return winner.team;
}
