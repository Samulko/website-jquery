$(document).ready(function() {
  // Redirect to "work.html" when root URL is requested
  if (window.location.pathname === '/') {
    window.location.href = 'work.html';
  }
  
  // Load content for "Work" link
  $("main").load("work.html");
  
  // Add click event listeners to navigation links
  $("nav ul li a").click(function() {
    // Remove "active" class from all navigation links
    $("nav ul li").removeClass("active");
    // Add "active" class to clicked navigation link
    $(this).parent().addClass("active");
    // Load content for clicked link using AJAX
    var page = $(this).attr("href");
    if (page !== "#") {
      $("main").load(page);
    }
    // Prevent default link behavior
    return false;
  });
});
