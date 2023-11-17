class CreateAnimals < ActiveRecord::Migration[7.1]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :species
      t.string :breed
      t.string :sex
      t.string :age
      t.string :color_primary
      t.string :color_secondary
      t.string :image

      t.timestamps
    end
  end
end
