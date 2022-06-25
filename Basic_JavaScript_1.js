<html lang="en">
<head>
<meta charset="utf-8"/>
<title>Red Text, Verdana Font, Alert</title>
<script>
   function changeLink() {
      var l = document.getElementById("LINK1");
      l.style.color = "red";
      l.style.fontSize="40px";
   }
</script>
<script src ="kappa.js"></script>
</head>
<body>
<h1>getElementById() example</h1>
<a id="LINK1" href="https://www.google.com">GOOGLE</a>
<p>Click the below button to apply styling to the above link</p>
<button onclick="changeLink()">CHANGE</button>
<p id = "my1"></p>
<p id = "my2"></p>
<p id = "my3"></p>
</body>
</html> 


