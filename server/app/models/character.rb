class Character < ApplicationRecord
    belongs_to :user

    has_one :proficiency, dependent: :destroy
    has_one :trait, dependent: :destroy
    has_many :character_spells, dependent: :destroy
    has_many :spells, through: :character_spells

    validates :name, presence: true, uniqueness: true
    validates :race, :class_1, presence: true
    validates :class_1_level, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..20 }
    validates :class_2_level, numericality: { only_integer: true }, inclusion: { in: 0..19 }, allow_blank: true
    validates :class_3_level, numericality: { only_integer: true }, inclusion: { in: 0..18 }, allow_blank: true
    validates :str, :dex, :con, :int, :wis, :cha, presence: true, numericality: { only_integer: true }, inclusion: { in: 1..20 }
    validates :speed, :armor_class, :initiative, numericality: { only_integer: true }, allow_blank: true

    before_save :titleize_name
    before_save :titleize_gender

    after_create do
        Proficiency.create(
            character_id: self.id
        )
        Trait.create(
            character_id: self.id
        )
    end

    private

    def titleize_name
        self.name = self.name.titleize
    end

    def titleize_gender
        self.gender = self.gender.titleize
    end
end