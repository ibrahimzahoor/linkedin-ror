class AddUniversityEndToUsers < ActiveRecord::Migration
  def change
    add_column :users, :universityEnd, :date
  end
end
