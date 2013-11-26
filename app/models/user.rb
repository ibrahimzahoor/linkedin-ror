class User < ActiveRecord::Base
  has_many :authorizations
  has_many :user_roles, :through => :authorizations

  has_many :posts , dependent: :destroy
  has_many :comments , dependent: :destroy
  has_many :friendships 
  has_many :friends, :through => :friendships

  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, , :lockable, :timeoutable and :omniauthable, :registerable,
  devise :database_authenticatable, :registerable,:confirmable,
         :recoverable, :rememberable, :trackable, :validatable, :token_authenticatable
    


  devise :omniauthable, :omniauth_providers => [:facebook]

  # Setup accessible (or protected) attributes for your model
  attr_accessible :userlname,:userfname,:email, :password,:image, :country ,:postelcode ,:persontype , :selfemployeetype , :adult  , :DOB  , :currentposition , :jobtitle,:company,:industry,:timepperiodfrom,:timeperiodto,:university,:universityStart,:universityEnd , :password_confirmation,:current_password, :remember_me, :authentication_token,:provider, :uid, :name
  alias_attribute :roles, :user_roles

  #Image Uploader ( A great gem with a lot of tools)
  mount_uploader :image, ImageUploader


  # A good tool to model friends request , friend list and etc etc 
  include Amistad::FriendModel



  # Ensure the there is a auth token for all users, authorization will still be enforced
  before_save :ensure_authentication_token


  # CLient Side  Validations via client_side_validations

  validates_presence_of :userlname , :userfname , :email , :password

  validates_length_of :password , :minimum => 6

  validates_confirmation_of :password



  def password_required?
    !persisted? || !password.nil? || !password_confirmation.nil?
  end

  
  # Define user role methods
  def role?(role)
    role_names.include? role.to_s
  end

  def role_names
    roles.map(&:name)
  end

  def ensure_authentication_token!   
    reset_authentication_token! if authentication_token.blank?   
  end  

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
        user.userfname = data["first_name"] if user.userfname.blank?
        user.userlname = data["last_name"] if user.userlname.blank?
      end
    end
  end

  def self.find_for_facebook_oauth(auth, signed_in_resource=nil)
  user = User.where(:provider => auth.provider, :uid => auth.uid).first
  unless user
    user = User.create(name:auth.extra.raw_info.name,
                         provider:auth.provider,
                         uid:auth.uid,
                         email:auth.info.email,
                         password:Devise.friendly_token[0,20]
                         )
  end
  user
end


protected
  def confirmation_required?
    false
  end

end
