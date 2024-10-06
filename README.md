# Frontend Inventory Management App

## Overview

Welcome to the Frontend Inventory Management App! This application allows users to manage product inventory dynamically. Users can switch between user and admin roles to view or modify inventory items and their statistics. The application is built using modern web technologies and a clean design with Tailwind CSS.

## Features

- **Role-Based Access**: 
  - Users can toggle between user and admin roles. 
  - Admins can perform all actions, while users can only view data.

- **Dynamic Inventory Statistics**: 
  - Inventory stats update automatically based on product data changes.
  - Stats include total number of products, total store value, out-of-stock products, and number of categories.

- **Product Management**: 
  - Edit product details (category, value, quantity, and price).
  - Disable products to exclude them from inventory stats.
  - Delete products from the inventory.

## Technologies Used

- **Frontend**: 
  - React
  - TypeScript
  - Tailwind CSS
  - Ant Design (component library)
  - Zustand (for global state management)

## Usage

1. Clone the repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm run dev
   ```

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.
