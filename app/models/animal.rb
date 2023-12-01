class Animal < ApplicationRecord

    has_many :impounds
    has_one_attached :image, dependent: :destroy
    
    validates :name, :species, :breed, :sex, :age, :color_primary, :color_secondary, presence: true
end
