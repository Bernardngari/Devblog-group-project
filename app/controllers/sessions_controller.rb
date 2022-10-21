class SessionsController < ApplicationController
  def create_session
    blogger = Blogger.find_by(username: params[:username])
    if blogger&.authenticate(params[:password])
      session[:blogger_id] = blogger.id 
      render json:{ body: blogger, message: "Login success"}, status: :ok
    else
      render json: {message: "Wrong credentials. Please try again"}, status: :unauthorized
    end
  end

  
  def logout
    #session.delete :blogger_id
    session.clear
    render json: {message: "Logout success"}
  end
end


