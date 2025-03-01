//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{
	const board = document.getElementById("board");
	for(let i=0;i<800;i++){
		const box=document.createElement("div");
		box.classList.add("square");

		box.addEventListener("mouseenter",()=>{
			box.classList.add("hovered");
			setTimeout(()=>{
				box.classList.remove("hovered");
			},1000);
		});
		board.appendChild(box);
	}
})