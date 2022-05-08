/* クリップボードにコピーする */
function copyToClipboard(str) {
  const area = document.createElement("textarea");
  area.textContent = str;
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(area);
  area.select();
  document.execCommand('copy');
  body.removeChild(area);
}
