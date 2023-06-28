document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the parameter values from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const sitedomain = urlParams.get('site_domain');
    const subscriptionId = urlParams.get('subscription_id');
    const customerId = urlParams.get('customer_id');
    const apikey = urlParams.get('api_key');
  
    // Update the value in the HTML elements
    document.getElementById('site_domain').textContent = sitedomain;
    document.getElementById('subscription_id').textContent = subscriptionId;
    document.getElementById('customer_id').textContent = customerId;
    document.getElementById('api_key').textContent = apikey;
  });
  