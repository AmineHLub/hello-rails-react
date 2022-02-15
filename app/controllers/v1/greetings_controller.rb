class V1::GreetingsController < ApplicationController
  def index
    @random = Greeting.order('RANDOM()').first
    render json: {
      greeting: @random.message
    }.to_json
  end
end
