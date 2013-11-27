Bootstrap::Application.routes.draw do

  get "/invites/:provider/contact_callback" => "invites#index"
  get "/contacts/failure" => "invites#failure"
  
  get "/invites/index"
  get "/contacts/yahoo/callback"
  post "/home/default"
  
  resources :invites
  resources :alumnisearches
  resources :advancesearches

#resources :authentications

  
  
  get "users/show"

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" ,:registrations => "registrations" }

  #For friendships model
  resources :friendships, :controller => 'friendships', :except => [:index, :show, :edit] do
    get "requests", :on => :collection
    get "invites", :on => :collection
  end


  #resources :feedbacks

  resources :posts, only: [:create,:index , :destroy]

  resources :posts do
    resources :comments, :only => [:create]
  end

  #devise_for :admin_users, ActiveAdmin::Devise.config

  get "secure/index"

  get "secure/index"

  get "home/index"
  get "home/agreement"
  get "home/default"
  get "home/whatislinkedin"
  get "home/step3"

  get "users/join"

devise_for :users, :controllers => {:sessions => 'devise/sessions'}, :skip => [:sessions] do
    get 'login' => 'devise/sessions#new', :as => :new_user_session
    post 'login' => 'devise/sessions#create', :as => :user_session
    get 'logout' => 'devise/sessions#destroy', :as => :destroy_user_session
    get 'register' => 'devise/registrations#join', :as => :new_user_registration
    get 'sign_up' => 'registrations#new', :as => :new_user_registration
    get 'sign_up' => 'registrations#new', :as => :new_user_registration
    get 'all'     =>  'users#index'
    get 'users/:id' => 'users#show'
    get 'invitations' => 'users#friendrequests'
    get 'contacts' => 'users#contacts'
    get '/users/auth/facebook' => 'users/omniauth_callbacks#facebook'
  end


  
  #resources :users, :only => [:show]
  resources :users

  get 'users/:id/edit2' => 'users#edit'


  # get "home/index"

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => "welcome#index"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
#users/sign_up

authenticated :user do
  root :to => "home#index"
end

devise_scope :user do
  root to: "registrations#new"
  
end



match 'home/index' => 'home#index'

end
