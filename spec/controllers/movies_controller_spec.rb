# spec/controllers/movies_controller_spec.rb
require 'rails_helper'


RSpec.describe MoviesController do
    # 6 records in test database
    describe "GET Movies with Id" do
      it "returns http success with exact id if found" do
        get :show, params: { :id => '1'}, :format => :json
        json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(json["id"]).to eq(1)
      end
      it "returns http code 404 if not found" do
        get :show, params: { :id => '7'}, :format => :json
        expect(response).to have_http_status(404)
      end
    end
    describe "GET Movies" do
      it "returns http success with list of movies" do
        get :index, :format => :json
        json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(json["items"].length).to eq(6)
      end
      it "returns http success with exact number of movies " do
        get :index, params: { :limit => '2'}, :format => :json
        json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(json["items"].length).to eq(2)
      end
      it "returns http success with exact offset of movies " do
        get :index, params: { :offset => '2'}, :format => :json
        json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(json["items"].length).to eq(4)
      end
      it "returns http success with exact limit and offset of movies " do
        get :index, params: { :offset => '5', :limit => '10'}, :format => :json
        json = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(json["items"].length).to eq(1)
      end
      it "returns http success with correct order " do
        get :index, params: { :orderBy => "title:desc"}, :format => :json
        json = JSON.parse(response.body)["items"]
        expect(response).to have_http_status(200)
        title = json[0]['title'];
        json.each { |x| expect(x['title'] > title).to eq(false); title = x['title'] }
      end
    end
    describe "PUT Movie with Id to update rating" do
      it "returns http success 204 if id and rating are valid" do
        put :update, params: { :id => '1', :rating => '3'}, :format => :json
        json = JSON.parse(response.body)
        expect(response).to have_http_status(204)
      end
      it "returns http code 404 if id not found" do
        put :update, params: { :id => '7', :rating => '3'}, :format => :json
        json = JSON.parse(response.body)
        expect(response).to have_http_status(404)
      end
      it "returns http code 400 if trying to modify a unreleased movie rating" do
        put :update, params: { :id => '5', :rating => '3'}, :format => :json
        json = JSON.parse(response.body)
        expect(response).to have_http_status(400)
      end
      it "returns http code 400 if provides invalid rating" do
        put :update, params: { :id => '1', :rating => '6'}, :format => :json
        json = JSON.parse(response.body)
        expect(response).to have_http_status(400)
      end
    end
end