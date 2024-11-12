function scrollToSection() {
    document.getElementById('band').scrollIntoView({ behavior: 'smooth' });
  }  
   
   function scrollToSection1(event) {
      event.preventDefault();
      document.getElementById('Premium').scrollIntoView({ behavior: 'smooth' });
    } 

    function scrollToSection2(event) {
      event.preventDefault();
      document.getElementById('Details').scrollIntoView({ behavior: 'smooth' });
    } 

    function scrollToSection3(event) {
      event.preventDefault();
      document.getElementById('Bestsellers').scrollIntoView({ behavior: 'smooth' });
    } 
    