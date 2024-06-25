window.addEventListener("load", function(){
	let mobileFixed=document.getElementById("mobile_fixed");
	let currentPosition=window.scrollY;

	// 밑으로 내리면 하단 고정 메뉴가 보입니다.
	// flag가 "down"이면 #mobile_fixed에 active를 추가합니다.

	function getScrollDirection(){
		let newPosition=window.scrollY;

		if(newPosition > currentPosition){
			return "down";
		}
		else if(newPosition < currentPosition){
			return "up";
		}
		else{
			return "none";
		}

		currentPosition=newPosition;
	}

	window.addEventListener("scroll", function(){
		let flag=getScrollDirection();

		if(flag == "down"){
			if(mobileFixed.classList.contains("active") == false) mobileFixed.classList.add("active");
		}
		else{
			if(mobileFixed.classList.contains("active") == true) mobileFixed.classList.remove("active");
		}
	});

	/*
	$(function () {
		setInterval(() => {
			var eDate = new Date('2024/05/20 23:59:59');
			var now = new Date();
			var diff = eDate - now;
			var days = 0;
			var hours = 0;
			var minutes = 0;
			var seconds = 0;
			if (diff > 0) {
				var days = Math.floor(diff / (1000 * 60 * 60 * 24));
				var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
				var seconds = Math.floor((diff % (1000 * 60)) / 1000);
			}
			$('#topclass_0 .days').text(days);
			$('#topclass_0 .hours').text(hours);
			$('#topclass_0 .minutes').text(minutes);
			$('#topclass_0 .seconds').text(seconds);
		}, 1000);
	});
	*/

	const swiper = new Swiper(".mySwiper", {
		loop: true
	});

	let tab=start.querySelector("header .tab");
	let dim=document.querySelector(".dim");
	let mobileMenu=document.getElementById("mobile_menu");
	let closeBtn=mobile_menu.querySelector(".header .close");
	let likebtn=document.querySelectorAll(".comment .like");

	tab.addEventListener("click", function(e){
		e.preventDefault();

		mobileMenu.classList.add("active");
		dim.classList.add("active");
	});

	closeBtn.addEventListener("click", function(e){
		e.preventDefault();

		mobileMenu.classList.remove("active");
		dim.classList.remove("active");
	});

	let subSwiper=new Swiper(".cardSwiper", {
		loop: true,
		slidePerView: 1,
		spaceBetween: 10,
		pagination: {
			el: ".cardSwiper .swiper-pagination",
			type: "fraction"
		},
		navigation: {
			nextEl: ".cardSwiper .swiper-button-next",
			prevEl: ".cardSwiper .swiper-button-prev"
		},
		breakpoints: {
			640: {
				slidesPerView: 3,
			},
		}
	});

	// 토글 기능 구현
	for(let i=0; i<likebtn.length; i++){
		likebtn[i].addEventListener("click", function(e){
			e.preventDefault();

			if(e.target.classList.contains("active")){
				e.target.classList.remove("active");
			}
			else{
				e.target.classList.add("active");
			}
		});
	}

	// 탭 기능 구현
	/*
	for(let i=0; i<likebtn.length; i++){
		likebtn[i].addEventListener("click", function(e){
			e.preventDefault();

			for(let j=0; j<likebtn.length; j++){
				if(j == i){
					likebtn[j].classList.add("active");
				}
				else{
					likebtn[j].classList.remove("active");
				}
			}
		});
	}
	*/
});