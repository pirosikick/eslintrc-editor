'use strict';

const googleAnalyticsScript = `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-68969549-1', 'auto');
ga('send', 'pageview');
`;

const Html = ({app}) => (
  <html lang="ja">
    <head>
      <meta charset="UTF-8"/>
      <title>.eslintrc editor</title>
      <link rel="stylesheet" href="lib/pure.css"/>
      <link rel="stylesheet" href="lib/font-awesome.css"/>
      <link rel="stylesheet" href="lib/github-markdown.css"/>
      <link rel="stylesheet" href="styles/app.css"/>
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{__html:app}}/>
      <script src="lib/react.min.js"></script>
      <script src="lib/react-dom.min.js"></script>
      <script src="lib/immutable.min.js"></script>
      <script src="scripts/client.bundle.min.js"></script>
      <script dangerouslySetInnerHTML={{__html: googleAnalyticsScript}} />
    </body>
  </html>
);

export default Html;
