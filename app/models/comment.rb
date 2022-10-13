class Comment < ApplicationRecord
  # belongs_to :blogger
  # belongs_to :blog
  validates :comment, presence: true
end
