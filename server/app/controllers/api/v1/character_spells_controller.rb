class Api::V1::CharacterSpellsController < Api::ApplicationController
    def create
        character = Character.find params[:character_id]
        character_id = character.id
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
            json: { id: character.id }
        )
    end
end
