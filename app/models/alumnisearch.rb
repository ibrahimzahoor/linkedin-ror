class Alumnisearch < ActiveRecord::Base
  attr_accessible :education, :enddate, :jobtitle, :location, :name, :school, :skills, :startdate, :work
def users
    @users ||= find_users
  end
  
  private
    
    def find_users
        users = User.order(:userfname)
        #users = users.where("email = ?", "#{education}") if education.present?
        users = users.where("universityEnd = ?", "#{enddate}") if enddate.present?
        users = users.where("universityStart = ?", "#{startdate}") if startdate.present?
        #users = users.where("JobTitle LIKE ?", "%#{jobtitle}%") if jobtite.present?
        users = users.where("country = ?", "#{location}") if location.present?
        #users = users.where(" = ?", "#{startdate}") if startdate.present?
        #users = users.where("Company = ?", "#{skills}") if skills.present?
        users = users.where("university LIKE ?", "%#{school}%") if school.present?
        users
      end
end
