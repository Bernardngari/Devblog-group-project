class BloggerSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :blogs
end
