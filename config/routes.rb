Rails.application.routes.draw do
<<<<<<< HEAD
  resources :bloggers
  post '/login', to: 'sessions#create_session'
  delete '/logout', to: 'sessions#logout'
=======
  resources :blogs, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
>>>>>>> 984d528ac0d5b231b4ed55781dc0ec5aade35e8e
end
