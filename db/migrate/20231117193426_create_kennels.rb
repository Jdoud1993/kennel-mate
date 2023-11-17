class CreateKennels < ActiveRecord::Migration[7.1]
  def change
    create_table :kennels do |t|
      t.string :kennel_number
      t.string :large_small

      t.timestamps
    end
  end
end
