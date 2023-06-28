function open_new_window(location) {
  window.location.href = location;
}

//Wasn't able to navigate using a POST request
// function openMemeDetails(memeId) {
  // Perform the redirection to the "/meme" page
  // fetch('/meme', {
  //   method: 'POST',
  //   body: {
  //     memeId
  //   }
  // });
  //  window.location.href = "/meme?id=" + memeId;
// }

//search functionality 
function searchMemes() {

  var searchTerm = document.getElementById("searchInput").value.trim();
  var rows = document.querySelectorAll("#table tbody tr");

  for (var i = 0; i < rows.length; i++) {
    var memeName = rows[i].querySelector("td:nth-child(1)").textContent.trim();

    if (memeName.toLowerCase().includes(searchTerm.toLowerCase())) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

function resetSearch() {
  document.getElementById("searchInput").value = "";

  var rows = document.querySelectorAll("#table tbody tr");
  for (var i = 0; i < rows.length; i++) {
    rows[i].style.display = "";
  }
}

document.getElementById("searchButton").addEventListener("click", searchMemes);
document.getElementById("resetBtn").addEventListener("click", resetSearch);



//Meme details 



// function openMemeDetails(memeId) {
//   // Perform a POST request to the meme route
//   fetch('/meme', {
//     method: 'POST',
//     redirect: 'follow',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ memeId: memeId })
//   })
//     // .then(response => response.json())
//     // .then(data => {
//     //   // Handle the response or redirect to the Meme Details view
//     //   // based on your server-side implementation
//     // })
//     // .catch(error => {
//     //   console.error('Error:', error);
//     // });
// }