Rails.application.routes.draw do
  # route to test your configuration
  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  get "/authorize", to: "users#show"
end
