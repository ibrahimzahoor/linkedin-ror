class AddCurrentPositionToUsers < ActiveRecord::Migration
  def change
    add_column :users, :currentposition, :string
  end
end
