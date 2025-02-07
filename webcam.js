// Accessing the webcam
const webcamPreview = document.getElementById('webcam-preview');
document.getElementById("quiz-box").style.display = "none";
navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(stream => {
        webcamPreview.srcObject = stream;
        document.getElementById("quiz-box").style.display = "block";

    })
    .catch(error => {
        console.error('Error accessing webcam:', error);
        alert('Unable to access webcam. Please check your settings.');
    });
