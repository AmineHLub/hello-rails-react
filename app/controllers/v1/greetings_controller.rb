class V1::GreetingsController < ApplicationController
  def index
    render json: {
      :greeting => 'hello'
    }.to_json
  end
end
