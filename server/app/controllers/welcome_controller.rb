class WelcomeController < ApplicationController
    def index
        @characters = Character.where(:user => current_user).order(created_at: :desc)
    end
end
