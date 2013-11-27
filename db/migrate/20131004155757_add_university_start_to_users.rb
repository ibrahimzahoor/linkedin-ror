class AddUniversityStartToUsers < ActiveRecord::Migration
  def change
    add_column :users, :universityStart, :date
  end
end
