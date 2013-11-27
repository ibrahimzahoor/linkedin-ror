class CreateUserinfos < ActiveRecord::Migration
  def change
    create_table :userinfos do |t|

	    t.timestamps


	    t.string :country
		t.string :postelCode
		t.string :currentPosition
		t.string :JobTitle
		t.string :Company
		t.string :Industry
		t.string :timepperiodfrom
		t.string :timeperiodto
		t.string :University
		t.string :universityStart
		t.string :universityEnd
		

    end
  end
end
