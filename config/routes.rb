Rails.application.routes.draw do
  resources :bloggers
  post '/login', to: 'sessions#create_session'
  delete '/logout', to: 'sessions#logout'
  resources :blogs, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
