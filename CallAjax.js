var HombresGrafica;
var MujeresGrafica;
var MayaGrafica;
var GarifunaGrafica;
var AfroGrafica;
var XincaGrafica;
var LadinoGrafica;
var HombresGraficaM;
var MujeresGraficaM;
var MayaGraficaM;
var GarifunaGraficaM;
var AfroGraficaM;
var XincaGraficaM;
var LadinoGraficaM;

function GET() {
  var codigodep = document.getElementById('InfoDepartamento');
  var url = "https://censopoblacion.gt/indicadores/"+codigodep.value+"/999";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      var NombreDep = data[0].nombre;
      console.log(data.nombre);
      document.getElementById('NombreDep').innerText = "Nombre: " + NombreDep;
      

      var CapDep = data[0].capital;
      document.getElementById('CapDep').textContent = "Capital: " + CapDep;

      var ExtDep = data[0].ext_territorial;
      document.getElementById('ExtDep').textContent = "Extension territorial: " + ExtDep + " Km²";

      var imagen = document.getElementById('imgDep');
      var archivo = "";
      if (codigodep.value == 2) {
        archivo = "../Multimedia/ElProgreso.png";
      }
      imagen.src = archivo;

      var pobtotal = data[0].pob_total;
      document.getElementById("pob_total").textContent = "Poblacion Total: " + pobtotal;

      var totalhombres = data[0].total_sexo_hombre;
      document.getElementById("totalHombres").textContent = "Poblacion Masculina: " + totalhombres;

      var totalmujeres = data[0].total_sexo_mujeres;
      document.getElementById("totalMujeres").textContent = "Poblacion Femenina: " + totalmujeres;

      HombresGrafica = totalhombres;
      MujeresGrafica = totalmujeres;

      var maya = data[0].pob_pueblo_maya;
      document.getElementById("maya").textContent = "Poblacion Maya: " + maya;

      var garifuna = data[0].pob_pueblo_garifuna;
      document.getElementById("garifuna").textContent = "Poblacion Garifuna: " + garifuna;

      var afrodescendiente = data[0].pob_pueblo_afrodescendiente;
      document.getElementById("afrodescendiente").textContent = "Poblacion afrodescendiente: " + afrodescendiente;

      var xinca = data[0].pob_pueblo_xinca;
      document.getElementById("xinca").textContent = "Poblacion Xinca: " + xinca;

      var ladino = data[0].pob_pueblo_ladino;
      document.getElementById("ladino").textContent = "Poblacion Ladina: " + ladino;

      MayaGrafica = maya;
      GarifunaGrafica = garifuna;
      AfroGrafica = afrodescendiente;
      XincaGrafica = xinca;
      LadinoGrafica = ladino;

      google.charts.setOnLoadCallback(MydrawChart);
      google.charts.setOnLoadCallback(drawChart);

    })
    .catch(error => {
      // Manejo de errores
      console.error("Error en la solicitud:", error);
    });
}

function GETMuni() {
  var codmuni = document.getElementById('InfoMunicipio');
  var imagen = document.getElementById('imagenmuni');
  var codigodep = document.getElementById('InfoDepartamento');
  var url = "https://censopoblacion.gt/indicadores/"+codigodep.value+"/"+codmuni.value+"";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);

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

      var NombreMuni = data[0].nombre;
      document.getElementById('NombreMuni').textContent = "Nombre Municipio: " + NombreMuni;

      var Hogares = data[0].total_hogares;
      document.getElementById('hogaresmuni').innerText = "Total de Hogares: " + Hogares;

      var extMuni = data[0].ext_territorial;
      document.getElementById('ExtMuni').innerText = "Extension Territorial: " + extMuni + " Km²";

      var pobtotal = data[0].pob_total;
      document.getElementById("Mpob_total").textContent = "Poblacion Total: " + pobtotal;

      var totalhombres = data[0].total_sexo_hombre;
      document.getElementById("MtotalHombres").textContent = "Poblacion Masculina: " + totalhombres;

      var totalmujeres = data[0].total_sexo_mujeres;
      document.getElementById("MtotalMujeres").textContent = "Poblacion Femenina: " + totalmujeres;

      HombresGraficaM = totalhombres;
      MujeresGraficaM = totalmujeres;

      var totalkids = data[0].pob_edad_014;
      document.getElementById("Medadnino").textContent = "Poblacion menor a 14 años: " + totalkids;

      var edadpromedio = data[0].edad_promedio;
      document.getElementById("Medad").textContent = "Edad promedio: " + edadpromedio;

      var maya = data[0].pob_pueblo_maya;
      document.getElementById("Mmaya").textContent = "Poblacion Maya: " + maya;

      var garifuna = data[0].pob_pueblo_garifuna;
      document.getElementById("Mgarifuna").textContent = "Poblacion Garifuna: " + garifuna;

      var afrodescendiente = data[0].pob_pueblo_afrodescendiente;
      document.getElementById("Mafrodescendiente").textContent = "Poblacion afrodescendiente: " + afrodescendiente;

      var xinca = data[0].pob_pueblo_xinca;
      document.getElementById("Mxinca").textContent = "Poblacion Xinca: " + xinca;

      var ladino = data[0].pob_pueblo_ladino;
      document.getElementById("Mladino").textContent = "Poblacion Ladina: " + ladino;

      MayaGraficaM = maya;
      GarifunaGraficaM = garifuna;
      AfroGraficaM = afrodescendiente;
      XincaGraficaM = xinca;
      LadinoGraficaM = ladino;

      google.charts.setOnLoadCallback(MunidrawChart);
      google.charts.setOnLoadCallback(MuniMydrawChart);

    })
}

google.charts.load("current", { packages: ["corechart"] });
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

function MunidrawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Poblacion Total', 'Hours per Day'],
    ['Hombres', HombresGraficaM],
    ['Mujeres', MujeresGraficaM]
  ]);

  var options = {
    title: 'Porcentaje de hombres y mujeres',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3dM'));
  chart.draw(data, options);
}

function MuniMydrawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Porcentaje Poblacion por Etnia', 'Hours per Day'],
    ['Maya', MayaGraficaM],
    ['Garifuna', GarifunaGraficaM],
    ['Afrodescediente', AfroGraficaM],
    ['Xinca', XincaGraficaM],
    ['Ladina', LadinoGraficaM]
  ]);

  var options = {
    title: 'Porcentaje Poblacion por Etnia'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechartM'));

  chart.draw(data, options);
}