class CreateClients < ActiveRecord::Migration[7.1]
  def change
    create_table :clients do |t|
      t.string :name_first
      t.string :name_last
      t.string :phone_number
      t.string :address
      t.string :email

      t.timestamps
    end
  end
end
