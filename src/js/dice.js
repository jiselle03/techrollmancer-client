const dice = {
  roll(sides) {
    return Math.ceil(Math.random() * sides);
  },

  rollAbility(rolls) {
    let abilityScore = 0;

    for (let i = 0; i < rolls.length; i++) {
      abilityScore += rolls[i];
    };

    abilityScore -= Math.min(...rolls);
    return abilityScore;
  },
};

export default dice;
