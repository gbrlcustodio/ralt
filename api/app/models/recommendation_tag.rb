class RecommendationTag < ActiveRecord::Base
  belongs_to :recommendation
  belongs_to :tag
end
