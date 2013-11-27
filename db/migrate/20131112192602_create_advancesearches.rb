class CreateAdvancesearches < ActiveRecord::Migration
  def change
    create_table :advancesearches do |t|
      t.string :keywords
      t.string :email
      t.string :fname
      t.string :lname
      t.string :title
      t.string :school
      t.string :country
      t.string :company

      t.timestamps
    end
  end
end
