class Api::V1::LibrariesController < Api::ApplicationController
    def equipment_index
        equipments = File.read "./db/data_provider/equipment.json"
        render json: equipments
    end

    def equipment_show
        equipments = File.read "./db/data_provider/equipment.json"
        equipments = JSON.parse equipments

        equipment = equipments.filter do |equipment| 
            equipment["slug"] == params[:slug]
        end
        render json: equipment[0]
    end

    def class_index
        classes = File.read "./db/data_provider/classes.json"
        render json: classes
    end

    def class_show
        classes = File.read "./db/data_provider/classes.json"
        classes = JSON.parse classes

        classes = classes.filter do |oneClass| 
            oneClass["slug"] == params[:slug]
        end
        render json: classes[0]
    end

    def race_index
        races = File.read "./db/data_provider/races.json"
        render json: races
    end

    def race_show
        races = File.read "./db/data_provider/races.json"
        races = JSON.parse races

        races = races.filter do |race| 
            race["slug"] == params[:slug]
        end
        render json: races[0]
    end

    def spell_index
        spells = Spell.all.order(id: :asc)
        render json: spells
    end

    def spell_show
        spells = Spell.all.filter do |spell| 
            spell["slug"] == params[:slug]
        end
        render json: spells[0]
    end

end
