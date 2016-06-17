class CreateRecommendations < ActiveRecord::Migration
  def change
    create_table :recommendations do |t|
      t.string :name
      t.string :address
      t.string :number
      t.references :category, index: true, foreign_key: true
      t.string :image
      t.timestamps null: false
    end
  end
end
