class User < ApplicationRecord
    has_many :characters, dependent: :destroy
    has_many :games, dependent: :destroy

    validates :username, presence: true, uniqueness: true
    # Add format validation for username
    
    validates :email, presence: true, uniqueness: true,
    format: /\A([\w+\-]\.?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    has_secure_password

    before_save :downcase_username

    private
    
    def downcase_username
        self.username.downcase!
    end
end
