export const utils = {
    getBlurb(field) {
        let blurb = "";
        field.map(line => {
            if (line[0] === "!") {
                blurb += "<Divider /><h2>" + line.slice(1) + "</h2>"
            } else if (line[0] === "$") {
                blurb += "<h3>" + line.slice(1) + "</h3>"
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
    }
};
