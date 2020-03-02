class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :race, :class_1, :class_2, :class_3, :class_1_level, :class_2_level, :class_3_level, 
             :photo_url, :created_at, :updated_at, :hp, :alignment, 
             :str, :dex, :con, :int, :wis, :cha, :armor_class, :initiative, :speed,
             :spells, :proficiency, :trait

  belongs_to :user, key: :player
  has_many :spells, through: :character_spells
  has_one :proficiency
  has_one :trait

  class SpellSerializer < ActiveModel::Serializer
    attributes :id, :slug, :name, :level_int, :desc, :higher_level, :range, :components, 
               :material, :ritual, :duration, :concentration, :casting_time, :school, 
               :created_at, :updated_at
  end

  class ProficiencySerializer < ActiveModel::Serializer
    attributes :id, :str_save, :dex_save, :con_save, :int_save, :wis_save, :cha_save,
               :acrobatics, :animal_handling, :arcana, :athletics, :deception,
               :history, :insight, :intimidation, :investigation, :medicine, :nature,
               :performance, :persuasion, :perception, :religion, :sleight_of_hand, 
               :stealth, :survival, :character_id
  end

  class TraitSerializer < ActiveModel::Serializer
    attributes :id, :description, :backstory, :personality_traits, :ideals, :bonds, :flaws, 
               :background_type, :background_desc, :character_id
  end

end
