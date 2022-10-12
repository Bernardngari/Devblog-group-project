class BlogsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    def index
        blogs = Blog.all
        render json: blogs
    end

    def show
        blogs = find_blog
        render json: blogs
    end

    private
    def find_blog
        Blog.find(params[:id])
    end
    def render_not_found
        render json: {"Error": "Blog not found"}, status: :not_found
    end
end
