class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :blog_id, :blogger_id
  # belongs_to :blogger
end
