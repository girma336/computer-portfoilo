// const { arrow } = require("@popperjs/core");
const mobileBtn = document.getElementById('menu-bar');
const exitBtn = document.getElementById('close-menu');
const aboutBtn = document.getElementById('about-2');
const PortfolioBtn = document.getElementById('portifolio-2');
const contactBtn = document.getElementById('contact-2');
const nav = document.querySelector('nav');
// popover project 
// const btn_button = document.getElementById('btn-button');
const btn_button = document.querySelector('.btn')
// const div = document.querySelector('.popover-all');
const exitPopover = document.getElementById('close-popover');

btn_button.addEventListener('click', () =>{
   div.classList.add('popover-display');
})
mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
});

function display() {
  nav.classList.remove('menu-btn');
}

exitBtn.addEventListener('click', display);
aboutBtn.addEventListener('click', display);
// PortfolioBtn.addEventListener('click', display);
contactBtn.addEventListener('click', display);

function popover() {
  div.classList.remove('popover-display');
}
exitPopover.addEventListener('click', popover);

const dataPopover = [
	{
		heading: "Tonic",
		image: "./imagsPop/project image 2.png",
		content: `Lorem Ipsum is simply dummy text of the printing 
		and typesetting industry. Lorem Ipsum has been the industry's 
		standard dummy text ever since the 1500s, when an unknown 
		printer took a galley of type and scrambled it to make a type 
		specimen book. It has survived not only five centuries, but 
		also the leap into electronic typesetting, remaining essent`,
	  },
	
	  {
		heading: "Multi-post <br/>Stories",
		image: "./imagsPop/project1.png",
		content: `Lorem Ipsum is simply dummy text of the printing 
		and typesetting industry. Lorem Ipsum has been the industry's 
		standard dummy text ever since the 1500s, when an unknown 
		printer took a galley of type and scrambled it to make a type 
		specimen book. It has survived not only five centuries, but 
		also the leap into electronic typesetting, remaining essent`,
	  },
	
	  {
		heading: "Facebook",
		image: "./imagsPop/forth-wrapper.png",
		content: `Lorem Ipsum is simply dummy text of the printing 
		and typesetting industry. Lorem Ipsum has been the industry's 
		standard dummy text ever since the 1500s, when an unknown 
		printer took a galley of type and scrambled it to make a type 
		specimen book. It has survived not only five centuries, but 
		also the leap into electronic typesetting, remaining essent`,
	  },
	
	  {
		heading: "Multi-post <br/>Stories",
		image: "./imagsPop/project 4.png",
		content: `Lorem Ipsum is simply dummy text of the printing 
		and typesetting industry. Lorem Ipsum has been the industry's 
		standard dummy text ever since the 1500s, when an unknown 
		printer took a galley of type and scrambled it to make a type 
		specimen book. It has survived not only five centuries, but 
		also the leap into electronic typesetting, remaining essent`,
	  },
	]

	const modal = document.querySelector('.modal');
	const popupWrap = document.querySelector('.pop-up-wrap');
	const projectBtn = document.querySelectorAll('.see-btn');


	projectBtn.forEach(function(Btn){
		Btn.addEventListener('click', function(e){
		  const i = e.currentTarget.dataset.id; 
		  popupWrap.innerHTML = `<div class="pop-up-nav">
		  <h2 class="poppins" id="logo">${dataPopover[i].heading}</h2>
		  <span class = "pop-up-closeBtn">&times;</span>
		</div>
	  
	  <div class="pop-up-about">
		  <ul class="poppins canopy-modal">
			<li class="about-li" id="canopy">CANOPY</li>
			<li class="about-li">Back End Dev</li>
			<li class="about-li">2015</li>
		  </ul>
	  </div>
	  
	  <div class="pop-up-image-wrap">
		<img class="snapshoot" src="${dataPopover[i].image}" alt="Tanner Christensen's portfolio image">
	  </div>
		 
	  <div class="pop-up-text-content">
		<p class="poppins-regular" id="modal-text">${dataPopover[i].content}</p>
		<div class="tag-wrap">
		<ul class="poppins-regular language-button">
		  <li class="languages">html</li>
		  <li class="languages">css</li>
		  <li class="languages">javascript</li>
		</ul>
	  <div class="pop-up-btn">
		<button class="poppins-regular see-live-btn">See live<img class="live-icon" src="./imagsPop/see-live-icon.svg"/></button>
		<button class="poppins-regular see-source-btn">See source<img id="github-modal-icon" src="./images/Vector.svg"/></button>
	  </div>
	  </div>
	  </div>
	  `
		  modal.style.visibility = 'visible';
		  const closeModal = document.querySelector('.pop-up-closeBtn');
		  closeModal.addEventListener('click', function(){
			modal.style.visibility = 'hidden';
		  })
		})
	  })
	  
