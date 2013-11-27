class Advancesearch < ActiveRecord::Base
  attr_accessible :company, :country, :email, :fname, :keywords, :lname, :school, :title
  def users
    @users ||= find_users
  end
  
  private
    
    def find_users
        users = User.order(:userfname)
        users = users.where("email LIKE? OR \"userfname\" LIKE? OR \"userlname\" LIKE? OR country LIKE? OR industry LIKE? OR jobtitle LIKE? OR company LIKE? OR university LIKE? ", "%#{keywords}%", "%#{keywords}%", "%#{keywords}%", "%#{keywords}%", "%#{keywords}%", "%#{keywords}%", "%#{keywords}%", "%#{keywords}%") if keywords.present?
        users = users.where("email = ?", "#{email}") if email.present?
        users = users.where("userfname = ?", "#{fname}") if fname.present?
        users = users.where("userlname = ?", "#{lname}") if lname.present?
        users = users.where("country = ?", "#{country}") if country.present?
        users = users.where("jobtitle = ?", "#{title}") if title.present?
        users = users.where("company = ?", "#{company}") if company.present?
        users = users.where("university= ?", "#{school}") if school.present?
        users
      end
end
