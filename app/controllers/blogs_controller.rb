class BlogsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid_data
protect_from_forgery


    def index
        blogs = Blog.all
        render json: blogs, status: :ok
    end

    def show
        blogs = find_blog
        render json: blogs
    end

    def create
        blogs = Blog.create!(blogs_params)
        render json: blogs, status: :created
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
