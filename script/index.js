var slideIndex = 1;
            showDivs(slideIndex);
            
            function plusDivs(dout) {
              showDivs(slideIndex += dout);
            }
            
            function showDivs(dout) {
              var val_i;
              var val_x = document.getElementsByClassName("mySlides");
              if (dout > val_x.length) {slideIndex = 1}
              if (dout < 1) {slideIndex = val_x.length}
              for (val_i = 0; val_i < val_x.length; val_i++) {
                val_x[val_i].style.display = "none";  
              }
              val_x[slideIndex-1].style.display = "block";  
            }