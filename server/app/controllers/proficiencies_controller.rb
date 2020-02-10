class ProficienciesController < ApplicationController

    before_action :authenticate_user!
    # before_action :find_proficiency
    # before_action :authorize!

    def update
        @proficiency = Proficiency.find params[:id]
        if @proficiency.update proficiency_params
            redirect_to character_path(@proficiency.character)
        else
            render 'show'
        end
    end
    
end
