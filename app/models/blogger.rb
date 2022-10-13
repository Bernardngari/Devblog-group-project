class Blogger < ApplicationRecord
  has_many :blogs
  has_many :comments, through: :blogs
  has_secure_password
end
