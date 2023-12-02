class Animal < ApplicationRecord

    has_many :impounds
    has_one_attached :image, service: :azure
    
    validates :name, :species, :breed, :sex, :age, :color_primary, :color_secondary, presence: true
end
