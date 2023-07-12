$(document).ready(function() {
  // Load the navigation bar into the <header> tag
  $('header').load('/app-jquery/header.html', function() {
    // Add click event listeners to navigation links
    $("nav ul li a").click(function() {
      // Remove "active" class from all navigation links
      $("nav ul li").removeClass("active");
      // Add "active" class to clicked navigation link
      $(this).parent().addClass("active");
    });

    // Add "active" class to nav item that matches current page
    var currentUrl = window.location.href;
    $("nav ul li a").each(function() {
      if (currentUrl.includes($(this).attr('href'))) {
        // Remove "active" class from all navigation links
        $("nav ul li").removeClass("active");
        // Add "active" class to current navigation link
        $(this).parent().addClass('active');
      }
    });
  });

  // Add click event listener for project thumbnail links
  $(document).on("click", ".project-img-container", function(e) {
    // Check if the event target is an arrow
    if ($(e.target).hasClass("arrow-left") || $(e.target).hasClass("arrow-right")) {
      e.stopPropagation(); // Stop event from bubbling up
      return;
    }

    e.preventDefault();

    // Open the modal and set the full-quality image source
    const modal = document.getElementById("myModal");
    const fullQualityImage = document.getElementById("fullQualityImage");
    const currentImageSrc = $(this).find(".selected-image").attr("src");

    fullQualityImage.src = currentImageSrc;
    modal.style.display = "block";

    const projectIndex = $(".project-img-container").index(this);
    modal.setAttribute("data-project-index", projectIndex);
    
    const imageUrls = $(this).find('img').map((_, img) => $(img).attr('src')).get();
    $(modal).data('imageUrls', imageUrls);
    $(modal).data('currentIndex', 0);

    console.log('Project Index:', projectIndex); // Debug log
  });

  // Add click event listener for the switch view button
  $(document).on("click", ".switch-btn", function() {
    var currentView = window.location.pathname;
    if (currentView.includes("index-grid.html")) {
      window.location.href = "index.html";
    } else {
      window.location.href = "index-grid.html";
    }
  });

  // Add click event listeners for the arrow buttons
  $(document).on("click", ".arrow-left, .arrow-right", function(e) {
    e.stopPropagation();

    var imageContainer = $(this).closest(".project-img-container");
    var visibleImage = imageContainer.find(".selected-image");
    var nextImage;

    if ($(this).hasClass("arrow-left")) {
      nextImage = visibleImage.prev("img");
      if (nextImage.length === 0) {
        nextImage = imageContainer.find("img").last();
      }
    } else {
      nextImage = visibleImage.next("img");
      if (nextImage.length === 0) {
        nextImage = imageContainer.find("img").first();
      }
    }

    visibleImage.removeClass("selected-image").addClass("hidden-image");
    nextImage.removeClass("hidden-image").addClass("selected-image");

    // Updating the debug log to find all sibling images
    let allSiblings = $(this).closest(".project-img-container").find(".selected-image, .hidden-image");
    console.log('All Siblings:', allSiblings); // Debug log
    console.log('All Siblings Src:', allSiblings.map((index, img) => $(img).attr('src'))); // Debug log
  });

  // Add click event listener for close button
  $(document).on("click", ".close", function() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  });

  // Add click event listener for modal background
  window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Add click event listeners for the arrow buttons in the modal
  $(document).on("click", ".modal .arrow-left, .modal .arrow-right", function(e) {
    e.stopPropagation();

    const modal = $("#myModal");
    const imageUrls = modal.data('imageUrls');
    let currentIndex = modal.data('currentIndex');

    if ($(this).hasClass("arrow-left")) {
      currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    } else {
      currentIndex = (currentIndex + 1) % imageUrls.length;
    }
    
    modal.data('currentIndex', currentIndex);

    const newImageSrc = imageUrls[currentIndex];
    $("#fullQualityImage").attr("src", newImageSrc);

    console.log('New Image Src:', newImageSrc); // Debug log
  });

  document.querySelector('.read-more-btn').addEventListener('click', function() {
    const shortDesc = document.querySelector('.description-short');
    const longDesc = document.querySelector('.description-long');
    if (shortDesc.style.display !== 'none') {
      shortDesc.style.display = 'none';
      longDesc.style.display = 'block';
      this.textContent = 'Read Less';
    } else {
      shortDesc.style.display = 'block';
      longDesc.style.display = 'none';
      this.textContent = 'Read More';
    }
  });
  
});
