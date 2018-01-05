class CreateHotels < ActiveRecord::Migration[5.1]
  def change
    create_table :hotels do |t|
      t.references :user, foreign_key: true
      t.string :name
      t.json :survey

      t.timestamps
    end
  end
end
