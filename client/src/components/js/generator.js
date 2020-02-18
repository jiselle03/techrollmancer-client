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
  
    get roll1() {
      return this._roll1;
    };
    get roll2() {
      return this._roll2;
    };
    get roll3() {
      return this._roll3;
    };
    get roll4() {
      return this._roll4;
    };
    get roll5() {
      return this._roll5;
    };
    get roll6() {
      return this._roll6;
    };
};
