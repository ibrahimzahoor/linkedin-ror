class AddUserFnameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :userfname, :string
  end
end
