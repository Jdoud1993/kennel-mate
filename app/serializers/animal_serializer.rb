class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :species, :sex, :age, :color_primary, :color_secondary, :image

end
