class Api::V1::TraitsController < Api::ApplicationController
    before_action :authenticate_user!
    before_action :find_character
    before_action :authorize!

    def update
        if @character.trait.update trait_params
            render json: { id: @character.id }
        else
            render(
                json: { errors: @character.proficiency.errors },
                status: 422 #Unprocessable Entity
            )
        end
    end

    private

    def find_character
        @character = Character.find params[:character_id]
    end

    def trait_params
        params.require(:trait).permit(
            :description,
            :backstory,
            :personality_traits,
            :ideals,
            :bonds,
            :flaws,
            :background_type,
            :background_desc,
            :character_id
        )
    end

    def authorize!
        unless can?(:crud, @character)
            render(
                json: { status: 401 },
                status: 401 #Unauthorized
            )
        end
    end
end
