require 'test_helper'

class OtherControllerTest < ActionController::TestCase
  test "should get text_page" do
    get :text_page
    assert_response :success
  end

end
