class CreateProficiencies < ActiveRecord::Migration[6.0]
  def change
    create_table :proficiencies do |t|
      t.boolean :str_save, default: false
      t.boolean :dex_save, default: false
      t.boolean :con_save, default: false
      t.boolean :int_save, default: false
      t.boolean :wis_save, default: false
      t.boolean :cha_save, default: false
      t.boolean :acrobatics, default: false
      t.boolean :animal_handling, default: false
      t.boolean :arcana, default: false
      t.boolean :athletics, default: false
      t.boolean :deception, default: false
      t.boolean :history, default: false
      t.boolean :insight, default: false
      t.boolean :intimidation, default: false
      t.boolean :investigation, default: false
      t.boolean :medicine, default: false
      t.boolean :nature, default: false
      t.boolean :performance, default: false
      t.boolean :persuasion, default: false
      t.boolean :perception, default: false
      t.boolean :religion, default: false
      t.boolean :sleight_of_hand, default: false
      t.boolean :stealth, default: false
      t.boolean :survival, default: false
      t.references :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
