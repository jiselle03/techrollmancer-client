FactoryBot.define do
  factory :proficiency do
    str_save { false }
    dex_save { false }
    con_save { false }
    int_save { false }
    wis_save { false }
    cha_save { false }
    acrobatics { false }
    animal_handling { false }
    arcana { false }
    athletics { false }
    deception { false }
    history { false }
    insight { false }
    intimidation { false }
    investigation { false }
    medicine { false }
    nature { false }
    perception { false }
    persuasion { false }
    religion { false }
    sleight_of_hand { false }
    stealth { false }
    survival { false }
    character { nil }
  end
end
