window.addEventListener("load", function(){
	let header=document.querySelector("#start header");
	let gnb=document.querySelector("#start nav");
	let gnbList=gnb.firstElementChild.children;

	for(let i=0; i<gnbList.length; i++){
		gnbList[i].addEventListener("mouseenter", function(e){
			e.currentTarget.classList.add("active");
			header.classList.add("active");
		});
		gnbList[i].addEventListener("mouseleave", function(e){
			e.currentTarget.classList.remove("active");
			header.classList.remove("active");
		});
	}

	let btn=document.getElementById("btn");
	// let topBtn=document.querySelector("#btn .top");
	let topBtn=btn.querySelector(".top");
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
			if(btn.classList.contains("active") == false) btn.classList.add("active");
		}
		else{
			if(btn.classList.contains("active") == true) btn.classList.remove("active");
		}
	});

	topBtn.addEventListener("click", function(e){
		e.preventDefault();

		gsap.to(window, {scrollTo: 0, dration: 0.5});
	});

	var swiper = new Swiper(".mySwiper", {
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	var swiper = new Swiper(".subSwiper", {
		// loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
	});
	var swiper = new Swiper(".subSwiper2", {
		// loop: true,
		slidesPerView: 6,
		spaceBetween: 30,
	});

	/*
	let slider2=null;

	function resizeFn(){
		let winw=window.innerWidth;

		if(winw >= 760){
			slider2.destroy();
		}
		else{
			if(slider2 == null){
				slider2=new Swiper();
			}
		}
	}

	resizeFn();

	window.addEventListener("resize", resizeFn);
	*/

});
