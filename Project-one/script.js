// Get the necessary elements from the DOM
const toggleSwitch = document.getElementById('toggle-switch');
const monthlyPlan = document.querySelector('.plan.monthly');
const annualPlan = document.querySelector('.plan.annual');


// Add event listener to the toggle switch
toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    // Hide monthly plan, show annual plan
    monthlyPlan.style.display = 'none';
    annualPlan.style.display = 'block';
  } else {
    // Show monthly plan, hide annual plan
    monthlyPlan.style.display = 'block';
    annualPlan.style.display = 'none';
  }
});
