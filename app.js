const webWork = new Worker('workers/web.works.js');

const fileInput = document.getElementById('fileInput');
const reader = new FileReader();
const img = new Image();

fileInput.addEventListener('change', (event) => {
    console.log(event.target.files[0])
        //webWork.postMessage(event.target.files[0])
        //reader.readAsDataURL(event.target.files[0]);
})

// reader.addEventListener('load', (event) => {
//     console.log(event.target.result)
//     img.src = event.target.result;
//     document.body.appendChild(img);
// })

// webWork.onmessage = function(e) {
//     const img = new Image();
//     img.src = e.data;
//     document.body.appendChild(img);
//     console.log('Message received from worker');
// }

webWork.onmessage = function(e) {
    console.log(e.data)
}

const fetchBtn = document.getElementById('fetch_btn');
fetchBtn.addEventListener('click', () => {
    webWork.postMessage('sd');
    // fetch('http://localhost:8080/allTask')
    //     .then(response => response.json())
    //     .then(data => console.log(data));

})