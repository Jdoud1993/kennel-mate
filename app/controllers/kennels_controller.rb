class KennelsController < ApplicationController
    skip_before_action :authorized, only: :index

    def index
        render json: Kennel.all
    end

end
