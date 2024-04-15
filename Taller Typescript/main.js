// No compilar el ts, hay un error con el metodo required y se debe modificar a mano
import {series} from "./data.js"
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var coursesTbody = document.getElementById('Series'); // Nodo tbody que tiene el id="Series"
var seasonsbody = document.getElementById('Seasons');
function renderCoursesInTable(series) {
    series.forEach(function (c) { console.log(c.name); });
    series.forEach(function (c) {
        var row = document.createElement("tr"); // Crear una nueva fila
        row.innerHTML = "<td>".concat(c.id, "</td>\n                     <td>").concat(c.name, "</td>\n                     <td>").concat(c.channel, "</td>\n                     <td>").concat(c.seasons, "</td>");
        var platformLink = "<a href=\"".concat(c.platform, "\" target=\"_blank\">").concat(c.name, "</a>");
        coursesTbody.appendChild(row); // Agregar la fila al tbody
    });
}
function getseasonsaverage(series) {
    var seasons;
    seasons = 0;
    var total;
    total = 0;
    series.forEach(function (c) {
        total += 1;
        seasons += c.seasons;
    });
    var promedio = seasons / total;
    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Seasons average: ".concat(promedio);
    seasonsbody.appendChild(paragraph);
}
renderCoursesInTable(series);
getseasonsaverage(series);
