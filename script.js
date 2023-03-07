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

  // Add click event listener to images
  $(".index-img").click(function() {
    // Get the image source and alt text
    var src = $(this).attr("src");
    var alt = $(this).attr("alt");
    // Open a new window with details about the project
    window.open("project-details.html?src=" + src + "&alt=" + alt, "_blank");
  });
});

// Define an array of project objects
var projects = [  {    name: "Project Hypar",
                       image: "./images/hypar001.JPG",
                       link: "./project-hypar.html",
                       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac leo quis odio bibendum tristique."  },
                
                  {    name: "Project Emerson",
                       image: "./images/emerson001.JPG",
                       link: "./project-emerson.html",
                       description: "Praesent quis interdum enim. In maximus orci at sapien auctor, ut ultrices velit hendrerit."  },  // Add more projects here];

// Generate the HTML dynamically using a loop
var projectsHtml = '';
for (var i = 0; i < projects.length; i++) {
  projectsHtml += '<div class="col">';
  projectsHtml += '<a href="' + projects[i].link + '" target="_blank">';
  projectsHtml += '<img src="' + projects[i].image + '" alt="' + projects[i].name + '" class="index-img">';
  projectsHtml += '</a>';
  projectsHtml += '<h2>' + projects[i].name + '</h2>';
  projectsHtml += '<p>' + projects[i].description + '</p>';
  projectsHtml += '</div>';
}

// Set the HTML of the projects container
$('.projects-container').html(projectsHtml);
