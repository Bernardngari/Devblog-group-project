Rails.application.routes.draw do
  resources :bloggers, except: [:update]
  post '/login', to: 'sessions#create_session'
  delete '/logout', to: 'sessions#logout'
  get '/me', to: 'bloggers#me'
  resources :blogs, only: [:index, :show, :create, :update, :destroy]
  resources :comments
 
end
