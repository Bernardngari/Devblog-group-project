Rails.application.routes.draw do
  resources :bloggers
  post '/login', to: 'sessions#create_session'
  delete '/logout', to: 'sessions#logout'
end
