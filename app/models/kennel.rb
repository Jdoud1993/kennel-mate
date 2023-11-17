class Kennel < ApplicationRecord

    has_many :impounds

    validates :kennel_number, :large_small, presence: true
    validates :kennel_number, uniqueness: true
    
end
