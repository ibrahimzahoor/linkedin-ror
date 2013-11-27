class CreateAlumnisearches < ActiveRecord::Migration
  def change
    create_table :alumnisearches do |t|
      t.string :name
      t.string :school
      t.date :startdate
      t.date :enddate
      t.string :location
      t.string :jobtitle
      t.string :work
      t.string :education
      t.string :skills

      t.timestamps
    end
  end
end
