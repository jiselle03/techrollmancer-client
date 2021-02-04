# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_02_014021) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "character_spells", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "spell_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_character_spells_on_character_id"
    t.index ["spell_id"], name: "index_character_spells_on_spell_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "gender"
    t.string "race"
    t.string "class_1"
    t.string "class_2"
    t.string "class_3"
    t.integer "class_1_level", default: 1
    t.integer "class_2_level", default: 0
    t.integer "class_3_level", default: 0
    t.integer "hp", default: 0
    t.string "alignment"
    t.text "photo_url"
    t.integer "str", default: 8
    t.integer "dex", default: 8
    t.integer "con", default: 8
    t.integer "int", default: 8
    t.integer "wis", default: 8
    t.integer "cha", default: 8
    t.integer "armor_class", default: 0
    t.integer "initiative", default: 0
    t.integer "speed", default: 0
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "date"
    t.string "time"
    t.string "name"
    t.text "notes"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_games_on_user_id"
  end

  create_table "proficiencies", force: :cascade do |t|
    t.boolean "str_save", default: false
    t.boolean "dex_save", default: false
    t.boolean "con_save", default: false
    t.boolean "int_save", default: false
    t.boolean "wis_save", default: false
    t.boolean "cha_save", default: false
    t.boolean "acrobatics", default: false
    t.boolean "animal_handling", default: false
    t.boolean "arcana", default: false
    t.boolean "athletics", default: false
    t.boolean "deception", default: false
    t.boolean "history", default: false
    t.boolean "insight", default: false
    t.boolean "intimidation", default: false
    t.boolean "investigation", default: false
    t.boolean "medicine", default: false
    t.boolean "nature", default: false
    t.boolean "performance", default: false
    t.boolean "persuasion", default: false
    t.boolean "perception", default: false
    t.boolean "religion", default: false
    t.boolean "sleight_of_hand", default: false
    t.boolean "stealth", default: false
    t.boolean "survival", default: false
    t.bigint "character_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_proficiencies_on_character_id"
  end

  create_table "spells", force: :cascade do |t|
    t.string "slug"
    t.string "name"
    t.text "desc"
    t.text "higher_level"
    t.string "range"
    t.string "components"
    t.string "material"
    t.string "ritual"
    t.string "duration"
    t.string "concentration"
    t.string "casting_time"
    t.string "level"
    t.integer "level_int"
    t.string "school"
    t.string "dnd_class"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "traits", force: :cascade do |t|
    t.text "description"
    t.text "backstory"
    t.text "personality_traits"
    t.text "ideals"
    t.text "bonds"
    t.text "flaws"
    t.string "background_type"
    t.text "background_desc"
    t.bigint "character_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_traits_on_character_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.boolean "is_admin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "character_spells", "characters"
  add_foreign_key "character_spells", "spells"
  add_foreign_key "characters", "users"
  add_foreign_key "games", "users"
  add_foreign_key "proficiencies", "characters"
  add_foreign_key "traits", "characters"
end
