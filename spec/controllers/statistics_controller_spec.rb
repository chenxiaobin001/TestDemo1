# spec/controllers/statistic_controller_spec.rb
require 'rails_helper'


RSpec.describe StatisticsController do
  describe "GET Statistics for movies" do
    it "returns http success" do
      get :movies, :format => :json
      expect(response).to have_http_status(200)
    end
  end
end