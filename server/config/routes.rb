Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'welcome#index'
  
  namespace :api, defaults: { format: :json } do
    namespace :v1 do 
      # patch('/characters/:id/spells', to: 'character_spells#update')
      resources :characters do
        resources :character_spells, only: [:create]
      end
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create] do
        get :current, on: :collection
      end
      get('/libraries/equipment', to: 'libraries#equipment_index')
      get('/libraries/equipment/:slug', to: 'libraries#equipment_show')
      get('/libraries/classes', to: 'libraries#class_index')
      get('/libraries/classes/:slug', to: 'libraries#class_show')
      get('/libraries/races', to: 'libraries#race_index')
      get('/libraries/races/:slug', to: 'libraries#race_show')
      get('/libraries/spells', to: 'libraries#spell_index')
      get('/libraries/spells/:slug', to: 'libraries#spell_show')
    end
  end

end
