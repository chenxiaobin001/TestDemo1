class StatisticsController < ApplicationController
  def movies
    movieStats = Movie.all.group(:rating).count
    for i in 1..5
      if !movieStats.key?(i)
        movieStats[i] = 0
      end
    end
    arr = []
    movieStats.each do |key, value|
      arr.push({:name=>key, :value=>value});
    end
    @ret = {:items => arr}
    render :json => @ret
  end
end
