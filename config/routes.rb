Rails.application.routes.draw do
  resources :bloggers, except: [:update, :delete]
  post '/login', to: 'sessions#create_session'
  delete '/logout', to: 'sessions#logout'
  get '/me', to: 'sessions#me'
  resources :blogs
  resources :comments
 
end
