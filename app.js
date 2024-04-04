const facebookButton = document.getElementById("facebook-button");

facebookButton.addEventListener("click", function() {
  const facebookUrl = "https://www.facebook.com/vapers.pt";
  
  // Check if Facebook app is installed and can handle the link
  if (typeof navigator.userAgent === "string" && navigator.userAgent.indexOf("FBAN") !== -1) {
    // Open Facebook app if available
    window.location.href = "fb://page/vapers.pt"; // Attempt to open app
  } else {
    // Fallback: Open Facebook website in browser
    window.location.href = facebookUrl;
  }
});
