// document.getElementById("demo").innerHTML = "Renato";





class Card {
    //building the constructor
    constructor(characterName, type, intro, strength, skill, size, mistique, imagePath, primaryColor, secondaryColor) {
            this.characterName = characterName;
            this.type = type;
            this.intro = intro;
            this.strength = strength;
            this.skill = skill;
            this.size = size;
            this.mistique = mistique;
            this.imagePath = imagePath;
            this.primaryColor = primaryColor;
            this.secondaryColor = secondaryColor;

            //creating event listeners
            let battleButton = document.getElementById("battle-btn");


            function selectAction(mainAction, otherActionOne, otherActionTwo, otherActionThree) {

                document.getElementById(mainAction).addEventListener("click", function() {

                    let animationType = "tada";
                    let mainActionButton = document.getElementById(this.id);
                    let otherActionOneButton = document.getElementById(otherActionOne);
                    let otherActionTwoButton = document.getElementById(otherActionTwo);
                    let otherActionThreeButton = document.getElementById(otherActionThree);

                    mainActionButton.classList.remove("other-selections-disabled", "active");
                    otherActionOneButton.classList.remove("other-selections-disabled", "active", "animate__animated", "animate__" + animationType);
                    otherActionTwoButton.classList.remove("other-selections-disabled", "active", "animate__animated", "animate__" + animationType);
                    otherActionThreeButton.classList.remove("other-selections-disabled", "active", "animate__animated", "animate__" + animationType);

                    battleButton.classList.add("active");
                    mainActionButton.classList.add("selection-active", "animate__animated", "animate__" + animationType);
                    mainActionButton.classList.add("active");

                    otherActionOneButton.classList.add("other-selections-disabled");
                    otherActionTwoButton.classList.add("other-selections-disabled");
                    otherActionThreeButton.classList.add("other-selections-disabled");

                });
            }

            selectAction("strength-btn", "skill-btn", "size-btn", "mistique-btn");
            selectAction("skill-btn", "size-btn", "mistique-btn", "strength-btn");
            selectAction("size-btn", "mistique-btn", "strength-btn", "skill-btn");
            selectAction("mistique-btn", "strength-btn", "skill-btn", "size-btn");



        }
        //showing items
    show() {
        document.getElementById("characterName").innerHTML = this.characterName;
        document.getElementById("type").innerHTML = this.type;
        document.getElementById("intro").innerHTML = this.intro;
        document.getElementById("strength").innerHTML = this.strength;
        document.getElementById("skill").innerHTML = this.skill;
        document.getElementById("size").innerHTML = this.size;
        document.getElementById("mistique").innerHTML = this.mistique;
        document.getElementById("image-container").style.backgroundImage = "url(images/" + this.imagePath + ")";
        document.documentElement.style.setProperty("--primary-color", this.primaryColor);
        document.documentElement.style.setProperty("--secondary-color", this.secondaryColor);
    }

    battle(enemy) {


        let battleButton = document.getElementById("battle-btn");
        battleButton.addEventListener("click", function() {
            console.log("clicked");
            console.log("Character is " + enemy.characterName);
            console.log("strength is " + enemy.strength);
            console.log("Skill is " + enemy.skill);
            console.log("Size is " + enemy.size);
            console.log("Mistique is " + enemy.mistique);

            document.getElementById('enemy-photo').style.backgroundImage = "url(images/" + enemy.imagePath + ")";
            // document.getElementById('enemy-name').innerHTML = enemy.characterName;
            document.getElementById('enemy-photo').classList.add("animate__animated", "animate__flip");
            document.getElementById('print-message').classList.add("animate__animated", "animate__flash");


            function moveEnemy(enemy) {
                heroes.push(enemy);
            };

            function removeHero() {
                heroes.shift();
            };

            function removeCSS() {
                document.getElementById('enemy-photo').classList.remove("animate__animated", "animate__flip");
                document.getElementById('print-message').classList.remove("animate__animated", "animate__flash");

            };

            const myTimeout = setTimeout(removeCSS, 1000);



            let actionValue = document.querySelector(".active>.value").innerText;
            let skillSelected = document.querySelector(".active>.desc").innerText.toLowerCase();

            console.log("--- My " + skillSelected + " selected is " + actionValue);
            if (skillSelected == "strength") {
                if (enemy.strength > actionValue) {
                    document.getElementById("print-message").innerHTML = "You lost";
                    removeHero();

                } else if (enemy.strength == actionValue) {
                    document.getElementById("print-message").innerHTML = "It's a tie";
                } else {
                    document.getElementById("print-message").innerHTML = "You won";
                    moveEnemy(enemy);
                }
            }
            if (skillSelected == "skill") {
                if (enemy.skill > actionValue) {
                    document.getElementById("print-message").innerHTML = "You lost";
                    removeHero();

                } else if (enemy.skill == actionValue) {
                    document.getElementById("print-message").innerHTML = "It's a tie";
                } else {
                    document.getElementById("print-message").innerHTML = "You won";
                    moveEnemy(enemy);
                }
            }

            if (skillSelected == "size") {
                if (enemy.size > actionValue) {
                    document.getElementById("print-message").innerHTML = "You lost";
                    removeHero();

                } else if (enemy.size == actionValue) {
                    document.getElementById("print-message").innerHTML = "It's a tie";
                } else {
                    document.getElementById("print-message").innerHTML = "You won";
                    moveEnemy(enemy);

                }
            }

            if (skillSelected == "mistique") {
                if (enemy.mistique > actionValue) {
                    document.getElementById("print-message").innerHTML = "You lost";
                    removeHero();

                } else if (enemy.mistique == actionValue) {
                    document.getElementById("print-message").innerHTML = "It's a tie";
                } else {
                    document.getElementById("print-message").innerHTML = "You won";
                    moveEnemy(enemy);
                }
            }


            if (antMan.strength < winterSoldier.strength) {

            }
            console.table(heroes);

            // document.getElementById("print-message").innerHTML = "Array Length is " + heroes.length;

        });

    }





    // displayMessage() {
    //     document.getElementById("print-message").innerHTML = "Clicked"
    // }

    // chooseOption() {
    //     if () {

    //     }
    // }
}


let drax = new Card("Drax", "Hero", "Arthur Douglas, his wife Yvette, and daughter Heather, were driving across the Mojave Desertwhen a spaceship carrying the mad Titan named Thanos passed overhead on a mission to Earth", 25, 3, 12, 30, "drax.jpg", "#313C23", "#5F2313");
let spiderman = new Card("Spiderman", "Hero", "Peter Benjamin Parker (of Earth-616), also known by his superhero alter-ego Spider-Man, is a superhero who has appeared in all forms of Spider-Man media", 24, 10, 7, 50, "spiderman.jpg", "#143369", "#9A062B");
let captainAmerica = new Card("Captain America", "Hero", "During the dark days of the early 1940s, a covert U.S. Military experiment turned Steve Rogers into America's first Super-Soldier, Captain America", 28, 10, 10, 25, "captain-america.jpg", "#22282C", "#923C25");
let blackPanther = new Card("Black Panther", "Hero", "As the king of the African nation of Wakanda, King TChalla gards his people as the latest in a legacy line of Black Panther warriors and protectors", 28, 10, 9, 70, "black-panther.jpg", "#1D1836", "#403162");
let lizard = new Card("Lizard", "Villain", "Curt Connors was a gifted surgeon who went into a war to help his country. He performed  surgeries on wounded GIs, but his arm was injured in a blast and had to be amputated", 24, 6, 11, 25, "lizard.jpg", "#29360F", "#4A2A3F");
let hulk = new Card("Hulk", "Hero", "Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, brutal and green rage machine called the Hulk", 50, 2, 15, 20, "hulk.jpg", "#29360F", "#4A2A3F");
let antMan = new Card("Ant-man", "Hero", "Dr. Hank Pym, the creator of the wondrous Pym Particles, has been a crimefighting hero, brilliant inventor, scientist, and fearless explorer", 10, 10, 1, 25, "ant-man.jpg", "#1D2530", "#69242E");
let winterSoldier = new Card("Winter Soldier", "Hero", "A brave soldier, Barnes fights, but eventually literally falls in battle.Iit is the evil Arnim Zola who recovers him into a highly-trained, but mindless assassin called the Winter Soldier", 18, 5, 8, 30, "winter-soldier.jpg", "#0F1911", "#5A231B");
let ironMan = new Card("Iron Man", "Hero", "Tony suffers a severe chest injury during  kidnapping. When captors force him to build a weapon, he instead creates a suit of armor to save his life and escape captivity", 30, 9, 10, 20, "iron-man.jpg", "#240303", "#694719");



let heroes = [blackPanther, drax, captainAmerica, spiderman, hulk, antMan, winterSoldier, ironMan];
let villains = [lizard];
let antiHeroes;

// antiHeroes.push(winterSoldier, drax);
// heroes.pop();

// heroes.push(lizard);
antMan.show();
antMan.battle(winterSoldier);

// document.getElementById("print-message").innerHTML = antiHeroes.length;








// let image = "black-panther.jpg";
// document.documentElement.style.setProperty("--primary-color", "green");
// document.getElementById("image-container").style.backgroundImage = "url(images/" + image + ")";




// class Card {
//     constructor(name, strength, skill, size, wisecracks, mistique, topTrump, imagePath, description) {
//         this.cname = name;
//         this.strength = strength;
//         this.skill = skill;
//         this.size = size;
//         this.wisecracks = wisecracks;
//         this.mistique = mistique;
//         this.topTrump = topTrump;
//         this.description = description;
//         this.imagePath = imagePath;

//     }

//     show() {
//         document.getElementById("cimagepath").src = this.imagePath;
//         document.getElementById("cname").innerHTML = this.cname;
//         document.getElementById("cintro").innerHTML = this.description;
//         document.getElementById("cstrength").innerHTML = this.strength;
//         document.getElementById("cskill").innerHTML = this.skill;
//         document.getElementById("csize").innerHTML = this.size;
//         document.getElementById("cwisecracks").innerHTML = this.wisecracks;
//         document.getElementById("cmistique").innerHTML = this.mistique;
//         document.getElementById("ctoptrump").innerHTML = this.topTrump;
//     }

//     youLost(a) {
//         document.getElementById(a).style.color = "#e64545";
//         document.getElementById("border-one").style.borderColor = "#e64545";
//         document.getElementById("border-two").style.borderColor = "#e26565";


//     }
//     youWin(a) {
//         document.getElementById(a).style.color = "#41a965";
//         document.getElementById("border-one").style.borderColor = "#41a965";
//         document.getElementById("border-two").style.borderColor = "#90d18a";
//     }

//     //mehods
//     choiceStrength(choice) {
//         document.getElementById('foo').onclick = function() {
//             if (this.strength < choice) {
//                 console.log("You lost");
//                 this.youLost("cstrength-cont");
//             } else {
//                 console.log("You won");
//                 this.youWin("cstrength-cont");
//             }
//         }
//     }
//     choiceSkill(choice) {
//         if (this.skill < choice) {
//             console.log("You lost");
//             this.youLost("cskill-cont");
//         } else {
//             console.log("You won");
//             this.youWin("cskill-cont");
//         }
//     }
//     choiceSize(choice) {
//         if (this.size < choice) {
//             console.log("You lost");
//             this.youLost("csize-cont");
//         } else {
//             console.log("You won");
//             this.youWin("csize-cont");
//         }
//     }
//     choiceWisecracks(choice) {
//         if (this.wisecracks < choice) {
//             console.log("You lost");
//             this.youLost("cwisecracks-cont");
//         } else {
//             console.log("You won");
//             this.youWin("cwisecracks-cont");
//         }
//     }
//     choiceMistique(choice) {
//         if (this.mistique < choice) {
//             console.log("You lost");
//             this.youLost("cmistique-cont");
//         } else {
//             console.log("You won");
//             this.youWin("cmistique-cont");
//         }
//     }
//     choiceTopTrump(choice) {
//         if (this.topTrump < choice) {
//             console.log("You lost");
//             this.youLost("ctoptrump-cont");
//         } else {
//             console.log("You won");
//             this.youWin("ctoptrump-cont");
//         }
//     }
//     choice() {}

// }

// // class Battle extends Card {
// //     constructor(skill, choice) {
// //         super(skill);
// //         this.choice = choice;
// //     }
// //     fight(choice) {
// //         console.log(choice);
// //         console.log(skill);


// //         // if (this.skill < choice) {
// //         //     console.log("You lost");

// //         // } else {
// //         //     console.log("You won");

// //         // }
// //     }

// // }

// let drax = new Card("Drax", 25, 3, 12, 2, 30, 8, "images/drax.jpg", "Real estate agent Arthur Douglas, his wife Yvette, and daughter Heather, were driving across the Mojave Desert from Las Vegas to Los Angeles when a spaceship carrying the mad Titan named Thanos passed overhead on a surveillance mission to Earth.");
// let warMachine = new Card("War Machine", 29, 8, 13, 1, 25, 7, "images/war-machine.jpg", "A skilled military pilot, Jim Rhodes is one of the few people Tony Stark trusts to use the technology of the Iron Man Armor, flying high in his own suit as War Machine. ");
// let antMan = new Card("Ant-Man", 10, 10, 1, 1, 25, 7, "images/ant-man.jpg", "Dr. Henry Hank Pym, Ph.D, was an American entomologist, biochemist, roboticist, engineer and physicist and Scientific Adventurer.");
// let lizard = new Card("Lizard", 24, 6, 11, 1, 25, 7, "images/lizard.jpg", "Dr. Curtis Curt Connors was born and raised in Coral Gables, Florida. He attended Medical school graduating with twin doctorates in biology and biochemistry. It was in college he met Martha and together they had a son Billy.");
// let captainAmerica = new Card("Captain America", 28, 10, 10, 2, 25, 9, "images/captain-america.jpg", "During the dark days of the early 1940s, a covert U.S. Military experiment turned Steve Rogers into America's first Super-Soldier, Captain America.");

// lizard.show();
// // captainAmerica.choiceSize(13);



// // // antMan.fight(11);
// // if (antMan.skill < 11) {
// //     document.getElementById("cname").innerHTML = "Loser";
// // }