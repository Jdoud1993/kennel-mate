class RemoveImageFromAnimals < ActiveRecord::Migration[7.1]
  def change
    remove_column :animals, :image, :string
  end
end
