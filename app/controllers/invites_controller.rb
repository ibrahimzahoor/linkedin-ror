class InvitesController < ApplicationController

	def index
		@contacts = request.env['omnicontacts.contacts']
		respond_to do |format|
			format.html 

		@users=User.all


		end
	end

end
