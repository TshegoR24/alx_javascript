<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-size: 16px;
      font-weight: normal;
      text-transform: none;
      background-color: white;
      color: black;
    }
  </style>
</head>
<body>
  <p>Welcome Holberton!</p>
  <button id="spookyButton">Spooky</button>
  <button id="darkModeButton">Dark mode</button>
  <button id="screamModeButton">Scream mode</button>

  <script>
    function changeMode(size, weight, transform, background, color) {
      return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
      };
    }

    function main() {
      const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
      const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
      const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

      document.getElementById('spookyButton').addEventListener('click', spooky);
      document.getElementById('darkModeButton').addEventListener('click', darkMode);
      document.getElementById('screamModeButton').addEventListener('click', screamMode);
    }

    main();
  </script>
</body>
</html>
