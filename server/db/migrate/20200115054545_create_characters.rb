class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :gender
      t.string :race
      t.string :class_1
      t.string :class_2
      t.string :class_3
      t.integer :class_1_level, default: 1
      t.integer :class_2_level, default: 0
      t.integer :class_3_level, default: 0
      t.integer :hp, default: 0
      t.string :alignment
      t.text :photo_url
      t.integer :str, default: 8
      t.integer :dex, default: 8
      t.integer :con, default: 8
      t.integer :int, default: 8
      t.integer :wis, default: 8
      t.integer :cha, default: 8
      t.integer :armor_class, default: 0
      t.integer :initiative, default: 0
      t.integer :speed, default: 0
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
