class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :race, :class_1, :class_2, :class_3, :class_1_level, :class_2_level, :class_3_level, 
             :photo_url, :created_at, :updated_at, :hp, :alignment, 
             :str, :dex, :con, :int, :wis, :cha, :armor_class, :speed,
             :spells, :proficiency

  belongs_to :user, key: :player
  has_many :spells, through: :character_spells

  class SpellSerializer < ActiveModel::Serializer
    attributes :id, :slug, :name, :level_int, :desc, :higher_level, :range, :components, 
               :material, :ritual, :duration, :concentration, :casting_time, :school, 
               :created_at, :updated_at
  end

end
