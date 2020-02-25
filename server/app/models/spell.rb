class Spell < ApplicationRecord
    has_many :character_spells, dependent: :destroy
    has_many :characters, through: :characters_spells
end
