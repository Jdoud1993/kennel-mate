class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create
    def create
        user = User.find_by(user_name: params[:user_name])
    
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized 
        end
    end

    def destroy
        if session.include? :user_id
            session.delete :user_id
            head :no_content
        else
            render json: {errors: ["not logged in"]}, status: :unauthorized 
        end
    end

end
