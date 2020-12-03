class ClasseJS {
  constructor(objeto) {
    this.element = objeto.el;
    this.message = objeto.data.message;
  }

  changeText() {
    const selector = this.element.charAt(0);
    const name = this.element.slice(1, this.element.length);

    try {
      switch (selector) {
        case "#":
          document.getElementById(name).innerHTML = this.message;
          break;
  
        case ".":
          var elements = document.getElementsByClassName(name);
          for(var i = 0; i < elements.length; i++) {
            elements[i].innerText = this.message;
          }
          break;
  
        default:
          alert("Invalid selector!")
          break;
      };
    } catch (e) {
      if (e instanceof TypeError) {
        alert("Element not found!")
      } else {
        alert(e);
      }
    }
    
  };
};
