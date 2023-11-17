class Animal < ApplicationRecord

    has_many :impounds
    
    validates :name, :species, :breed, :sex, :age, :color_primary, :color_secondary, presence: true
end
