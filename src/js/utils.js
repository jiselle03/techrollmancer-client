const utils = {
    formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
      
        return [month, day, year].join('/');
    },

    getRaceImage(slug) {
        switch(slug) {
            case "dragonborn":
                return "https://i.ibb.co/v10qr8N/dragonborn.png";
            case "dwarf":
                return "https://i.ibb.co/MMd9Kkb/dwarf.png";
            case "elf":
                return "https://i.ibb.co/jrjgQCF/elf.png";
            case "gnome":
                return "https://i.ibb.co/3mpSbj1/gnome.png";
            case "half-elf":
                return "https://i.ibb.co/x2zBdnD/half-elf.png";
            case "half-orc":
                return "https://i.ibb.co/JxZCm8k/half-orc.png";
            case "halfling":
                return "https://i.ibb.co/JQnLsvV/halfling.png";
            case "human":
                return "https://i.ibb.co/zX508wC/human.png";
            case "tiefling":
                return "https://i.ibb.co/LY2Bcj6/tiefling.png";
            default:
                return;
        }
    },

    getClassImage(slug) {
        switch(slug) {
            case "barbarian":
                return "https://i.ibb.co/pdpMrsM/barbarian.png";
            case "bard":
                return "https://i.ibb.co/Nm93jkX/bard.png";
            case "cleric":
                return "https://i.ibb.co/TMc1sw1/cleric.png";
            case "druid":
                return "https://i.ibb.co/pP3h8y3/druid.png";
            case "fighter":
                return "https://i.ibb.co/bBV17bM/fighter.png";
            case "monk":
                return "https://i.ibb.co/mJZfJB1/monk.png";
            case "paladin":
                return "https://i.ibb.co/4KtqKCW/paladin.png";
            case "ranger":
                return "https://i.ibb.co/t3xTrqP/ranger.png";
            case "rogue":
                return "https://i.ibb.co/VQ7yTdB/rogue.png";
            case "sorcerer":
                return "https://i.ibb.co/5298ZWb/sorcerer.png";
            case "warlock":
                return "https://i.ibb.co/JHpS2p2/warlock.png";
            case "wizard":
                return "https://i.ibb.co/nzxQR9Q/wizard.png";
            default:
                return;
        };
    },
    
    getBlurb(field) {
        let blurb = "";
        field.map(line => {
            if (line[0] === "!") {
                blurb += "<hr /><h2>" + line.slice(1) + "</h2>"
            } else if (line[0] === "$") {
                blurb += "<h2>" + line.slice(1) + "</h2>"
            } else if (line[0] === "#") {
                blurb += "<h5>" + line.slice(1) + "</h5>"
            } else if (line[0] === "%") {
                blurb += "<strong>" + line.slice(1) + "</strong>"
            } else if (line[0] === "@") {
                blurb += "<em>" + line.slice(1) + "</em>"
            } else if (line[0] === "=") {
                blurb += line.slice(1) + "<br />"
            } else if (line[0] === "*") {
                blurb += "<div class='list-item'>• " + line.slice(1) + "</div>"
            } else if (line[line.length - 1] === ":") {
                blurb += "<p>" + line + "</p>"
            } else if (line[0] === "/" && line[line.length - 1] === "/") {
                blurb += line.slice(1, -1)
            } else if (line[line.length - 1] === "/") {
                blurb += "<p>" + line.slice(0, -1)
            } else if (line[0] === "/") {
                blurb += line.slice(1) + "</p>"
            } else {
                blurb += "<p>" + line + "</p>"
            };
        });
        return blurb;
    },

    getCategory(equipment) {
        if (equipment.gear_category) {
            return equipment.gear_category;
        } else if (equipment.armor_category) {
            return equipment.armor_category;
        } else if (equipment.vehicle_category) {
            return equipment.vehicle_category;
        } else if (equipment.tool_category) {
            return equipment.tool_category;
        } else if (equipment.category_range) {
            return equipment.category_range;
        };
    },

    getRaceSize(race) {
        switch(race) {
            case "gnome":
                return "85vh";
            case "half-elf":
                return "60vh";
            case "half-orc":
                return "90vh";
            case "halfling":
                return "80vh";
            case "human":
                return "60vh";
            case "tiefling":
                return "80vh";
            default:
                return "70vh";
        };
    },

    getClassSize(charClass) {
        switch(charClass) {
            case "barbarian":
                return "50vh";
            case "bard":
                return "50vh";
            case "druid":
                return "60vh";
            case "fighter":
                return "80vh";
            case "monk":
                return "60vh";
            case "paladin":
                return "75vh";
            case "ranger":
                return "90vh";
            default:
                return "70vh";
        };
    },

    getCols(oneClass) {
        switch(oneClass.slug) {
            case "barbarian":
                return 5;
            case "bard":
                return 14;
            case "fighter":
                return 3;
            case "monk":
                return 6;
            case "paladin" || "warlock":
                return 8;
            case "ranger":
                return 9;
            case "rogue":
                return 4;
            case "sorcerer":
                return 15;
            default:
                return 13;
        };
    },
};

export default utils;
