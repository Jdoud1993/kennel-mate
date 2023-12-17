class KennelsController < ApplicationController

    def index
        render json: Kennel.all
    end

end
