document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const addTextBtn = document.getElementById("addText");
    const addImageBtn = document.getElementById("addImage");
    const addVideoBtn = document.getElementById("addVideo");
    addTextBtn.addEventListener("click", () => {
        const text = prompt("Enter your text:");
        if (text) {
            const textElement = document.createElement("p");
            textElement.textContent = text;
            content.appendChild(textElement);
        }
    });
    addImageBtn.addEventListener("click", () => {
        const imageUrl = prompt("Enter the image URL:");
        if (imageUrl) {
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            content.appendChild(imageElement);
        }
    });
    addVideoBtn.addEventListener("click", () => {
        const videoUrl = prompt("Enter the video URL (YouTube or Vimeo):");
        if (videoUrl) {
            const videoElement = document.createElement("iframe");
            videoElement.src = videoUrl;
            videoElement.allowFullscreen = true;
            content.appendChild(videoElement);
        }
    });
});