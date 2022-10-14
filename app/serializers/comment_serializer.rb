class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :blog_id
   belongs_to :blogger
end
