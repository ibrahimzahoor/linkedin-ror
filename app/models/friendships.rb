class Friendships < ActiveRecord::Base
  attr_accessible :blocker_id, :friend_id, :friendable_id, :pending

  belongs_to :User
  belongs_to :friend, :class_name => "User"

end
