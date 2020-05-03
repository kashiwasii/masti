 // $(document).ready(function(){
      //   $('[data-toggle="tooltip"]').tooltip();
      // })
      $(document).ready(function(){
        $("#mycarousel").carousel( { interval: 2000 } );
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
        });
        // $("#carousel-play").click(function(){
        //     $("#mycarousel").carousel('cycle');
        // });
        $("#dismis").click(function(){
          $("#form").modal('hide');
        });
        $("#dismisss").click(function(){
          $("#form").modal('hide');
        });
        $("#dsms").click(function(){
          $("#loginModal").modal('hide');
        });
        $("#dsmss").click(function(){
          $("#loginModal").modal('hide');
        });
        $("#logn").click(function(){
          $("#loginModal").modal('show');
        });
        $("#formshow").click(function(){
          $("#form").modal('show');
        });
      
      
    });