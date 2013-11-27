class AddUserLnameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :userlname, :string
  end
end
