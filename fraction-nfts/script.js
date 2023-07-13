let vid = document.getElementById("video");
setInterval(function () {
	vid.currentTime = window.pageYOffset /200;
}, 215);
// 1000 frames, 100 milliseconds

function swRegistration() {
	const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(";");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/video-scroll-one/sw.js", {
				scope: "/video-scroll-one/",
			})
			.then(function (registration) {
				console.log("%c", heart);
			})
			.catch(function (err) {
				console.log(err);
			});
	}
}



swRegistration();
