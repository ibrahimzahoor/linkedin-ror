module ApplicationHelper
	def resource_name
    :user
    :Advancesearch
  end

  def resource
    @resource ||= User.new
    @resource ||= Advancesearch.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end
end

