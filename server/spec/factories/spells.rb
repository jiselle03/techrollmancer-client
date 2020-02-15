FactoryBot.define do
  factory :spell do
    name { "MyString" }
    desc { "MyText" }
    higher_level { "MyText" }
    range { "MyString" }
    components { "MyString" }
    material { "MyString" }
    ritual { "MyString" }
    duration { "MyString" }
    concentration { "MyString" }
    casting_time { "MyString" }
    level_int { 1 }
    school { "MyString" }
    dnd_class { "MyString" }
  end
end
