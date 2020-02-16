// Random Character Generator

const RACES = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-elf', 'Halfling', 'Half-orc', 'Human', 'Tiefling'];
const RANDOM_RACE = Math.floor(Math.random() * 9);

const CLASSES = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
const RANDOM_CLASS = Math.floor(Math.random() * 12);

export class RandomCharacter {
    constructor(charName, charRace, charClass) {
      this._charName = charName || "Unnamed Character";
      this._charRace = charRace || RACES[RANDOM_RACE];
      this._charClass = charClass || CLASSES[RANDOM_CLASS];
      this._strength = RandomCharacter.rollAbility();
      this._dexterity = RandomCharacter.rollAbility();
      this._constitution = RandomCharacter.rollAbility();
      this._intelligence = RandomCharacter.rollAbility();
      this._wisdom = RandomCharacter.rollAbility();
      this._charisma = RandomCharacter.rollAbility();
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
    
    get charName() {
        return this._charName;
    };
    get charRace(){
        return this._charRace;
    };
    get charClass(){
      return this._charClass;
    };
  
    get strength() {
      return this._strength;
    };
    get dexterity() {
      return this._dexterity;
    };
    get constitution() {
      return this._constitution;
    };
    get intelligence() {
      return this._intelligence;
    };
    get wisdom() {
      return this._wisdom;
    };
    get charisma() {
      return this._charisma;
    };
  
    get hitpoints() {
      return 10 + Math.floor((this._constitution - 10) / 2);
    };
};
