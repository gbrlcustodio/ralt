class CreateRecommendationTags < ActiveRecord::Migration
  def change
    create_table :recommendation_tags do |t|
      t.references :recommendation, index: true, foreign_key: true
      t.references :tag, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
