class MoviesController < ApplicationController
  # def new
  # end
  require 'cgi'
  protect_from_forgery with: :null_session
  @@valid_sorting_fields = ['title', 'releaseDate'];
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
    queryParams = parseURLParameters(request.original_url)
    @movies = Movie.order(queryParams[:sortField] + ' ' + queryParams[:sortDirection])
        .limit(queryParams["limit"]).offset(queryParams["offset"])
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

  def parseURLParameters(url)
    params = CGI.parse(URI.parse(url).query)
    # check parameter range
    params["offset"] ||= [0]
    params["offset"] = Integer(params["offset"][0])
    params["offset"] = params["offset"] >= 0 ? params["offset"] : 0
    params["limit"] ||= [10]
    params["limit"] = Integer(params["limit"][0])
    params["limit"] = params["limit"] >= 0 ? params["limit"] : 10
    params["orderBy"] ||= ['title:asc']
    tmp = params["orderBy"][0].split(':');
    if (!@@valid_sorting_fields.include? tmp[0])
      tmp[0] = 'title'
    end
    params[:sortField] = tmp[0]
    if tmp.length == 1
      params[:sortDirection] = 'asc'
    else
      params[:sortDirection] = params["orderBy"][0].split(':')[1]
    end
    return params
  end
end
