class ApiController < ApplicationController
  def greetings
    greetings = Greeting.all.sample.slice(:content)
    render json: greetings
  end
end