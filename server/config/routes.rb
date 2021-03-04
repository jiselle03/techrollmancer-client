Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: :json } do
    namespace :v1 do 
      resources :characters, except: [:new, :edit] do
        resources :proficiencies, only: [:update]
        resources :traits, only: [:update]
        resources :character_spells, only: [:create]
      end
      resources :users, only: [:create] do
        resources :games, except: [:new, :edit]
        get :current, on: :collection
      end
      resource :session, only: [:create, :destroy]
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
