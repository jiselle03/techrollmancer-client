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
        level_int: spell["level_int"],
        school: spell["school"]
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
    cha:14,
    armor_class: 17,
    speed: 45,
    user_id: 1
)

if c.valid?
    Proficiency.create(
        str_save: true,
        dex_save: true,
        athletics: true,
        deception: true,
        history: true,
        medicine: true,
        religion: true,
        stealth: true,
        character_id: 1
    )
end

puts Cowsay.say("Generated #{Spell.count} spells.", :dragon)
puts Cowsay.say("Generated #{User.count} users.", :tux)
puts Cowsay.say("Generated #{Character.count} characters.", :frogs)
