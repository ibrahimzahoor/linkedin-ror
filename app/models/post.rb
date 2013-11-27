class Post < ActiveRecord::Base
	
	belongs_to :user 
	
	default_scope -> { order('created_at DESC') }

	validates :user_id, presence: true

	has_many :comments

  attr_accessible :content, :user_id , :image , :public , :post_id

  mount_uploader :image, ImageUploader

end