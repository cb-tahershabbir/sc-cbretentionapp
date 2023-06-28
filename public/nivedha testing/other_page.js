<script>
  function updateSiteValue() {
    // Step 1: Retrieve the input element
    var inputElement = document.getElementById("siteInput");

    // Step 2: Get the input value
    var inputValue = inputElement.value;

    // Step 3: Update the cbInstance variable
    var cbInstance = window.Chargebee.init({ site: inputValue });

    // Step 4: Use the updated cbInstance for further processing
    console.log(cbInstance);
  }
</script>

