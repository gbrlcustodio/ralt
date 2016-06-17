class Recommendation < ActiveRecord::Base
  belongs_to :category
  has_many :recommendation_tag
end
