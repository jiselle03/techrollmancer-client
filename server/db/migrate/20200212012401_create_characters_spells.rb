class CreateCharactersSpells < ActiveRecord::Migration[6.0]
  def change
    create_table :characters_spells do |t|
      t.references :character, null: false, foreign_key: true
      t.references :spell, null: false, foreign_key: true

      t.timestamps
    end
  end
end
