class Api::V1::ProficienciesController < Api::ApplicationController
    before_action :authenticate_user!
    before_action :find_character
    before_action :authorize!

    def update
        if @character.proficiency.update proficiency_params
            render json: { id: @character.id }
        else
            render(
                json: { errors: @character.proficiency.errors },
                status: 422 #unprocessable entity
            )
        end
    end

    private

    def find_character
        @character = Character.find params[:character_id]
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
                status: 401 #unauthorized
            )
        end
    end
end
