function disable(){
  let button = document.getElementById("submit");
  let loading = document.getElementById("load");
  load.style.display = "block";
  button.disabled = true;
}
function revert(){
  let button = document.getElementById("submit");
  let loading = document.getElementById("load");
  load.style.display = "none";
  button.disabled = false;
}

document.getElementById("submit").addEventListener('click', function() {
  disable();
  let user = document.getElementById("user").value;
  const url = 'https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink';
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': 'db3fcc2c7emsha0cc08b68381743p1c76b9jsn39db8c98bb60',
      'x-rapidapi-host': 'social-download-all-in-one.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: `${user}`
    })
  };

  fetch(url, options)
    .then(response => response.json())
    .then(result => {
      let box = document.getElementById("box");
      box.style.display = "flex";
      document.getElementById("image").src = result.thumbnail;
      document.getElementById("title").textContent = result.title;
      document.getElementById("sour").textContent = "Source: " + result.source;
      document.getElementById("auth").textContent = "Author: " + result.author;
      revert();
      let box1 = document.getElementById("box1");
      box1.className = "kenshie";
      box1.innerHTML = "";
      if (result.medias && result.medias.length > 0) {
        result.medias.forEach((media, index) => {
          let link = document.createElement("a");
          link.textContent = "Download " + media.quality || `Download Media ${index + 1}`;
          link.href = media.url;
          link.download = `media_${index + 1}`;
          link.style.display = "block";
          link.style.textDecoration = "none";
          link.className = "kenshie";
          box1.appendChild(link);
        });
      }
    })
    .catch(error => console.error('Error:', error));
});
let brtbrt = document.getElementById("about");

brtbrt.addEventListener('click', function(){
  window.location.href = "https://www.facebook.com/zyrill.lautrezo.1?mibextid=ZbWKwL"
})