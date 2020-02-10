class CharactersController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_character, only: [:edit,:update,:show, :destroy]
    before_action :authorize!, only: [:edit, :update, :destroy]

    def new
        @character = Character.new
    end

    def create
        @character = Character.new character_params
        @character.user = current_user
        if @character.save
            flash[:notice] = 'Character Added Successfully'
            redirect_to character_path(@character.id)
        else
            render :new
        end
    end

    def edit
        
    end

    def update
        if @character.update character_params
            flash[:notice] = 'Character updated Successfully'
            redirect_to character_path(@character.id)
        else
            render :edit
        end
    end

    def index
        @characters = Character.where(:user_id => current_user.id)
    end

    def show
        @proficiency = Proficiency.find params[:id]
    end

    def destroy
        @character.destroy
        redirect_to characters_path
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
