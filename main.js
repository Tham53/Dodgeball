//Step 1. Have an array of People.
const arrOfPeople = [
    {
        id: 2,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska"
    },
    {
        id: 3,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky"
    },
    {
        id: 4,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas"
    },
    {
        id: 5,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York"
    },
    {
        id: 6,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia"
    },
    {
        id: 7,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California"
    },
    {
        id: 8,
        name: "Walter Cole",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana"
    },
    ]

    const listOfPlayers = []
    const blueTeam = []
    const redTeam = []

//Step 2. Create a class of Player adding hasPaid, isHealthy, yearsExperience,
//canThrowBall, canDodgeBall.
    class Player {
    constructor(id, name, hasPaid, isHealthy, yearsExperience, canThrowBall, canDodgeBall, ){
        this.id = id;
        this.name = name;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall; 
    }

    //Step 3. Create classes for teams with id, name, team color and mascot.
    }
    class BlueTeammate {
    constructor(id, name, mascot,teamColor){
        this.id = id;
        this.name = name;
        this.mascot = mascot;
        this.teamColor = teamColor;
    }
    }
    class RedTeammate {
    constructor(id, name, mascot, teamColor){
        this.id = id;
        this.name = name;
        this.mascot = mascot;
        this.teamColor = teamColor;
    }
    }
//Step 4. Create button for "Make Player" that moves player to Dodgeball players list
//and adds new value of "player" while simultaneously removing from previous list. 
    const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        button.addEventListener('click', function() {
        makePlayer(person.id) 
        listElement.removeChild(li)
        } )
        li.appendChild(button)
        li.appendChild(document.createTextNode(" " + person.name + " - " + person.skillSet))
        listElement.append(li)
    })
    }

    const makePlayer = (id) => {
        let person = arrOfPeople.find(function (player) {
        return player.id === id
    });
    console.log(person)
    let index = arrOfPeople.indexOf(person);
    arrOfPeople.splice(index, 1);
    const newPlayer = new Player (person.id, person.name, true, true, true, true, 5)
    console.log(newPlayer)
    listOfPlayers.push(newPlayer)

//Step 5. Create red button for red team and blue button for blue team,
//that also removes them from listOfPlayers array.
    const listElement = document.getElementById('players')
        const li = document.createElement("li")
        redButton = document.createElement("button")
        blueButton = document.createElement("button")
        redButton.innerHTML = "Red"
        redButton.style.color = "red"
        redButton.style.backgroundColor = "red"
        blueButton.innerHTML = "Blue"
        blueButton.style.color = "blue"
        blueButton.style.backgroundColor = "blue"
        redButton.addEventListener('click', function() {
        assignRedTeam(person.id)
        listElement.removeChild(li)
        })
        blueButton.addEventListener('click', function() {
        assignBlueTeam(person.id)
        listElement.removeChild(li)
        })
        li.appendChild(redButton)
        li.appendChild(blueButton)
        li.appendChild(document.createTextNode(` ${person.name}`))
        listElement.append(li)
}; 

//Step 5. Create red button for red team and blue button for blue team,
//that also removes them from listOfPlayers array. 
const assignBlueTeam = (id) => {
    let person = listOfPlayers.find(function (player) {
    return player.id === id
    });
    let index = listOfPlayers.indexOf(person);
    listOfPlayers.splice(index, 1);
    const newBlueTeammate = new BlueTeammate (person.id, person.name, "Blue", "Blue Balls")
    blueTeam.push(newBlueTeammate)
    const listElement = document.getElementById('blue')
    const li = document.createElement("li")
    undoButton = document.createElement("button")
    undoButton.innerHTML = "Undo"
    undoButton.addEventListener('click', function() {
    undoBlue(person.id)
        listElement.removeChild(li)
    })
    li.appendChild(undoButton)
    li.appendChild(document.createTextNode(` ${person.name}, Blue Team, Blue Balls`))
    listElement.append(li)
};

//Step 6. When people are assigned they should have their team color and mascot.
const assignRedTeam = (id) => {
    let person = listOfPlayers.find(function (player) {
    return player.id === id
    });
    let index = listOfPlayers.indexOf(person);
    listOfPlayers.splice(index, 1);
    const newRedTeammate = new RedTeammate (person.id, person.name, "Red", "Red Rockets")
    redTeam.push(newRedTeammate)
    const listElement = document.getElementById('red')
    const li = document.createElement("li")
    undoButton = document.createElement("button")
    undoButton.innerHTML = "Undo"
    undoButton.addEventListener('click', function() {
        undoRed(person.id)
        listElement.removeChild(li)
    })
    li.appendChild(undoButton)
    li.appendChild(document.createTextNode(` ${person.name}, Red Team, Red Rockets`))
    listElement.append(li)
};

const undoBlue = (id) => {
    let person = blueTeam.find(function (player) {
    return player.id === id
    });
    console.log(person)
    let index = blueTeam.indexOf(person);
    blueTeam.splice(index, 1);
    const newPlayer = new Player (person.id, person.name, true, true, true, true, 5)
    listOfPlayers.push(newPlayer)
    const listElement = document.getElementById('players')
        const li = document.createElement("li")
        redButton = document.createElement("button")
        blueButton = document.createElement("button")
        redButton.innerHTML = "Red"
        redButton.style.color = "red"
        redButton.style.backgroundColor = "red"
        blueButton.innerHTML = "Blue"
        blueButton.style.color = "blue"
        blueButton.style.backgroundColor = "blue"
        redButton.addEventListener('click', function() {
    assignRedTeam(person.id)
    listElement.removeChild(li)
        })
        blueButton.addEventListener('click', function() {
        assignBlueTeam(person.id)
        listElement.removeChild(li)
        })
        li.appendChild(redButton)
        li.appendChild(blueButton)
        li.appendChild(document.createTextNode(" " + person.name))
        listElement.append(li)
}; 

    const undoRed = (id) => {
    let person = redTeam.find(function (player) {
    return player.id === id
    });
    console.log(person)
    let index = redTeam.indexOf(person);
    redTeam.splice(index, 1);
    const newPlayer = new Player (person.id, person.name, true, true, true, true, 5)
    listOfPlayers.push(newPlayer)
    const listElement = document.getElementById('players')
        const li = document.createElement("li")
        redButton = document.createElement("button")
        blueButton = document.createElement("button")
        redButton.innerHTML = "Red"
        redButton.style.color = "red"
        redButton.style.backgroundColor = "red"
        blueButton.innerHTML = "Blue"
        blueButton.style.color = "blue"
        blueButton.style.backgroundColor = "blue"
        redButton.addEventListener('click', function() {
        assignRedTeam(person.id)
        listElement.removeChild(li)
        })
        blueButton.addEventListener('click', function() {
        assignBlueTeam(person.id)
        listElement.removeChild(li)
        })
        li.appendChild(redButton)
        li.appendChild(blueButton)
        li.appendChild(document.createTextNode(" " + person.name))
        listElement.append(li)
}; 

//Step 7. 3 Unit Tests
if (typeof describe === 'function'){
    describe('RedTeammate', function(){
        it('needs id, and name', function(){
            const newRedTeammate = new RedTeammate(122, 'olGreg', 'red', 'Red Rockets');
            assert.equal(newRedTeammate.id, 122);
            assert.equal(newRedTeammate.name, 'olGreg');
        });
        });
    describe('#assignRedTeam', () => {
    it('moves from players array to Red Team', function(){
        const newRedTeammate = new RedTeammate(9, 'pikachu', 'red', 'Red Rockets');
        assert.equal(newRedTeammate.id, 9);
        assert.equal(newRedTeammate.name, 'pikachu');
        assert.equal(newRedTeammate.teamColor, 'red');
        assert.equal(newRedTeammate.mascot, 'Red Rockets');
    });
    });
    describe('#makePlayer', () => {
    it('moves someone from people array to players array', function(){
        const newPlayer = new Player(6, "FranktheTank", true, false, true, true, 2);
        assert.equal(newPlayer.name, "FranktheTank");
        assert.equal(newPlayer.yearsExperience, 1);
        assert.equal(newPlayer.canDodgeBall, true);
    });
    });
}