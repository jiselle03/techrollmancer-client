class CreateTraits < ActiveRecord::Migration[6.0]
  def change
    create_table :traits do |t|
      t.text :description
      t.text :backstory
      t.text :personality_traits
      t.text :ideals
      t.text :bonds
      t.text :flaws
      t.string :background_type
      t.text :background_desc
      t.references :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
