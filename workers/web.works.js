const reader = new FileReader();

// self.onmessage = function(e) {
//     reader.readAsDataURL(e.data);

// }
// reader.addEventListener('load', (event) => {
//     postMessage(event.target.result);
//     console.log(event.target.result)
// })

onmessage = (e) => {
    fetch('http://localhost:8080/allTask')
        .then(response => response.json())
        .then(data => postMessage(data));
}