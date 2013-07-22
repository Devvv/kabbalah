require 'test_helper'

class ShoppingControllerTest < ActionController::TestCase
  test "should get information" do
    get :information
    assert_response :success
  end

end
