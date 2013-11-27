class AddAdultToUsers < ActiveRecord::Migration
  def change
    add_column :users, :adult, :integer
  end
end
