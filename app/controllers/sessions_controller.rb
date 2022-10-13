class SessionsController < ApplicationController

  def create_session
    blogger = Blogger.find_by(username: params[:username])
    session[:blogger_id] = blogger.id 
    render json:{ body: blogger, message: "Login success"}, status: :ok
  end

  def logout
    session.delete :blogger_id
    render json: {message: "Logout success"}
  end
end


