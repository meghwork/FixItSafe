// Guide Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize video playback functionality
  initVideoPlayer();
  
  // Initialize star rating functionality
  initStarRating();
  
  // Fetch and populate guide data (in a real app, this would come from an API)
  // For demo purposes, we're using the hardcoded data in the HTML
  // fetchGuideData();
  
  // Populate category navigation
  populateCategoryNav();
});

// Video Player Functionality
function initVideoPlayer() {
  const videoPlayer = document.getElementById('tutorial-video');
  const videoPlaceholder = document.getElementById('video-placeholder');
  
  if (!videoPlayer || !videoPlaceholder) return;
  
  videoPlaceholder.addEventListener('click', function() {
    // In a real implementation, you'd set the actual video source here
    videoPlayer.src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    
    // Hide placeholder and autoplay video
    videoPlaceholder.style.display = 'none';
    videoPlayer.play();
  });
  
  // Reset placeholder when video ends
  videoPlayer.addEventListener('ended', function() {
    videoPlaceholder.style.display = 'flex';
  });
}

// Star Rating Functionality
function initStarRating() {
  const stars = document.querySelectorAll('.star-rating i');
  const ratingText = document.querySelector('.rating-text');
  
  if (!stars.length || !ratingText) return;
  
  stars.forEach(star => {
    star.addEventListener('click', function() {
      const rating = parseInt(this.getAttribute('data-rating'));
      
      // Update active stars
      stars.forEach(s => {
        const starRating = parseInt(s.getAttribute('data-rating'));
        if (starRating <= rating) {
          s.classList.remove('bi-star');
          s.classList.add('bi-star-fill', 'active');
        } else {
          s.classList.remove('bi-star-fill', 'active');
          s.classList.add('bi-star');
        }
      });
      
      // Update rating text
      const ratingTexts = [
        'Poor',
        'Fair',
        'Good',
        'Very Good',
        'Excellent'
      ];
      
      ratingText.textContent = ratingTexts[rating - 1] || 'Select rating';
    });
    
    // Hover effect
    star.addEventListener('mouseenter', function() {
      const rating = parseInt(this.getAttribute('data-rating'));
      
      stars.forEach(s => {
        const starRating = parseInt(s.getAttribute('data-rating'));
        if (starRating <= rating) {
          s.classList.remove('bi-star');
          s.classList.add('bi-star-fill');
        } else {
          s.classList.remove('bi-star-fill');
          s.classList.add('bi-star');
        }
      });
    });
    
    // Reset to actual rating on mouse leave
    star.addEventListener('mouseleave', function() {
      stars.forEach(s => {
        if (s.classList.contains('active')) {
          s.classList.remove('bi-star');
          s.classList.add('bi-star-fill');
        } else {
          s.classList.remove('bi-star-fill');
          s.classList.add('bi-star');
        }
      });
    });
  });
}

// Save, Share, and Print functionality
document.getElementById('btn-save')?.addEventListener('click', function() {
  // Toggle saved state
  this.classList.toggle('active');
  const icon = this.querySelector('i');
  
  if (this.classList.contains('active')) {
    icon.classList.remove('bi-bookmark');
    icon.classList.add('bi-bookmark-fill');
    this.querySelector('span').textContent = 'Saved';
    
    // Notification in a real app
    console.log('Guide saved to your bookmarks');
  } else {
    icon.classList.remove('bi-bookmark-fill');
    icon.classList.add('bi-bookmark');
    this.querySelector('span').textContent = 'Save';
    
    console.log('Guide removed from your bookmarks');
  }
});

document.getElementById('btn-share')?.addEventListener('click', function() {
  // In a real app, this would open a share dialog
  console.log('Share dialog would open here');
  alert('Share functionality would appear here!');
});

document.getElementById('btn-print')?.addEventListener('click', function() {
  window.print();
});

// Populate category navigation from sidebar
function populateCategoryNav() {
  // In a real implementation, this would use data from the API
  // For demo, we'll just hard-code it
  document.getElementById('category-link').textContent = 'Computers';
  document.getElementById('category-link').href = 'category.html?category=computers';
}

// Fetch guide data from API (mock implementation)
function fetchGuideData(guideId) {
  // In a real app, this would be an API call
  console.log('Fetching guide data for ID:', guideId);
  
  // Mock API response for demo purposes
  const guideData = {
    id: 1,
    title: 'How to Fix a Slow Laptop',
    slug: 'how-to-fix-slow-laptop',
    category: {
      id: 2,
      name: 'Computers',
      slug: 'computers'
    },
    difficulty: 'Intermediate',
    estimatedTime: '30-45 minutes',
    rating: 4.8,
    ratingCount: 124,
    description: 'Is your laptop running slower than usual? This comprehensive guide will help you identify and fix common issues that slow down your computer\'s performance. Follow these steps to get your laptop back to optimal speed.',
    videoUrl: 'path/to/video.mp4',
    steps: [
      {
        // Step data would go here
      }
    ]
  };
  
  // Update DOM with guide data
  updateGuideUI(guideData);
}

// Update UI with guide data
function updateGuideUI(guide) {
  // In a real implementation, this would update all the elements
  console.log('Updating UI with guide data:', guide);
}