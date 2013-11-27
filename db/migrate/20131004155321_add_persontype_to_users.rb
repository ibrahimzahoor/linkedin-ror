class AddPersontypeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :persontype, :integer
  end
end
