# spec/controllers/movies_controller_spec.rb
require 'rails_helper'


RSpec.describe MoviesController do
    describe "GET #index" do
      it "returns http success with exact id" do
        get :show, params: { :id => '7'}, :format => :json
        json = JSON.parse(response.body)

      end
    end
end