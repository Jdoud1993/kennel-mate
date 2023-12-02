class AnimalsController < ApplicationController
    skip_before_action :authorized, only: :index

    def index 
        @animals = Animal.all

        animals_with_images = @animals.map do |animal|
            if animal.image.attached?
                animal.as_json.merge(image: url_for(animal.image))
            else
                animal.as_json.merge(image: nil)
            end
        end

        render json: animals_with_images

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
        if animal.valid? && animal.image.attached?
            animal_with_image = animal.as_json.merge(image: url_for(animal.image))
            render json: animal_with_image  
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
