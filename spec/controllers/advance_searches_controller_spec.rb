require File.dirname(__FILE__) + '/../spec_helper'

describe AdvanceSearchesController do
  fixtures :all
  render_views

  it "index action should render index template" do
    get :index
    response.should render_template(:index)
  end

  it "show action should render show template" do
    get :show, :id => AdvanceSearch.first
    response.should render_template(:show)
  end

  it "new action should render new template" do
    get :new
    response.should render_template(:new)
  end

  it "create action should render new template when model is invalid" do
    AdvanceSearch.any_instance.stubs(:valid?).returns(false)
    post :create
    response.should render_template(:new)
  end

  it "create action should redirect when model is valid" do
    AdvanceSearch.any_instance.stubs(:valid?).returns(true)
    post :create
    response.should redirect_to(advance_search_url(assigns[:advance_search]))
  end

  it "edit action should render edit template" do
    get :edit, :id => AdvanceSearch.first
    response.should render_template(:edit)
  end

  it "update action should render edit template when model is invalid" do
    AdvanceSearch.any_instance.stubs(:valid?).returns(false)
    put :update, :id => AdvanceSearch.first
    response.should render_template(:edit)
  end

  it "update action should redirect when model is valid" do
    AdvanceSearch.any_instance.stubs(:valid?).returns(true)
    put :update, :id => AdvanceSearch.first
    response.should redirect_to(advance_search_url(assigns[:advance_search]))
  end

  it "destroy action should destroy model and redirect to index action" do
    advance_search = AdvanceSearch.first
    delete :destroy, :id => advance_search
    response.should redirect_to(advance_searches_url)
    AdvanceSearch.exists?(advance_search.id).should be_false
  end
end
