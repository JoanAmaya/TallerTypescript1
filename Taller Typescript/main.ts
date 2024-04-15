import { Serie } from "./serie.js";
import { series } from './data.js';

const coursesTbody: HTMLElement = document.getElementById('Series')!; // Nodo tbody que tiene el id="Series"
const seasonsbody: HTMLElement = document.getElementById('Seasons')!;
function renderCoursesInTable(series: Serie[]): void {
  series.forEach(c =>{console.log(c.name)})
  series.forEach(c => {
    const row = document.createElement("tr"); // Crear una nueva fila
    row.innerHTML = `<td>${c.id}</td>
                     <td>${c.name}</td>
                     <td>${c.channel}</td>
                     <td>${c.seasons}</td>`;
    const platformLink = `<a href="${c.platform}" target="_blank">${c.name}</a>`;
    coursesTbody.appendChild(row); // Agregar la fila al tbody
  });
}

function getseasonsaverage(series: Serie[]): void{
  let seasons: number;
  seasons=0;
  let total: number;
  total=0;
  series.forEach(c =>{total+=1;
                      seasons+=c.seasons;
  })
  let promedio= seasons/total;
  const paragraph = document.createElement("p");
  paragraph.innerHTML=`Seasons average: ${promedio}`


}

renderCoursesInTable(series);
getseasonsaverage(series);