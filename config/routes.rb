Rails.application.routes.draw do
  get 'statistics/movies'

  get 'welcome/index'
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :movies

end
