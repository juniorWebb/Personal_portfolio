const photoBox = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const previewImg = document.querySelector(".preview-box img");
const closeIcon = document.querySelector(".preview-box .icon");
const shadow = document.querySelector(".shadow");

window.addEventListener("load", () => {
    
    for (let i = 0; 1 < photoBox.length; i++) {
        let newIndex = i;
        photoBox[i].addEventListener("click",  () =>{

            let clickedIndex = newIndex;

            function preview(){
                let selectedImg = photoBox[newIndex].querySelector("img").src;
                previewImg.src = selectedImg;
            }

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            
            if (newIndex == 0) {
                prevBtn.style.display = "none";
            }
            if (newIndex >= photoBox.length - 1) {
                nextBtn.style.display = "none";
            }

            prevBtn.onclick = () =>{
                newIndex--;

                if (newIndex <= photoBox.length - 2) {
                    nextBtn.style.display = "block";
                    preview()
                } 
                if (newIndex == 0) {
                    prevBtn.style.display = "none";
                }
 
            }
            nextBtn.onclick = () =>{
                newIndex++;
                
                if (newIndex > 0) {
                    prevBtn.style.display = "block";
                    preview()
                }
                if (newIndex >= photoBox.length - 1) {
                    nextBtn.style.display = "none";
                }
            }

            preview();
            previewBox.classList.add("reveal");
            shadow.style.display = "block";
            
            closeIcon.onclick = () =>{
                newIndex = clickedIndex;
                    nextBtn.style.display = "block";
                    prevBtn.style.display = "block";
                    shadow.style.display = "none";
                    previewBox.classList.remove("reveal");
            }

        })
        
    }
})