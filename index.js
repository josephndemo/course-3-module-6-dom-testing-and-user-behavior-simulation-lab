

// DOM Manipulation Utilities
// ==========================
function addElementToDOM(parentId, text) {
  const parent = document.getElementById(parentId);
  if (parent) {
    parent.textContent = text;
  }
}

function removeElementFromDOM(elementId) {
  const el = document.getElementById(elementId);
  if (el) el.remove();
}

function simulateClick(targetId, message) {
  const target = document.getElementById(targetId);
  if (target) target.textContent = message;
}



// Form Handling
// ==========================
function handleFormSubmit(eventOrFormId, targetId = 'dynamic-content') {
  let value;

  // If called with an event (real DOM submit)
  if (eventOrFormId && eventOrFormId.preventDefault) {
    eventOrFormId.preventDefault();
    const input = document.getElementById('user-input');
    value = input.value.trim();
  } else {
    // Called directly from Jest test without event
    const input = document.getElementById('user-input');
    value = input ? input.value.trim() : '';
  }

  const target = document.getElementById(targetId);
  const errorMessage = document.getElementById('error-message');

  if (!value) {
    if (errorMessage) {
      errorMessage.textContent = 'Input cannot be empty';
      errorMessage.classList.remove('hidden');
    }
    return;
  }

  if (target) target.textContent = value;
  if (errorMessage) {
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
  }
}



// Initialize Event Listeners
// ==========================
function initUserInteractions() {
  const clickButton = document.getElementById('simulate-click');
  const form = document.getElementById('user-form');

  if (clickButton) {
    clickButton.addEventListener('click', () => simulateClick('dynamic-content', 'Button Clicked!'));
  }

  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', initUserInteractions);


// Export functions for testing
// ==========================
if (typeof module !== 'undefined') {
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
  };
}