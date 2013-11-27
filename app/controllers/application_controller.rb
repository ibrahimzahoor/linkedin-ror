class ApplicationController < ActionController::Base
  protect_from_forgery

def resource_name
    :user
    :Advancesearch
  end

  def resource
    @resource ||= User.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end

 	
  def after_update_path_for(resource)
    '/'
  end
  
  
  
end
