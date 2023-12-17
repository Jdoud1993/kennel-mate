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

    def destroy
        client = Client.find_by(id: params[:id])
        if client
            client.destroy
            render json: {}
        else
            render json: {errors: "Client not found."}, status: :not_found
        end
    end

    def update
        client = Client.find_by(id: params[:id])
        if client
            client.update(client_params)
            render json: client
        else 
            render json: {errors: "unable to Update."}, status: :unprocessable_entity 
        end
    end

    private

    def client_params
        params.permit(:name_first, :name_last, :phone_number, :address, :email)
    end

end
