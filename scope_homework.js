Episode 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

/* Episode 1 Comments
console.log output: "The murderer is Miss Scarlet."
The declareMurderer function is an anonymous one, everything is ordered correctly (no hoisting), and the const variables are available throughout the code. */

Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

/* Episode 2 Comments
console.log output: "The murderer is Professor Plum."
The changeMurderer function attempts to change this output to "Mrs. Peacock", however as the murderer variable is declared as a const it cannot be changed. The only way for this to change would be if murderer was an object and the changeMurderer object altered the property in that object, or spliced an array. */

Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

/* Episode 3 Comments
console.log output: "First Verdict: The murderer is Mrs. Peacock."
console.log output: "Second Verdict: The murderer is Professor Plum."
The first output calls the declareMurderer function, wherein the murderer variable is a let. This means that the value of this variable is not accessible outside of that function. The second output returns the murderer variable but, as we have no access to the one with the value Mrs. Peacock, the only one available is Professor Plum. */

Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

/* Episode 4 Comments
console.log output: "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard."
console.log output: "Suspect three is Mrs. Peacock."
in this case, the suspectThree variable is being changed to Colonel Mustard, but ONLY inside the declareAllSuspects function, as it is a let and only accessible/changeable within the function. Since our second change.log is simply referring to a variable called suspectThree, and we have no access to the one within declareAllSuspects, Mrs. Peacock is returned when suspectThree is called. */

Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

/* Episode 5 Comments
console.log output: "The weapon is the Revolver."
Usually declaring a variable as const prevents changes to the value, however in this case, while all variables are defined as constants, this does not prevent object properties from being amended, which is actually the first line run in the changeWeapon function. It overwrites the "Candle Stick" value in the weapon key with "Revolver", which is then assigned to the verdict variable. */

Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
/* Episode 6 Comments
console.log output: "The murderer is Mr. Green."
murderer variable is defined as let, which allows it to be changed.
the first time it's changed is by the plotTwist function, changing murderer to "Mrs White". Then, the changeMurderer function changes it to Mr Green, which is the final alteration and therefore the one returned.*/

Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
/* Episode 7 Comments
   */

Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
/* Episode 8 Comments
   */

Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
/* Episode 9 Comments
   */
