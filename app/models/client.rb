class Client < ApplicationRecord

    has_many :impounds
    has_many :animals, through: :impounds

    validates :name_first, :name_last, :phone_number, :address, :email, presence: true
    
end
