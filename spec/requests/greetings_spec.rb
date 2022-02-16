require 'rails_helper'

RSpec.describe 'Greetings', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/greetings/index'
      expect(response).to have_http_status(:success)
    end
  end
end
