class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :friendable_id
      t.integer :friend_id
      t.integer :blocker_id
      t.boolean :pending, :default => true

      

      t.timestamps
    end

    add_index :friendships, [:friendable_id, :friend_id], :unique => true
  end
end
