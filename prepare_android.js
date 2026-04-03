const fs = require('fs');

let androidHtml = fs.readFileSync('/Users/admin/Desktop/pwa/f9gj.pwa_demo.skakapp.com/f9gj.pwa-demo.skakapp.com/index.html', 'utf8');

const replacementPath = './f9gj.pwa_demo.skakapp.com/f9gj.pwa-demo.skakapp.com';

androidHtml = androidHtml.replace(/"\/paso1-/g, '"' + replacementPath + '/paso1-');
androidHtml = androidHtml.replace(/"\/spwa-/g, '"' + replacementPath + '/spwa-');
androidHtml = androidHtml.replace(/"\/static\//g, '"' + replacementPath + '/static/');
androidHtml = androidHtml.replace(/"\/manifest\.json"/g, '"./manifest.json"');

// Inject the custom Service Worker and Manifest
const headEnd = androidHtml.indexOf('</head>');
if (headEnd !== -1) {
    const injection = '\n<link rel="manifest" href="./manifest.json">\n<script>if ("serviceWorker" in navigator) { window.addEventListener("load", function() { navigator.serviceWorker.register("./sw.js"); }); }</script>\n';
    androidHtml = androidHtml.substring(0, headEnd) + injection + androidHtml.substring(headEnd);
}

fs.writeFileSync('/Users/admin/Desktop/pwa/index_android.html', androidHtml);
console.log('Successfully generated index_android.html');
