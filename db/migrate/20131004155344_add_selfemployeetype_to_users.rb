class AddSelfemployeetypeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :selfemployeetype, :integer
  end
end
