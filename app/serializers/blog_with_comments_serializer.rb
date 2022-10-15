class BlogWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  belongs_to :blogger
  has_many :comments
end
