GET();
var HombresGrafica;
var MujeresGrafica;
var MayaGrafica;
var GarifunaGrafica;
var AfroGrafica;
var XincaGrafica;
var LadinoGrafica;
var HombresGraficaM;
var MujeresGraficaM;

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Poblacion Total', 'Hours per Day'],
    ['Hombres', HombresGrafica],
    ['Mujeres', MujeresGrafica]
  ]);

  var options = {
    title: 'Porcentaje de hombres y mujeres',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(MydrawChart);

function MydrawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Porcentaje Poblacion por Etnia', 'Hours per Day'],
    ['Maya', MayaGrafica],
    ['Garifuna', GarifunaGrafica],
    ['Afrodescediente', AfroGrafica],
    ['Xinca', XincaGrafica],
    ['Ladina', LadinoGrafica]
  ]);

  var options = {
    title: 'Porcentaje Poblacion por Etnia'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

function GET() {
  var url = "https://censopoblacion.azurewebsites.net/API/indicadores/2/999";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var data2 = JSON.parse(data);

      var NombreDep = data2.nombre;
      document.getElementById('NombreDep').textContent = "Nombre: " + NombreDep;

      var CapDep = data2.capital;
      document.getElementById('CapDep').textContent = "Capital: " + CapDep;

      var ExtDep = data2.ext_territorial;
      document.getElementById('ExtDep').textContent = "Extension territorial: " + ExtDep + " Km²";

      var pobtotal = data2.pob_total;
      document.getElementById("pob_total").textContent = "Poblacion Total: " + pobtotal;

      var totalhombres = data2.total_sexo_hombre;
      document.getElementById("totalHombres").textContent = "Poblacion Masculina: " + totalhombres;

      var totalmujeres = data2.total_sexo_mujeres;
      document.getElementById("totalMujeres").textContent = "Poblacion Femenina: " + totalmujeres;

      HombresGrafica = totalhombres;
      MujeresGrafica = totalmujeres;

      var maya = data2.pob_pueblo_maya;
      document.getElementById("maya").textContent = "Poblacion Maya: " + maya;

      var garifuna = data2.pob_pueblo_garifuna;
      document.getElementById("garifuna").textContent = "Poblacion Garifuna: " + garifuna;

      var afrodescendiente = data2.pob_pueblo_afrodescendiente;
      document.getElementById("afrodescendiente").textContent = "Poblacion afrodescendiente: " + afrodescendiente;

      var xinca = data2.pob_pueblo_xinca;
      document.getElementById("xinca").textContent = "Poblacion Xinca: " + xinca;

      var ladino = data2.pob_pueblo_ladino;
      document.getElementById("ladino").textContent = "Poblacion Ladina: " + ladino;

      MayaGrafica = maya;
      GarifunaGrafica = garifuna;
      AfroGrafica = afrodescendiente;
      XincaGrafica = xinca;
      LadinoGrafica = ladino;

    })
}

function GETMuni() {
  var codmuni = document.getElementById('InfoMunicipio');
  var imagen = document.getElementById('imagenmuni');
  var url = "https://censopoblacion.azurewebsites.net/API/indicadores/2/" + codmuni.value + "";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var data2 = JSON.parse(data);

      var archivo = "";
      if (codmuni.value == 201) {
        archivo = "../Multimedia/Guasta.jpg";
      } else if (codmuni.value == 202) {
        archivo = "../Multimedia/Morazan.jpg";
      } else if (codmuni.value == 203) {
        archivo = "../Multimedia/Agustin.jpg";
      } else if (codmuni.value == 204) {
        archivo = "../Multimedia/Cristobal.jpg";
      } else if (codmuni.value == 205){
        archivo = "../Multimedia/Jicaro.jpg";
      } else if (codmuni.value == 206){
        archivo = "../Multimedia/Sansare.jpg";
      } else if (codmuni.value == 207){
        archivo = "../Multimedia/Sanarate.png";
      } else if (codmuni.value == 208){
        archivo = "../Multimedia/Antonio.jpg";
      }

      imagen.src = archivo;

      var NombreMuni = data2.nombre;
      document.getElementById('NombreMuni').textContent = "Nombre Municipio: " + NombreMuni;

      var Hogares = data2.total_hogares;
      document.getElementById('hogaresmuni').innerText = "Total de Hogares: " + Hogares;

      var extMuni = data2.ext_territorial;
      document.getElementById('ExtMuni').innerText = "Extension Territorial: " + extMuni + " Km²";

      var pobtotal = data2.pob_total;
      document.getElementById("Mpob_total").textContent = "Poblacion Total: " + pobtotal;

      var totalhombres = data2.total_sexo_hombre;
      document.getElementById("MtotalHombres").textContent = "Poblacion Masculina: " + totalhombres;

      var totalmujeres = data2.total_sexo_mujeres;
      document.getElementById("MtotalMujeres").textContent = "Poblacion Femenina: " + totalmujeres;

      HombresGraficaM = totalhombres;
      MujeresGraficaM = totalmujeres;

      var totalkids = data2.pob_edad_014;
      document.getElementById("Medadnino").textContent = "Poblacion menor a 14 años: " + totalkids;

      var edadpromedio = data2.edad_promedio;
      document.getElementById("Medad").textContent = "Edad promedio: " + edadpromedio;

      var maya = data2.pob_pueblo_maya;
      document.getElementById("Mmaya").textContent = "Poblacion Maya: " + maya;

      var garifuna = data2.pob_pueblo_garifuna;
      document.getElementById("Mgarifuna").textContent = "Poblacion Garifuna: " + garifuna;

      var afrodescendiente = data2.pob_pueblo_afrodescendiente;
      document.getElementById("Mafrodescendiente").textContent = "Poblacion afrodescendiente: " + afrodescendiente;

      var xinca = data2.pob_pueblo_xinca;
      document.getElementById("Mxinca").textContent = "Poblacion Xinca: " + xinca;

      var ladino = data2.pob_pueblo_ladino;
      document.getElementById("Mladino").textContent = "Poblacion Ladina: " + ladino;

    })
}
