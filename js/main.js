//replace with your user:
const GITHUB_URL = "https://github.com/dor-zommer";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    console.log(profileImage)
    const profileName = document.getElementById("profile-name");
    console.log(profileName)
    // update the profileImage and profileName with the information retrieved.
    
  });

  