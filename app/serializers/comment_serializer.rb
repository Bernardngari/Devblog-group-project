class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :blog_id, :blogger
  belongs_to :blogger
end
