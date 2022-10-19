class BlogsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_data
  before_action :authorize, only: [:create]

    def index
        blogs = Blog.all
        render json: blogs.order(created_at: :desc), status: :ok
    end

    def show
        blog = find_blog
        render json: blog,serializer: BlogWithCommentsSerializer, status: :ok
    end

    def create
        blogger = Blogger.find(session[:blogger_id])
        blog = blogger.blog.create!(blogs_params)
        render json: blog, status: :created
    end

    def update
        blogs = find_blog
        blogs.update!(blogs_params)
        show
    end

    def destroy
        blogs = find_blog
        blogs.destroy
        head :no_content
    end

    private
    def find_blog
        Blog.find(params[:id])
    end

    def render_not_found
        render json: {"Error": "Blog not found"}, status: :not_found
    end

    def blogs_params
        params.permit(:title, :content, :blogger_id)
    end

    def invalid_data(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
