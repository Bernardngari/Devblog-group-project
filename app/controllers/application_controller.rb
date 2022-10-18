class ApplicationController < ActionController::Base
  include ActionController::Cookies
  
  def authorize
    return render json: {message: "You must log in to access this functionality"} , status: :unauthorized unless session.include? :blogger_id
  end
end
