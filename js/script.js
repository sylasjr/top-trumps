// document.getElementById("demo").innerHTML = "Renato";

class Card {
    constructor(name, strength, skill, size, wisecracks, mistique, topTrump, imagePath, description) {
        this.cname = name;
        this.strength = strength;
        this.skill = skill;
        this.size = size;
        this.wisecracks = wisecracks;
        this.mistique = mistique;
        this.topTrump = topTrump;
        this.description = description;
        this.imagePath = imagePath;

    }

    show() {
        document.getElementById("cimagepath").src = this.imagePath;
        document.getElementById("cname").innerHTML = this.cname;
        document.getElementById("cintro").innerHTML = this.description;
        document.getElementById("cstrength").innerHTML = this.strength;
        document.getElementById("cskill").innerHTML = this.skill;
        document.getElementById("csize").innerHTML = this.size;
        document.getElementById("cwisecracks").innerHTML = this.wisecracks;
        document.getElementById("cmistique").innerHTML = this.mistique;
        document.getElementById("ctoptrump").innerHTML = this.topTrump;
    }

    youLost(a) {
        document.getElementById(a).style.color = "#e64545";
        document.getElementById("border-one").style.borderColor = "#e64545";
        document.getElementById("border-two").style.borderColor = "#e26565";


    }
    youWin(a) {
        document.getElementById(a).style.color = "#41a965";
        document.getElementById("border-one").style.borderColor = "#41a965";
        document.getElementById("border-two").style.borderColor = "#90d18a";
    }

    //mehods
    choiceStrength(choice) {
        document.getElementById('foo').onclick = function() {
            if (this.strength < choice) {
                console.log("You lost");
                this.youLost("cstrength-cont");
            } else {
                console.log("You won");
                this.youWin("cstrength-cont");
            }
        }
    }
    choiceSkill(choice) {
        if (this.skill < choice) {
            console.log("You lost");
            this.youLost("cskill-cont");
        } else {
            console.log("You won");
            this.youWin("cskill-cont");
        }
    }
    choiceSize(choice) {
        if (this.size < choice) {
            console.log("You lost");
            this.youLost("csize-cont");
        } else {
            console.log("You won");
            this.youWin("csize-cont");
        }
    }
    choiceWisecracks(choice) {
        if (this.wisecracks < choice) {
            console.log("You lost");
            this.youLost("cwisecracks-cont");
        } else {
            console.log("You won");
            this.youWin("cwisecracks-cont");
        }
    }
    choiceMistique(choice) {
        if (this.mistique < choice) {
            console.log("You lost");
            this.youLost("cmistique-cont");
        } else {
            console.log("You won");
            this.youWin("cmistique-cont");
        }
    }
    choiceTopTrump(choice) {
        if (this.topTrump < choice) {
            console.log("You lost");
            this.youLost("ctoptrump-cont");
        } else {
            console.log("You won");
            this.youWin("ctoptrump-cont");
        }
    }
    choice() {}

}

// class Battle extends Card {
//     constructor(skill, choice) {
//         super(skill);
//         this.choice = choice;
//     }
//     fight(choice) {
//         console.log(choice);
//         console.log(skill);


//         // if (this.skill < choice) {
//         //     console.log("You lost");

//         // } else {
//         //     console.log("You won");

//         // }
//     }

// }

let drax = new Card("Drax", 25, 3, 12, 2, 30, 8, "images/drax.jpg", "Real estate agent Arthur Douglas, his wife Yvette, and daughter Heather, were driving across the Mojave Desert from Las Vegas to Los Angeles when a spaceship carrying the mad Titan named Thanos passed overhead on a surveillance mission to Earth.");
let warMachine = new Card("War Machine", 29, 8, 13, 1, 25, 7, "images/war-machine.jpg", "A skilled military pilot, Jim Rhodes is one of the few people Tony Stark trusts to use the technology of the Iron Man Armor, flying high in his own suit as War Machine. ");
let antMan = new Card("Ant-Man", 10, 10, 1, 1, 25, 7, "images/ant-man.jpg", "Dr. Henry Hank Pym, Ph.D, was an American entomologist, biochemist, roboticist, engineer and physicist and Scientific Adventurer.");
let lizard = new Card("Lizard", 24, 6, 11, 1, 25, 7, "images/lizard.jpg", "Dr. Curtis Curt Connors was born and raised in Coral Gables, Florida. He attended Medical school graduating with twin doctorates in biology and biochemistry. It was in college he met Martha and together they had a son Billy.");
let captainAmerica = new Card("Captain America", 28, 10, 10, 2, 25, 9, "images/captain-america.jpg", "During the dark days of the early 1940s, a covert U.S. Military experiment turned Steve Rogers into America's first Super-Soldier, Captain America.");

lizard.show();
// captainAmerica.choiceSize(13);



// // antMan.fight(11);
// if (antMan.skill < 11) {
//     document.getElementById("cname").innerHTML = "Loser";
// }