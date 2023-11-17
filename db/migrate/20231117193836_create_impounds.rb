class CreateImpounds < ActiveRecord::Migration[7.1]
  def change
    create_table :impounds do |t|
      t.integer :animal_id
      t.integer :client_id
      t.integer :kennel_id
      t.string :address_found
      t.string :status
      t.integer :user_id

      t.timestamps
    end
  end
end
