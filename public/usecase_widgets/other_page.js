document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the parameter values from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const subscriptionId = urlParams.get('subscription_id');
    const customerId = urlParams.get('customer_id');
    const appId = urlParams.get('app_id');
  
    // Update the value in the HTML elements
    document.getElementById('subscription_id').textContent = subscriptionId;
    document.getElementById('customer_id').textContent = customerId;
    document.getElementById('app_id').textContent = appId;
  });
  