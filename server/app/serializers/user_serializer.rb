class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :created_at, :updated_at

  has_many :games
  has_many :characters

  class GameSerializer < ActiveModel::Serializer
    attributes :id, :date, :time, :name, :notes, :created_at, :updated_at
  end
end
