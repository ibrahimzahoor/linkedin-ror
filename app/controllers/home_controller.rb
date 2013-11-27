class HomeController < ApplicationController
  before_filter :authenticate_user! , :except => [:forgotpassword , :agreement , :whatislinkedin , :default]
  
  

  def index
    @post = current_user.posts.build if signed_in?
    @posts=Post.all
  end

  def forgotpassword
  end

   def whatislinkedin
    end

  def secure
  end

  def agreement
  end

  def default
  end

  def update
    inviter = User.find_by_id(params[:id])
    if current_user.approve inviter
      redirect_to :back, :notice => "Successfully confirmed friend!"
    else
      redirect_to :back, :notice => "Sorry! Could not confirm friend!"
    end
  end

end
