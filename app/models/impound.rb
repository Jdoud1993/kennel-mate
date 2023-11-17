class Impound < ApplicationRecord

    belongs_to :user
    belongs_to :client
    belonmgs_to :kennel
    belongs_to :animal

    validates :user_id, :client_id, :kennel_id, :animal_id, :address_found, :status, presence: true
    
end
