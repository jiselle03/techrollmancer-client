# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
Character.destroy_all()
User.destroy_all()

PASSWORD = "supersecret"  

super_user = User.create( 
    username: "jiselle03", 
    email: "jiselle03@techrollmancer.com", 
    password: PASSWORD,
    is_admin: true
)

Character.create(
    name: "Ja'el Willow",
    race: "Half-Elf",
    level: 10,
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

puts Cowsay.say("Generated #{User.count} users and #{Character.count} characters.", :tux)