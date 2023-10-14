function addText() {
    const textInput = document.getElementById('textInput').value;
    const displayArea = document.getElementById('displayArea');
    const textElement = document.createElement('p');
    textElement.textContent = textInput;
    displayArea.appendChild(textElement);
}

function addImage() {
    const imageInput = document.getElementById('imageInput');
    const displayArea = document.getElementById('displayArea');

    if (imageInput.files && imageInput.files[0]) {
        const imgElement = document.createElement('img');
        imgElement.src = URL.createObjectURL(imageInput.files[0]);
        displayArea.appendChild(imgElement);
    }
}

function addVideo() {
    const videoInput = document.getElementById('videoInput').value;
    const displayArea = document.getElementById('displayArea');
    const videoElement = document.createElement('video');
    videoElement.src = videoInput;
    videoElement.controls = true;
    displayArea.appendChild(videoElement);
}
