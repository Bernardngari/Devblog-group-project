Rails.application.routes.draw do
  resources :bloggers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  #post 'bloggers/signup', to: 'bloggers#create'
  # Defines the root path route ("/")
  # root "articles#index"
end
