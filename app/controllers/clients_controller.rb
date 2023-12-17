class ClientsController < ApplicationController

    def index
        render json: Client.all
    end

    private

    def client_params
        params.permit(:name_first, :name_last, :phone_number, :address, :email)
    end

end
