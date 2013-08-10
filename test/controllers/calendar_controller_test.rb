require 'test_helper'

class CalendarControllerTest < ActionController::TestCase
  test "should get big_calendar" do
    get :big_calendar
    assert_response :success
  end

end
