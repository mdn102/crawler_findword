// Array object that is used for the graph
const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]

// make chart fucntion returns chart that will be displayed on the HTML page
const makeChart = (games, targetTeam) => {
  // creating parent ul that will hold the chart
  const ulParent = document.createElement('ul')
  for (const game of games) {
    // creating element for all the children elements
    const gameLi = document.createElement('li')
    // using innerHTML because adding bold tag to the output. callback function takes in warriorGames object
    gameLi.innerHTML = getScoreLine(game)
    // callback function isWinner takes in both of the parameters and assigns CSS class
    gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss')
    // appending child to parent element
    ulParent.appendChild(gameLi)
  }
  return ulParent
}

// function to see which team won the game using tetriary operator
const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam
  return target.isWinner
}

// extracting team and score information from data.js using decostructor
const getScoreLine = ({ homeTeam, awayTeam }) => {
  // deconstuction of object
  const { team: hTeam, points: hPoints } = homeTeam
  const { team: aTeam, points: aPoints } = awayTeam
  const teamNames = `${hTeam} @ ${aTeam}`

  let scoreLine

  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b> -  ${hPoints}`
  } else {
    scoreLine = `${aPoints} - <b>${hPoints}</b>`
  }
  return (`${teamNames} ${scoreLine}`)
}

const gsChart = makeChart(warriorsGames, 'Golden State')
const houstonChart = makeChart(warriorsGames, 'Houston')

const gsSection = document.querySelector('#gs')
const houstonSection = document.querySelector('#houston')

gsSection.appendChild(gsChart)
houstonSection.appendChild(houstonChart)
