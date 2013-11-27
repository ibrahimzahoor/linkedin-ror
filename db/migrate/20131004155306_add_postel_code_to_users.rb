class AddPostelCodeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :postelcode, :string
  end
end
