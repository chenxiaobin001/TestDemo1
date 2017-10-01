require 'test_helper'

class StatisticsControllerTest < ActionDispatch::IntegrationTest
  test "should get movies" do
    get statistics_movies_url
    assert_response :success
  end

end
