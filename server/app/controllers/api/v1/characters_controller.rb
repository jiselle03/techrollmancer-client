class Api::V1::CharactersController < Api::ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_character, only: [:edit,:update,:show, :destroy]
    before_action :authorize!, only: [:edit, :update, :destroy]

    def create
        character = Character.new character_params
        character.user = current_user
        if character.save
            render json: { id: character.id }
        else
            render(
                json: { errors: character.errors },
                status: 422 #unprocessable entity
            )
        end
    end

    def edit
    end

    def update
        if @character.update character_params
            render json: { id: @character.id }
        else
            render(
                json: { errors: question.errors },
                status: 422 #unproceesable entity
            )
        end
    end

    def index
        characters = Character.where(:user_id => current_user.id)
        render json: characters
    end

    def show
        # proficiency = Proficiency.find params[:id]
        render json: @character
    end

    def destroy
        @character.destroy
        render json: { status: 200 }, status: 200
    end

    private

    def find_character
        @character = Character.find params[:id]
    end
    
    def character_params
        params.require(:character).permit(:title, :description, :price)
    end

    def authorize!
        unless can?(:crud, @character)
            redirect_to root_path, alert: 'Not Authorized'
        end
    end
end
