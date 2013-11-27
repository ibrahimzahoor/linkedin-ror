class AddColumnsToPost < ActiveRecord::Migration
  def change
    add_column :posts, :image, :string
    add_column :posts, :public, :string
  end
end
