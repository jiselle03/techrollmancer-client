class Spell < ApplicationRecord
    has_many :characters_spells, dependent: :destroy
    has_many :characters, through: :characters_spells
end
