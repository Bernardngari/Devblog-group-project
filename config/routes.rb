Rails.application.routes.draw do
  resources :bloggers
  post '/login', to: 'sessions#create_session'
  delete '/logout', to: 'sessions#logout'
  resources :blogs, only: [:index, :show, :create, :update, :destroy]
  resources :comments
 
end
