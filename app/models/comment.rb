class Comment < ActiveRecord::Base

  

  belongs_to :post
  
  belongs_to :user
  
  validates :user_id, presence: true
  validates :post_id, presence: true
  
  attr_accessible :body , :post_id , :user_id
  
  default_scope -> { order('created_at ASC') }


  #attr_accessible :content, :user_id , :image , :public , :post_id



end
