window.addEventListener("load",function(){
	if (document.title.match(/\d/)[0] == "1") {
		HTMLElement.prototype.trigger = function (eStr) {
			var e = document.createEvent("HTMLEvents");
			e.initEvent(eStr, true, true);
			this.dispatchEvent(e);
		}
		setInterval(function () {
			for (elem of document.querySelectorAll("header h6")) {
				if (elem.textContent == "チャットパレット") {
					for (el of elem.parentNode.parentNode.nextElementSibling.firstElementChild.children) {
						el.addEventListener("click", function (e) {
							if (document.querySelector("form textarea").value != e.target.textContent.replace(/\\n/g, "\n")) {
								document.querySelector("form textarea").focus();
								document.querySelector("form textarea").value = e.target.textContent.replace(/\\n/g, "\n");
								document.querySelector("form textarea").trigger("change");
							} else {
								document.querySelectorAll("form>div>button")[2].click();
							}
							e.stopImmediatePropagation()
						})
					}
				}
			}
		}, 100)
	}
})