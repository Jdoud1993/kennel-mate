class ImpoundsController < ApplicationController

    def index
        render json: Impound.all
    end

    def create
        current_user = User.find(session[:user_id])
        impound = current_user.impounds.create!(impound_params)
        if impound
            render json: impound, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity 
        end
    end  

    private

    def impound_params
        params.permit(:animal_id, :client_id, :kennel_id, :address_found, :status)
    end

end
