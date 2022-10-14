class CommentsController < ApplicationController
  before_action :authorize, only: [:create]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  def index
    comments = Comment.all
    render json: comments
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment
  end
  #Tony
  #def create
  #  comment = Comment.create!(comment_params)
  #  render json: comment, status: :created
  #end
  #Bernard
  def create
    #blogger = Blogger.find(session[:blogger_id])
    blog = Blog.find(params[:id])
    #comment = blogger.comments.create!(comment_params)
    comment = Comment.create!(blog_id: blog.id, comment: params[:comment], blogger_id: session[:blogger_id])
    #comment = Comment.create!(comment_params)
    render json: comment, status: :created
  end

  def update
    comment = Comment.find(params[:id])
    comment.update!(comment_params)
    render json: comment
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: {}, status: :no_content
  end

  private
  def render_not_found_response
    render json: {error: "Comments not found"}, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end
  def comment_params
    params.permit(:comment, :blogger_id, :blog_id)
  end


end
