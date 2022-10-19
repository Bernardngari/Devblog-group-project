class BloggersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def show
    blogger = find_blogger
    render json: blogger, status: :ok
  end

  def me
    blogger = Blogger.find-by(id: session[:blogger_id])
    render json: blogger, serializer: MeSerializer, status: :ok
  end
  

  def create
      blogger = Blogger.create!(blogger_params)
      render json: blogger, status: :created
  end
  
  def destroy
    blogger = find_blogger
    blogger.destroy
    head :no_content
  end
    
    private
      def blogger_params
        params.permit(:username, :email, :password)
      end
      
      def render_not_found_response
        return render json: {error: "Blogger not found"}, status: :not_found
      end

      def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
      end

      def find_blogger
        Blogger.find(params[:id])
      end
end
