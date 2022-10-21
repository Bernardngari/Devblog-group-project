class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  def authorize
    return render json: {message: "You must log in to access this functionality"} , status: :unauthorized unless session.include? :blogger_id
  end

  def logged_in?
    if session[:blogger_id]
      true
    else
      false
    end
  end
end
