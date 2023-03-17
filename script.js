$(document).ready(function() {
  // Load the navigation bar into the <header> tag
  $('header').load('header.html', function() {
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

  // Load content for "Work" link
  $("main").load("work.html");
});

// Add click event listener for project thumbnail links
$(document).on("click", ".col a", function(e) {
  e.preventDefault();
  var projectPage = $(this).attr("href");
  $("main").load("project/project-layout.html", function() {
    $("header").load("header.html");
    $("main").load(projectPage);
    // Update the page title dynamically
    $.ajax({
      url: projectPage,
      dataType: "html",
      success: function(data) {
        var title = $(data).filter("title").text();
        $("head title").text(title);
      }
    });
  });
});
