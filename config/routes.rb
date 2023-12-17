Rails.application.routes.draw do
  
  resources :animals, only: [:index, :show, :create, :destroy, :update]
  resources :clients, only: [:index, :create, :destroy, :update]
  resources :kennels, only: [:index]
  resources :impounds, only: [:index, :create, :destroy]

  patch "/update_photo/:id", to: "animals#update_photo"

  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  get "/authorize", to: "users#show"
end
