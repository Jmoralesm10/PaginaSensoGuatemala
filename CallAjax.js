GET();
var HombresGrafica;
var MujeresGrafica;
var MayaGrafica;
var GarifunaGrafica;
var AfroGrafica;
var XincaGrafica;
var LadinoGrafica;

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  
  var data = google.visualization.arrayToDataTable([
    ['Poblacion Total', 'Hours per Day'],
    ['Hombres',     HombresGrafica],
    ['Mujeres',      MujeresGrafica]
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
          ['Maya',     MayaGrafica],
          ['Garifuna',      GarifunaGrafica],
          ['Afrodescediente',  AfroGrafica],
          ['Xinca', XincaGrafica],
          ['Ladina',    LadinoGrafica]
        ]);

        var options = {
          title: 'Porcentaje Poblacion por Etnia'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

function GET (){
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
