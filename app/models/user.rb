class User < ApplicationRecord

    has_secure_password

    has_many :impounds
    has_many :animals, through: :impounds
    has_many :clients. through: :impounds

    validates :user_name, presence:true, uniqueness: true
    validates :password, length: {in: 6..20}
    
end
