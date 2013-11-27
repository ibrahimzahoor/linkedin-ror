require File.dirname(__FILE__) + '/../spec_helper'

describe AdvanceSearch do
  it "should be valid" do
    AdvanceSearch.new.should be_valid
  end
end
