class AddTimepperiodfromToUsers < ActiveRecord::Migration
  def change
    add_column :users, :timepperiodfrom, :date
  end
end
