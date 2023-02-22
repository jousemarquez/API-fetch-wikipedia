(function () {

	var wikid = document.querySelector("#wiki");
	var framer = document.querySelector("#framer");

	function liqueur(data) {
		var liClickLength = document.querySelectorAll("#wiki li").length; console.log(liClickLength);
		var liClick = document.querySelectorAll("#wiki li");
		var displayer = document.querySelector("#display");

		for (const liker of liClick) {
			//console.log(liker.id);
			liker.addEventListener("click", function () {
				//console.log("click");
				var idier = liker.id;
				//console.log("click li id = "+idier);
				var newsrc = data[3][idier];//console.log(nwsrc);
				displayer.setAttribute("src", newsrc);
			});/*end addEventListener*/
		}/*end for*/

	}/*end liqueur*/

	// para obtener el nombre del usuario haciendo clic en el botón personalizar
	document.querySelector("#run").addEventListener("click", function () {

		var searchName = document.querySelector("#namer").value;
		wikid.innerHTML = "";
		framer.innerHTML = "";

		var url = "https://es.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + searchName;
		var urlNoJson = "https://es.wikipedia.org/wiki/" + searchName;

		fetch(url)
			// Transforma los datos en JSON, extrae JSON del objeto de respuesta dado por el servidor
			.then((resp) => resp.json())
			.then(function (data) {
				//console.log(data);
				//console.log("nombre de branches : "+ data.length);

				if (data[1].length == 0) {
					wikid.insertAdjacentHTML('beforeend', '<li>No hay resultados para su consulta. Inténtelo de nuevo.</li>');
				}
				else {
					framer.insertAdjacentHTML('beforeend', '<iframe id="display" src="' + urlNoJson + '" width="100%" height="900"></iframe>');
					for (i = 0; i < data[1].length; i++) {
						var partNom = "<h2>" + data[1][i] + "</h2>";
						var partDef = "<p>" + data[2][i] + "</p>";
						var partLink = "<span>" + data[3][i] + "</span>";
						var answer = partNom + " " + partDef + " " + partLink;
						//console.log(answer);
						wikid.insertAdjacentHTML('beforeend', '<li id="' + i + '">' + answer + '</li>');
					} /*end for loop*/

					liqueur(data);

				} /*end else*/

			});/*end then function data*/

	}); /*end run addEventListener*/

})();