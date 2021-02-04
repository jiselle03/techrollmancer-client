# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

require "json"
spell_file = File.open "./db/data_provider/spells.json"
spell_data = JSON.load spell_file

Spell.destroy_all()
User.destroy_all()
Character.destroy_all()
Proficiency.destroy_all()

spell_data.map do |spell|
    Spell.create(
        slug: spell["slug"],
        name: spell["name"],
        desc: spell["desc"],
        higher_level: spell["higher_level"],
        range: spell["range"],
        components: spell["components"],
        material: spell["material"],
        ritual: spell["ritual"],
        duration: spell["duration"],
        concentration: spell["concentration"],
        casting_time: spell["casting_time"],
        level: spell["level"],
        level_int: spell["level_int"],
        school: spell["school"],
        dnd_class: spell["dnd_class"]
    )
end

PASSWORD = "supersecret"  

super_user = User.create( 
    username: "jiselle03", 
    email: "jiselle03@techrollmancer.com", 
    password: PASSWORD,
    is_admin: true
)

c = Character.create(
    name: "Ja'el Willow",
    gender: "Male",
    race: "Half-Elf",
    class_1: "Monk",
    class_2: "Cleric",
    class_1_level: 8,
    class_2_level: 2,
    hp: 63,
    alignment: "Chaotic Neutral",
    photo_url: "https://i.pinimg.com/236x/5e/d2/9d/5ed29dfe3961e1020229d18d5d5579e3.jpg?b=t",
    str: 8,
    dex: 20,
    con: 13,
    int: 12,
    wis: 14,
    cha: 14,
    armor_class: 17,
    initiative: 5,
    speed: 45,
    user_id: 1
)

if c.valid?
    Proficiency.where(character_id: 1).update(
        str_save: true,
        dex_save: true,
        athletics: true,
        deception: true,
        history: true,
        medicine: true,
        religion: true,
        stealth: true
    )
    Trait.where(character_id: 1).update(
        personality_traits: "I am often distrustful, as I am used to being on my own and to the temporary nature of relationships. I will show loyalty and trust as long as it is reciprocated.",
        ideals: "I am loyal to people, not ideals.",
        bonds: "My allies are few and far between. I am able to cooperate with others to get the job done.",
        flaws: "I am often petty, which can lead me to make brash decisions.",
        background_type: "Hermit",
        background_desc: "You lived in seclusion—either in a sheltered community such as a monastery, or entirely alone—for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.",
    )
    CharacterSpell.create(
        character_id: 1,
        spell_id: 40
    )
    CharacterSpell.create(
        character_id: 1,
        spell_id: 72
    )
    CharacterSpell.create(
        character_id: 1,
        spell_id: 73
    )
    CharacterSpell.create(
        character_id: 1,
        spell_id: 108
    )
    CharacterSpell.create(
        character_id: 1,
        spell_id: 206
    )
    CharacterSpell.create(
        character_id: 1,
        spell_id: 215
    )
    CharacterSpell.create(
        character_id: 1,
        spell_id: 242
    )
    CharacterSpell.create(
        character_id: 1,
        spell_id: 267
    )
    CharacterSpell.create(
        character_id: 1,
        spell_id: 273
    )
end

Character.create(
    name: "Bowie Hotter",
    gender: "Male",
    race: "Dwarf",
    class_1: "Bard",
    class_1_level: 3,
    hp: 37,
    alignment: "Chaotic Good",
    photo_url: "https://cdnb.artstation.com/p/assets/images/images/004/695/341/large/simon-cardew-glamrockdwarf04.jpg?1485570493",
    str: 11,
    dex: 12,
    con: 18,
    int: 10,
    wis: 14,
    cha: 16,
    armor_class: 12,
    initiative: 1,
    speed: 25,
    user_id: 1
)

Character.create(
    name: "Jax Slyfist",
    gender: "Male",
    race: "Goliath",
    class_1: "Barbarian",
    class_1_level: 12,
    hp: 137,
    alignment: "Chaotic Neutral",
    photo_url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/108b9a3a-6d07-409b-8a0c-3857c372ae7d/d24t0tr-719aded3-154f-4ff3-b24b-c58dc47166db.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwOGI5YTNhLTZkMDctNDA5Yi04YTBjLTM4NTdjMzcyYWU3ZFwvZDI0dDB0ci03MTlhZGVkMy0xNTRmLTRmZjMtYjI0Yi1jNThkYzQ3MTY2ZGIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NbndeqfJNYOnDi0TSTQ3GQtXbs8fp1ULETwXyRXBJgM",
    str: 20,
    dex: 14,
    con: 18,
    int: 8,
    wis: 8,
    cha: 12,
    armor_class: 16,
    initiative: 2,
    speed: 40,
    user_id: 1
)

Character.create(
    name: "Trace Callan",
    gender: "Genderfluid",
    race: "Human",
    class_1: "Ranger",
    class_1_level: 3,
    class_1: "Druid",
    class_1_level: 2,
    hp: 37,
    alignment: "Chaotic Neutral",
    photo_url: "https://i.pinimg.com/originals/44/e9/08/44e908c6aa362bf0951a04e2e1391634.jpg",
    str: 8,
    dex: 16,
    con: 12,
    int: 12,
    wis: 14,
    cha: 14,
    armor_class: 15,
    initiative: 3,
    speed: 30,
    user_id: 1
)


puts Cowsay.say("Generated #{Spell.count} spells.", :dragon)
puts Cowsay.say("Generated #{User.count} users.", :tux)
puts Cowsay.say("Generated #{Character.count} characters.", :frogs)
puts Cowsay.say("Generated #{CharacterSpell.count} spells for character.", :frogs)
