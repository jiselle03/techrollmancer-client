class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :date
      t.string :time
      t.string :name
      t.text :notes
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
