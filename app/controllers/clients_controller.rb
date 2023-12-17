class ClientsController < ApplicationController

    def index
        render json: Client.all
    end

    def create
        client = Client.create(client_params)
        if client
            render json: client
        else
            render json: {errors: "Unable to process Client."}, status: :unprocessable_entity 
        end
    end

    private

    def client_params
        params.permit(:name_first, :name_last, :phone_number, :address, :email)
    end

end
