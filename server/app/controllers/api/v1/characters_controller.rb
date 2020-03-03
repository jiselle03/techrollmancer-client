class Api::V1::CharactersController < Api::ApplicationController
    before_action :authenticate_user!
    before_action :find_character, only: [:update, :show, :destroy]
    before_action :authorize!, except: [:index, :create]

    def create
        character = Character.new character_params
        
        if character.save
            render json: { id: character.id }
        else
            render(
                json: { errors: character.errors },
                status: 422 #Unprocessable Entity
            )
        end
    end

    def update
        if @character.update character_params
            render json: { id: @character.id }
        else
            render(
                json: { errors: @character.errors },
                status: 422 #Unprocessable Entity
            )
        end
    end

    def index
        characters = Character.where(user_id: current_user.id).order(:name)
        render json: characters
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
            :speed,
            :initiative
        )
    end

    def proficiency_params
        params.require(:proficiency).permit(
            :str_save,
            :dex_save,
            :con_save,
            :int_save,
            :wis_save,
            :cha_save,
            :acrobatics,
            :animal_handling,
            :arcana,
            :athletics,
            :deception,
            :history,
            :insight,
            :intimidation,
            :investigation,
            :medicine,
            :nature,
            :performance,
            :persuasion,
            :perception,
            :religion,
            :sleight_of_hand,
            :stealth,
            :survival,
            :character_id
        )
    end

    def authorize!
        unless can?(:crud, @character)
            render(
                json: { status: 401 },
                status: 401 #Not Authorized
            )
        end
    end
end
