function Confirm() {
    if (window.confirm("Ви студент НУ 'Львівська політехніка'?") == true) {
      window.open('http://lp.edu.ua/', '_self');
  } else {
      alert("Ви не студент")
      window.opener = self;
      window.close();
      
    }
  }
  Confirm();