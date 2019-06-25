window.onload=function(){
  document.getElementById('convertBtn').addEventListener("click", function(){
      chrome.tabs.executeScript({
        file: 'contentScript.js'
      })
    });
}
