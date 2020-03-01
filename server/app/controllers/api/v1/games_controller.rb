class Api::V1::GamesController < Api::ApplicationController
    before_action :authenticate_user!
    before_action :find_game, only: [:update, :destroy]
    before_action :authorize!, except: [:index, :create]

    def create
        game = Game.new game_params
        
        if game.save
            render json: { id: game.id }
        else
            render(
                json: { errors: game.errors },
                status: 422 #Unprocessable Entity
            )
        end
    end

    def update
        if @game.update game_params
            render json: { id: @game.id }
        else
            render(
                json: { errors: @character.errors },
                status: 422 #Unprocessable Entity
            )
        end
    end

    def index
        games = Game.where(user_id: current_user.id).order(created_at: :desc)
        render json: games
    end

    def destroy
        @game.destroy
        render(
            json: { status: 200 }, 
            status: 200
        ) 
    end

    private

    def find_game
        @game = Game.find params[:id]
    end

    def game_params
        params.require(:game).permit(
            :date,
            :time,
            :name,
            :notes,
            :user_id
        )
    end

    def authorize!
        unless can?(:crud, @game)
            render(
                json: { status: 401 },
                status: 401 #Not Authorized
            )
        end
    end
end
