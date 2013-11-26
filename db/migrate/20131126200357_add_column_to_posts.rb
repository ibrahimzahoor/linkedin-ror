class AddColumnToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :linkdescription, :text
  end
end
