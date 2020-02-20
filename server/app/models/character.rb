class Character < ApplicationRecord
    belongs_to :user

    has_one :proficiency, dependent: :destroy
    
    has_many :characters_spells, dependent: :destroy
    has_many :spells, through: :characters_spells

    validates :name, presence: true, uniqueness: true
    validates :race, presence: true
    validates :class_1, presence: true
    validates :class_1_level, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..20 }
    validates :class_2_level, numericality: { only_integer: true }, inclusion: { in: 0..19 }
    validates :class_3_level, numericality: { only_integer: true }, inclusion: { in: 0..18 }
    validates :str, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..20 }
    validates :dex, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..20 }
    validates :con, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..20 }
    validates :int, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..20 }
    validates :wis, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..20 }
    validates :cha, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..20 }
    validates :speed, numericality: { only_integer: true }
end