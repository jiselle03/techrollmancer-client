class Api::V1::CharacterSpellsController < Api::ApplicationController
    before_action :authenticate_user!
    before_action :find_character
    before_action :authorize!
    
    def create
        character_id = @character.id
        spells = CharacterSpell.where(character_id: character_id)
        spells.delete_all
        params[:spells].map do |id|
            character_spell = CharacterSpell.create(
                character_id: character_id,
                spell_id: id
            )
            unless character_spell.save
                render(
                    json: { errors: character_spell.errors },
                    status: 422 #unprocessable entity
                )
            end
        end

        render(
            json: { id: @character.id }
        )
    end

    private

    def find_character
        @character = Character.find params[:character_id]
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
