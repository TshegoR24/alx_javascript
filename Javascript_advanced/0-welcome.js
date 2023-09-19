function welcome(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
  
    function displayFullName() {
      alert('Welcome ' + fullName + '!');
    }
  
    displayFullName();
  }
  
  // Testing the function
  welcome('Holberton', 'School');
  