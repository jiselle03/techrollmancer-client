// Random Character Generator

const RACES = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
const CLASSES = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];

export class RandomCharacter {
  constructor() {
    this._charRace = RandomCharacter.getRace();
    this._charClass = RandomCharacter.getClass();
    this._roll1 = RandomCharacter.rollAbility();
    this._roll2 = RandomCharacter.rollAbility();
    this._roll3 = RandomCharacter.rollAbility();
    this._roll4 = RandomCharacter.rollAbility();
    this._roll5 = RandomCharacter.rollAbility();
    this._roll6 = RandomCharacter.rollAbility();
  };

  static rollAbility() {
    const rolls = [];
    let abilityScore = 0;

    while (rolls.length < 4) {
      rolls.push(Math.ceil(Math.random() * 6));
    };

    for (let i = 0; i < rolls.length; i++) {
      abilityScore += rolls[i];
    };

    abilityScore -= Math.min(...rolls);
    return abilityScore;
  };

  static getRace() {
    return RACES[Math.floor(Math.random() * 9)];
  };  

  static getClass() {
    return CLASSES[Math.floor(Math.random() * 12)];
  };
    
  get charRace(){
      return this._charRace;
  };
  get charClass(){
    return this._charClass;
  };
};

export const raceBonus = {
  default: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 },
  dragonborn: { str: 2, dex: 0, con: 0, int: 0, wis: 0, cha: 1 },
  dwarf: { str: 0, dex: 0, con: 2, int: 0, wis: 0, cha: 0 },
  elf: { str: 0, dex: 2, con: 0, int: 0, wis: 0, cha: 0 },
  gnome: { str: 0, dex: 0, con: 0, int: 2, wis: 0, cha: 0 },
  halfElf: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 2 },
  halfOrc: { str: 2, dex: 0, con: 1, int: 0, wis: 0, cha: 0 },
  halfling: { str: 0, dex: 2, con: 0, int: 0, wis: 0, cha: 0 },
  human: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
  tiefling: { str: 0, dex: 0, con: 0, int: 1, wis: 0, cha: 2 }
};
