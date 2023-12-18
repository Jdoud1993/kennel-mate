class KennelSerializer < ActiveModel::Serializer
  attributes :id, :kennel_number, :large_small

  has_many :animals, through: :impounds

end
