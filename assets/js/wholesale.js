/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '92crew-fitness.myshopify.com',
      storefrontAccessToken: '2614573e62e4a08a5cfa3937f207cfe8',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4594972328002',
        node: document.getElementById('product-component-1591639042208'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Roboto, sans-serif"
      },
      "button": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold",
        "color": "#191919",
        ":hover": {
          "color": "#191919",
          "background-color": "#e6ae28"
        },
        "background-color": "#ffc12c",
        ":focus": {
          "background-color": "#e6ae28"
        },
        "border-radius": "40px"
      },
      "price": {
        "font-family": "Roboto, sans-serif"
      },
      "compareAt": {
        "font-family": "Roboto, sans-serif"
      },
      "unitPrice": {
        "font-family": "Roboto, sans-serif"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "text": {
      "button": "View product"
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold",
        "color": "#191919",
        ":hover": {
          "color": "#191919",
          "background-color": "#e6ae28"
        },
        "background-color": "#ffc12c",
        ":focus": {
          "background-color": "#e6ae28"
        },
        "border-radius": "40px"
      }
    },
    "googleFonts": [
      "Roboto"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold",
        "color": "#191919",
        ":hover": {
          "color": "#191919",
          "background-color": "#e6ae28"
        },
        "background-color": "#ffc12c",
        ":focus": {
          "background-color": "#e6ae28"
        },
        "border-radius": "40px"
      },
      "title": {
        "color": "#191919"
      },
      "header": {
        "color": "#191919"
      },
      "lineItems": {
        "color": "#191919"
      },
      "subtotalText": {
        "color": "#191919"
      },
      "subtotal": {
        "color": "#191919"
      },
      "notice": {
        "color": "#191919"
      },
      "currency": {
        "color": "#191919"
      },
      "close": {
        "color": "#191919",
        ":hover": {
          "color": "#191919"
        }
      },
      "empty": {
        "color": "#191919"
      },
      "noteDescription": {
        "color": "#191919"
      },
      "discountText": {
        "color": "#191919"
      },
      "discountIcon": {
        "fill": "#191919"
      },
      "discountAmount": {
        "color": "#191919"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Roboto, sans-serif",
        "font-weight": "bold",
        "background-color": "#ffc12c",
        ":hover": {
          "background-color": "#e6ae28"
        },
        ":focus": {
          "background-color": "#e6ae28"
        }
      },
      "count": {
        "color": "#191919",
        ":hover": {
          "color": "#191919"
        }
      },
      "iconPath": {
        "fill": "#191919"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#191919"
      },
      "title": {
        "color": "#191919"
      },
      "price": {
        "color": "#191919"
      },
      "fullPrice": {
        "color": "#191919"
      },
      "discount": {
        "color": "#191919"
      },
      "discountIcon": {
        "fill": "#191919"
      },
      "quantity": {
        "color": "#191919"
      },
      "quantityIncrement": {
        "color": "#191919",
        "border-color": "#191919"
      },
      "quantityDecrement": {
        "color": "#191919",
        "border-color": "#191919"
      },
      "quantityInput": {
        "color": "#191919",
        "border-color": "#191919"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
