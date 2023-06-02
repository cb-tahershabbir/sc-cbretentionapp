# Chargebee Retention Integration Examples

## Introduction

Demo environments to showcase Chargebee Retention (formerly Brightback) API and JS snippet integration with front-end websites.

These demo sites are connected to Chargebee Billing for customer and subscription data.

- SaaS Demo example connected to `scdemoa-test.chargebee.com`, connected via Retention API
- E-commerce Demo example connected to `scdemob-test.chargebee.com`, connected via Brightback.JS

## Usage

Set up customers and subscriptions on the above Chargebee billing instances. In the above examples, the appId's linking these example sites to their respective Chargebee Retention apps are hardcoded.

In the Cancel pages of example site, use the Customer ID and Subscription ID to generate the personalized cancel page.

The page source for `cancelapi.html` and `canceljs.html` contain the `<script>` tags with the working code block.

## Troubleshooting

1. Use the browser Console to view and any logged errors.
2. The JS integration will not work when run from localhost. See [article](https://help.brightback.com/article/43-installing-brightback#:~:text=Testing%C2%A0Chargebee%20Retention.js%20from%20localhost%3A) for more details.
3. Further errors can be viewed and debugged in the connected Retention sites.
4. The dashboard sites have a hidden test-api.html and test-js.html pages respectively that don’t have the styling applied for easier code debugging.
