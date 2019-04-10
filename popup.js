document.getElementById('convertBtn').onclick = function(){
  chrome.tabs.executeScript({
    code: 'alert("yayy");'
  });
}​;
