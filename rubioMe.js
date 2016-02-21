// Run script in tab
function macroRubio() {
  chrome.tabs.executeScript({
    file: 'rubify.js'
  }); 
}

// Click
document.getElementById('rubio').addEventListener('click', macroRubio);