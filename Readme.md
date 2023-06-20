# Project Title: Shopify Storefront Demo React Native App

## Overview:

This project is a React Native app using the Shopify Storefront API. It displays collections and products from a Shopify store, providing users with the ability to view product details and add products to a cart. The Cart screen allows users to view their cart, change product quantities, and remove products. An Order Summary section also provides Subtotal, Tax, and Total calculations.

The project follows best React Native development practices and uses component-based architecture. Most business logic and user interfaces are covered by Jest tests.

## Features:

1.  **Tab Bar Navigation:** The app contains a Tab Bar with two tabs - Collections and Cart. It utilizes React Navigation - Stack and Bottom Tabs for navigation between screens.

2.  **Product Browsing:** The Collections tab displays a list of collections from a Shopify store. Tapping on a collection opens a ProductListScreen that displays products in a two-column layout. Selecting a product leads the user to a ProductDetailsScreen where they can see the product title, price, description, and an 'Add to cart' button.

3.  **Cart Management:** The Cart tab displays the list of items added to the cart, allowing the user to adjust quantities or remove items from the cart. The Order summary section provides a breakdown of the Subtotal, Tax, and Total. If all items are re,oved from the Cart, an EmptyStatePlaceholder is shown.

## Tech Stack:

1.  **React Native:** Used for cross-platform mobile app development.

2.  **TypeScript:** Provides static types to enhance code quality and understandability.

3.  **Redux Toolkit:** Simplifies state management by reducing boilerplate code and integrating best practices like immutability and asynchronous logic handling.

4.  **Apollo Client:** Used for making GraphQL queries to fetch data from the Shopify Storefront API.

5.  **React Navigation:** Used for managing navigation between different screens in the app.

6.  **Jest:** Used for writing tests to ensure code reliability and functionality.

## Prerequisites:

**Shopify Storefront API keys:** You need to provide the Shopify STORE_DOMAIN and ACCESS_TOKEN. Paste these values into the constants.ts file.

## Running the Project:

1.  **Clone the Repository:**

    `git clone https://github.com/<your-github-username>/<your-repository-name>.git`

2.  **Navigate to the project directory:**

    `cd <your-repository-name>`

3.  **Install the dependencies:**

    `yarn install`

4.  **Run the application:**

    - For iOS:

      `npx react-native run-ios`

    - For Android:

      `npx react-native run-android`

## Testing:

The Jest testing framework is used to test components and business logic. Run the following command to execute the tests:

bashCopy code

`yarn test`
