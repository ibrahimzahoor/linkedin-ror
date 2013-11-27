class RegistrationsController < Devise::RegistrationsController


def update
    @user = User.find(current_user.id)

    successfully_updated = if needs_password?(@user, params)
      @user.update_with_password(params[:user])
    else
      # remove the virtual current_password attribute update_without_password
      # doesn't know how to ignore it
      params[:user].delete(:current_password)
      @user.update_without_password(params[:user])
    end

    if successfully_updated
      set_flash_message :notice, :updated
      # Sign in the user bypassing validation in case his password changed
      sign_in @user, :bypass => true
      redirect_to after_update_path_for(@user)
    else
      render "edit"
    end
  end



protected
  def after_sign_up_path_for(resource)
    '/users/edit'
  end

  def after_inactive_sign_up_path_for(resource)
    '/users/edit'
  end


  def after_update_path_for(resource)
    if current_user.confirmed?
      root_path
    else
      confirmation_path(resource)
    end
  end

  def resource_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
  
  private :resource_params


private
  
  def needs_password?(user, params)
    user.email != params[:user][:email] ||
      params[:user][:password].present?
  end

end










