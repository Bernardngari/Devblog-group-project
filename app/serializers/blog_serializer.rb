class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at
  belongs_to :blogger
  has_many :comments
end
