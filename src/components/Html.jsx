'use strict';

const googleAnalyticsScript = `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-68969549-1', 'auto');
ga('send', 'pageview');
`;
const Html = ({app, prod}) => (
  <html lang="ja">
    <head>
      <meta charset="UTF-8"/>
      <title>.eslintrc editor</title>
      <link rel="stylesheet" href={prod ? "lib/pure-min.css" : "lib/pure.css"}/>
      <link rel="stylesheet" href={prod ? "lib/font-awesome.min.css" : "lib/font-awesome.css"}/>
      <link rel="stylesheet" href="lib/github-markdown.css"/>
      <link rel="stylesheet" href="styles/app.css"/>
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{__html:app}}/>
      <script src="lib/es6-promise.min.js"></script>
      <script src={prod ? "lib/react.min.js" : "lib/react.js"}></script>
      <script src={prod ? "lib/react-dom.min.js": "lib/react-dom.js"}></script>
      <script src={prod ? "lib/immutable.min.js" : "lib/immutable.js"}></script>
      <script src="scripts/client.bundle.js"></script>
      <script dangerouslySetInnerHTML={{__html: googleAnalyticsScript}} />
    </body>
  </html>
);

export default Html;
