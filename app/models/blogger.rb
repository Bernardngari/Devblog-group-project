class Blogger < ApplicationRecord
  has_many :blogs
  has_many :comments, through: :blogs
  validates :email, :username, uniqueness: true, presence: true
  has_secure_password
end
