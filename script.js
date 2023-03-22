$(document).ready(function() {
  // Load the navigation bar into the <header> tag
  $('header').load('header.html', function() {
    // Add click event listeners to navigation links
    $("nav ul li a").click(function() {
      // Remove "active" class from all navigation links
      $("nav ul li").removeClass("active");
      // Add "active" class to clicked navigation link
      $(this).parent().addClass("active");
    });
  });
});

// Add click event listener for project thumbnail links
$(document).on("click", ".col a", function(e) {
  e.preventDefault();
  var projectPage = $(this).attr("href");
  window.location.href = projectPage;
});