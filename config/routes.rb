Rails.application.routes.draw do
  
  resources :animals, only: [:index, :show, :create, :destroy, :update]

  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  get "/authorize", to: "users#show"
end
