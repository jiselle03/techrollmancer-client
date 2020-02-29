class Api::V1::CharactersController < Api::ApplicationController
    before_action :authenticate_user!
    before_action :find_character, only: [:edit,:update,:show, :destroy]
    before_action :authorize!

    def create
        character = Character.new character_params
        character.proficiency = Proficiency.new

        if character.save
            render json: { id: character.id }
        else
            render(
                json: { errors: character.errors },
                status: 422 #unprocessable entity
            )
        end
    end

    def update
        if @character.update character_params
            render json: { id: @character.id }
        else
            render(
                json: { errors: @character.errors },
                status: 422 #unprocessable entity
            )
        end
    end

    def index
        @characters = current_user.characters.order(:name)
        render json: @characters
    end

    def show
        render json: @character
    end

    def destroy
        @character.destroy
        render(
            json: { status: 200 }, 
            status: 200
        ) 
    end

    private

    def find_character
        @character = Character.find params[:id]
    end
    
    def character_params
        params.require(:character).permit(
            :user_id,
            :name,
            :gender,
            :race,
            :class_1,
            :class_2,
            :class_3,
            :class_1_level,
            :class_2_level,
            :class_3_level,
            :hp,
            :alignment,
            :photo_url,
            :str, :dex, :con, :int, :wis, :cha,
            :armor_class,
            :speed
        )
    end

    def authorize!
        unless can?(:crud, @character)
            render(
                json: { status: 401 },
                status: 401 #unauthorized
            )
        end
    end
end
