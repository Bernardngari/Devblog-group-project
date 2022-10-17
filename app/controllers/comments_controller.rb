class CommentsController < ApplicationController
  before_action :authorize, only: [:create]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  def index
    comments = Comment.all
    render json: comments.order(created_at: :desc), status: :ok
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment, status: :ok
  end
  
  def create
    comment = Comment.create!(blog_id: params[:blog_id], comment: params[:comment], blogger_id: session[:blogger_id])
      render json: comment, status: :created
  end

  def update
    comment = Comment.find(params[:id])
    comment.update!(comment_params)
    render json: comment, status: :ok
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    head :no_content
  end

  private
  def render_not_found_response
    render json: {error: "Comments not found"}, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end
  def comment_params
    params.permit(:comment, :blogger_id, :blog_id)
  end


end
