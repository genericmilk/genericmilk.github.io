document.addEventListener("DOMContentLoaded", () => {
	// Icons
	if (window.lucide) {
		window.lucide.createIcons();
	}

	// Theme removed

	// Year
	const y = document.getElementById("year");
	if (y) y.textContent = new Date().getFullYear();

	// Reveal on scroll
	const reveals = document.querySelectorAll(".reveal");
	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					e.target.classList.add("is-visible");
					io.unobserve(e.target);
				}
			});
		},
		{ threshold: 0.2 }
	);
	reveals.forEach((r) => io.observe(r));

	// Tilt effect on hero icon
	const tilt = document.querySelector(".tilt img");
	if (tilt) {
		const strength = 10;
		const parent = tilt.parentElement;
		parent.addEventListener("mousemove", (e) => {
			const rect = parent.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width - 0.5;
			const y = (e.clientY - rect.top) / rect.height - 0.5;
			tilt.style.transform = `rotateX(${-y * strength}deg) rotateY(${
				x * strength
			}deg) translateZ(10px)`;
		});
		parent.addEventListener("mouseleave", () => {
			tilt.style.transform = "rotateX(0) rotateY(0)";
		});
	}

	// Smooth scroll to top
	const toTop = document.querySelector(".to-top");
	if (toTop)
		toTop.addEventListener("click", (e) => {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: "smooth" });
		});

	// Download sparkle
	document.querySelectorAll(".download-cta").forEach((btn) => {
		btn.addEventListener("click", () => burst(btn));
	});

	// No theme toggle
});

function burst(anchor) {
	const n = 18;
	const hue = 0; // red
	const rect = anchor.getBoundingClientRect();
	for (let i = 0; i < n; i++) {
		const p = document.createElement("span");
		p.style.position = "fixed";
		p.style.left = rect.left + rect.width / 2 + "px";
		p.style.top = rect.top + rect.height / 2 + "px";
		p.style.width = p.style.height = "6px";
		p.style.borderRadius = "50%";
		const h = 0 + Math.random() * 4; // small hue variance around red
		p.style.background = `hsl(${h}, 100%, ${60 + Math.random() * 20}%)`;
		p.style.boxShadow = "0 0 10px rgba(255,59,59,.6)";
		p.style.pointerEvents = "none";
		p.style.zIndex = 9999;
		document.body.appendChild(p);
		const angle = Math.random() * Math.PI * 2;
		const dist = 40 + Math.random() * 60;
		const dx = Math.cos(angle) * dist;
		const dy = Math.sin(angle) * dist;
		p.animate(
			[
				{ transform: "translate(0,0)", opacity: 1 },
				{ transform: `translate(${dx}px, ${dy}px)`, opacity: 0 },
			],
			{
				duration: 600 + Math.random() * 300,
				easing: "cubic-bezier(.2,.7,.2,1)",
			}
		).onfinish = () => p.remove();
	}
}

// Theme helpers removed
