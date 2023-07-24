(function() {
	"use strict";

	function populate(dat, parent) {
		let parElem = document.getElementsByClassName(parent)[0];
		let list = parElem.getElementsByClassName("scenario--list")[0];
		let scor = parElem.getElementsByClassName("score")[0];
		let scores = { n: 0, t: 0 };

		dat.forEach((scenario) => {
			let li = document.createElement("li");
			li.innerHTML =
				"<div><description></description><score></score></div>";

			let dElem = li.getElementsByTagName("description")[0];
			let sElem = li.getElementsByTagName("score")[0];

			dElem.innerText = scenario.d;
			sElem.innerText =
				"N(" +
				scenario.n.toFixed(1) +
				") <> T(" +
				scenario.t.toFixed(1) +
				")";
			list.appendChild(li);

			scores.n += scenario.n;
			scores.t += scenario.t;
		});

		scores.n = (scores.n / dat.length).toFixed(3);
		scores.t = (scores.t / dat.length).toFixed(3);

		scor.innerText = "N(" + scores.n + ") <> T(" + scores.t + ")";
	}

	if ("undefined" != typeof XDATA) {
		populate(XDATA.n, "n--data");
		populate(XDATA.t, "t--data");
	}
})();
