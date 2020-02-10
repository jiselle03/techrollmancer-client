FactoryBot.define do
  factory :character do
    name { "MyString" }
    race { "MyString" }
    class_1 { "MyString" }
    level { 1 }
    str { 8 }
    dex { 8 }
    con { 8 }
    int { 8 }
    wis { 8 }
    cha { 8 }
    speed { 30 }
    alignment { "MyString" }
    photo_url { "MyText" }
    user { nil }
  end
end
