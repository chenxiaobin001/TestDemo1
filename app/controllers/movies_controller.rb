class MoviesController < ApplicationController
  # def new
  # end
  protect_from_forgery with: :null_session
  def show
    @movie = Movie.find(params[:id])
    render :json => @movie
  end
  # def create
  #   @movie = Movie.new(params[:movie].permit(:title, :image, :rating, :releaseDate));
  #   @movie.save
  #   redirect_to @movie
  # end
  def index
    @movies = Movie.all
    render :json => @movies
  end

  def update
    @movie = Movie.find(params[:id])
    if !checkReleaseDate(@movie[:releaseDate])
      render :json => {:errors => 'movie not release yet'}, :status => 400
    elsif !checkRating(params[:rating])
      render :json => {:errors => 'invalid rating input'}, :status => 400
    elsif @movie.update_attribute('rating', params[:rating])
      render :json => @movie
    else
      render :json => {:errors => @movie.errors.full_messages}, :status => 422
    end
  end
  private

  def checkReleaseDate(date)
    return date.past?
  end

  def checkRating(rating)
    rating = Integer(rating)
    return rating >= 0 && rating <= 5
  end
end
