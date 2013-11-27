class CommentsController < ApplicationController
	def create
	    @post = Post.find(params[:post_id])
	    @comment = @post.comments.build(params[:comment])
	    @comment.user = current_user
	    @comment.save
	    redirect_to :back
	end
end
