(function() {
  var stripe = Stripe('pk_live_OiCjsMYdGvt5xBIDv7hGh0av00MT7pgpm0');

  var checkoutButton = document.getElementById('checkout-button-sku_HCD6c1zPXPZH83');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    let sku = document.getElementById("size-checkout-button-sku_HCD6c1zPXPZH83").value;
    stripe.redirectToCheckout({
      items: [{sku: sku, quantity: 1}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: window.location.protocol + '//92crew.com/success',
      cancelUrl: window.location.protocol + '//92crew.com/canceled',
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA'],
      }
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
    
  var checkoutButton2 = document.getElementById('checkout-button-sku_HCOKmyzH0uaMW1');
  checkoutButton2.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    let sku = document.getElementById("size-checkout-button-sku_HCOKmyzH0uaMW1").value;
    stripe.redirectToCheckout({
      items: [{sku: sku, quantity: 1}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: window.location.protocol + '//92crew.com/success',
      cancelUrl: window.location.protocol + '//92crew.com/canceled',
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA'],
      }
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();
