$( '.owl-carousel' ).owlCarousel( {
  loop: true,
  margin: 47,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    900: {
      items: 2
    },
  }
} )



var myVar;

function myFunction() {
  myVar = setTimeout( showPage, 3000 );
}

function showPage() {
  document.getElementById( "loader" ).style.display = "none";
  document.getElementById( "myDiv" ).style.display = "block";
}