class ImpoundSerializer < ActiveModel::Serializer
  attributes :id, :address_found, :status

  has_one :animal
  has_one :client
  has_one :kennel
  has_one :user

end
