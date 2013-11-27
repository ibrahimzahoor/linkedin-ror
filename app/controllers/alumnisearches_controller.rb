class AlumnisearchesController < InheritedResources::Base

	def show
	    @search = Alumnisearch.find(params[:id])
	end
end
