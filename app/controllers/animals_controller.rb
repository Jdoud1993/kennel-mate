class AnimalsController < ApplicationController
    skip_before_action :authorized, only:index

    def index 
        render json: Animal.all
    end

    def show
        animal = Animal.find_by(id: params[:id])
        if animal
            render json: animal
        else
            render json: {error: "Animal not found."}, status: :not_found 
        end 
    end

    def create
        animal = Animal.create(animal_params)
        if animal.valid?
            render json: animal, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity 
        end
    end

    def destroy
        animal = Animal.find_by(id: params[:id])
        if animal
            animal.destroy
            render json: {}
        else
            render json: {errors: "Animal not found."}, status: :not_found
        end
    end

    def update
        animal = Animal.find_by(id: params[:id])
        if animal
            animal.update(animal_params)
            render json: animal
        else 
            render json: {errors: "Animal not found."}, status: :not_found
        end
    end

    private

    def animal_params
        params.permit(:name, :species, :breed, :sex, :age, :color_primary, :color_secondary, :image)
    end

end
