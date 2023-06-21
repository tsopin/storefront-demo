# Shopify Storefront Product Browser

## Overview:

This project is a React Native app using the Shopify Storefront API. It displays collections and products from a Shopify store, providing users with the ability to view product details and add products to a cart. The cart screen allows users to view their cart, change product quantities, and remove products. An order summary section in the cart provides subtotal, tax, and total amounts.

The project follows best React Native development practices and uses component-based architecture. Most business logic and user interfaces are covered with unit tests.

## Features:

1.  **Tab Bar Navigation:** The app contains a tab bar with two tabs - Collections and Cart. It utilizes React Navigation - Stack and Bottom Tabs for navigation between screens.

2.  **Product Browsing:** The Collections tab displays a list of collections from a Shopify store. Tapping on a collection opens a product list screen that displays products in a two-column layout. Selecting a product leads the user to a product details screen where they can see the product title, price, description, and an "Add to cart" button.

3.  **Cart Management:** The Cart tab displays the list of items added to the cart, allowing the user to adjust quantities or remove items from the cart. The order summary section provides a breakdown of the subtotal, tax, and total. If all items are removed from the Cart - an empty state is shown.

## Tech stack:

1.  **React Native:** Used for cross-platform mobile app development.

2.  **TypeScript:** Provides static types to enhance code quality and understandability.

3.  **Redux Toolkit:** Simplifies state management by reducing boilerplate code and integrating best practices like immutability and asynchronous logic handling.

4.  **Apollo Client:** Used for making GraphQL queries to fetch data from the Shopify Storefront API.

5.  **React Navigation:** Used for managing navigation between different screens in the app.

6.  **Jest:** Used for writing tests to ensure code reliability and functionality.

## Demo:



https://github.com/tsopin/storefront-demo/assets/31713024/ffa50f76-0f8c-4323-b492-d081bceb7407


## Prerequisites:

1. **Shopify Storefront API keys:** You need to provide the Shopify `STORE_DOMAIN` and `ACCESS_TOKEN` following the instructions at https://shopify.dev/docs/custom-storefronts/building-with-the-storefront-api/getting-started#step-1-enable-storefront-api-access. Paste these values into the `constants.ts` file.
2. **React Native environment:** It is necessary to set up React Native development environment. Please refer to the official documentation provided at https://reactnative.dev/docs/environment-setup for detailed instructions.

## Running the project:

1.  **Clone the repository:**

    `git clone https://github.com/tsopin/storefront-demo.git`

2.  **Navigate to the project directory:**

    `cd storefront-demo`

3.  **Install the dependencies:**

    `yarn install`

4.  **Install the native iOS dependencies:**

    `cd ios`
    
    `pod install`

6.  **Run the application:**

    - For iOS:

      `npx react-native run-ios`

    - For Android:

      `npx react-native run-android`

## Testing:

The Jest testing framework is used to test components and business logic. Run the following command to execute the tests:

`yarn test`
