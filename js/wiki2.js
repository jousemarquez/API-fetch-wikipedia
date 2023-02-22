(function () {

	var wikid = document.querySelector("#wiki");
	var framer = document.querySelector("#framer");
	var inputer = document.querySelector("#namer");
	var quelleSource = "";

	inputer.insertAdjacentHTML('afterend', '<div id="bloqueur"><ul id="listing"></ul></div>');

	//procesar los datos en json desde la url
	function goDataJson(quelleSource) {

		var searchName = document.querySelector("#namer").value;
		wikid.innerHTML = "";
		framer.innerHTML = "";

		var url = "https://es.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + searchName;
		var urlNoJson = "https://es.wikipedia.org/wiki/" + searchName;

		fetch(url)
			// Transforma los datos en json, extrae json del objeto de respuesta dado por el servidor
			.then((resp) => resp.json())
			.then(function (data) {
				//console.log(data);
				//console.log("nombre de branches : "+ data.length);

				if (quelleSource === "run") {
					displayDataResult(data, urlNoJson);
				}
				if (quelleSource === "onInput") {
					console.log("go oninput");
					displayResultLinkList(data);
				}
				console.log(data[1].length);

			});/*end then function data*/
		//console.log(data);

	}/*end goDataJson*/

	//affiche dynamiquement des propositions de recherche sur base des lettres indiquées dans l'input
	function displayResultLinkList(data) {
		//console.log("go list link");
		//vide la liste si elle existe deja
		var listingPresent = document.querySelector('#bloqueur #listing');
		listingPresent.innerHTML = "";

		for (i = 0; i < data[1].length; i++) {
			//var idx = data[1][i];var idex = idx.replace(/\s+/g,'_');
			//créée des liste de proposition
			var listerNom = "<li id='" + i + "'>" + data[1][i] + "</li>";

			document.querySelector('#listing').insertAdjacentHTML('beforeend', listerNom);
			//document.getElementById(idex).setAttribute("number",i);
		}

		var liPropo = document.querySelectorAll("#listing li");

		for (const liPro of liPropo) {
			//au clic sur un élément de la liste affiche le contenu lié à cet élément
			liPro.addEventListener("click", function () {
				//console.log("click");
				var idier = liPro.id;
				console.log("click li id = " + idier);
				var newsrc = data[3][idier];//console.log(nwsrc);
				framer.innerHTML = "";
				wikid.innerHTML = "";
				framer.insertAdjacentHTML('beforeend', '<iframe id="display" src="' + newsrc + '" width="100%" height="900"></iframe>');
				//displayer.setAttribute("src",newsrc);
				var partNom = "<h2>" + data[1][idier] + "</h2>";
				var partDef = "<p>" + data[2][idier] + "</p>";
				var partLink = "<span>" + data[3][idier] + "</span>";
				var answer = partNom + " " + partDef + " " + partLink;
				//console.log(answer);
				wikid.insertAdjacentHTML('beforeend', '<li id="' + i + '">' + answer + '</li>');

			});/*end addEventListener*/
		}/*end for*/

	}/*end displayResultLinkList*/


	// Muestra el resultado después de hacer clic en el botón de búsqueda
	function displayDataResult(data, urlNoJson) {

		//Si se introduce un dato incorrecto, devuelve mensaje de error.
		if (data[1].length == 0) {
			wikid.insertAdjacentHTML('beforeend', '<li>No hay resultados para esa búsqueda</li>');
		}

		//devuelve 10 resultados
		else {
			console.log(data[1].length);
			framer.insertAdjacentHTML('beforeend', '<iframe id="display" src="' + urlNoJson + '></iframe>');
			for (i = 0; i < data[1].length; i++) {
				var partNom = "<h2>" + data[1][i] + "</h2>";
				var partDef = "<p>" + data[2][i] + "</p>";
				var partLink = "<span>" + data[3][i] + "</span>";
				var answer = partNom + " " + partDef + " " + partLink;
				//console.log(answer);
				wikid.insertAdjacentHTML('beforeend', '<li id="' + i + '">' + answer + '</li>');
			} /*end for loop*/

			//lance l'action pour afficher le contenu dans l'iframe au clique sur une réponse donnée
			liqueur(data);
		} /*end else*/

	}/*end displayDataResult*/


	// muestra en el iframe el tema del clic <li>
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
		quelleSource = "run";
		goDataJson(quelleSource);

	}); /*end run addEventListener*/

	inputer.addEventListener("input", function () {
		console.log("go input listener");
		quelleSource = "onInput";
		goDataJson(quelleSource);
	}); /*end inpouter addEventListener*/


})();