class AddTimeperiodtoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :timeperiodto, :date
  end
end
