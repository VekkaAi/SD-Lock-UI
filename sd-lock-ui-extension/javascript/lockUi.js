console.log("Lock UI extension loaded");

document.addEventListener("DOMContentLoaded", function(){
    // add lock UI button
    var lockUiButton = document.createElement("button");
    lockUiButton.innerHTML = "🔒︎";
    lockUiButton.classList.add("lock-ui-button"); // add CSS class
    document.body.appendChild(lockUiButton);
  
    // toggle settings
    function toggleSettings() {
      var settings = document.querySelector("#txt2img_settings");
      if (settings.style.display === "none") {
        settings.style.display = "block";
      } else {
        settings.style.display = "none";
      }
    }
  
    // lock UI
    function lockUi() {
      lockUiButton.innerHTML = "🔓";
      lockUiButton.onclick = unlockUi;
      toggleSettings();
    }
  
    // unlock UI
    function unlockUi() {
      lockUiButton.innerHTML = "🔒︎";
      lockUiButton.onclick = lockUi;
      toggleSettings();
    }
  
    // set initial state
    var settingsInterval = setInterval(function() {
      var settings = document.querySelector("#txt2img_settings");
      if (settings) {
        clearInterval(settingsInterval);
        settings.style.display = "none";
        unlockUi();
      }
    }, 1000);
  });
