class AdvancesearchesController < InheritedResources::Base

	def show
	    @search = Advancesearch.find(params[:id])
	end 
end
