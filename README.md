
# Stax Template

This is a template project to quickly get started with **Stax** — a lightweight, reactive UI library built to provide flexibility and simplicity for building web applications. This template includes the setup for **Vite** (for development and build) and **Stax** (for creating reactive UI components). You can clone this repo and start developing right away!

## Features

- **Stax UI library**: Easily create dynamic and reactive UI components.
- **Vite**: A fast build tool for modern web apps.
- **Minimal setup**: Get started with the Stax library in a fully functional, pre-configured template.
- **Reactive data binding**: Automatically update the UI when data changes.

## Getting Started

To get started with the Stax template, follow these steps:

### 1. Clone this repository

Clone the template repository to your local machine:

```bash
git clone https://github.com/nueldotdev/vite-stax-template.git
cd vite-stax-template
```

### 2. Install dependencies

Once inside the project directory, install the required dependencies:

```bash
npm install
```

### 3. Start the development server

Run the following command to start the Vite development server:

```bash
npm run dev
```

The app should now be running at [http://localhost:5173](http://localhost:5173).

### 4. Explore the Stax library

The template comes pre-configured with basic components and a simple structure to help you get started with **Stax**.

To create a new component using **Stax**, you can use the `Stax` object to define HTML elements in a declarative and reactive way.

For example, to create a simple page with a centered text:

```javascript
import { Stax } from 'stax-lib';

const stax = new Stax();

const testDiv = stax.div({
  styles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  children: [
    stax.p({
      children: "Welcome to Stax",
      styles: {
        color: "blue",
        fontSize: "24px",
      },
    }),
  ],
});

const app = document.getElementById("app");

stax.render(testDiv, app);
```

This code will create a `div` element containing a paragraph with the text "Welcome to Stax", styled and centered on the page.


## Stax Library

Stax is a simple UI library that allows you to build reactive web applications with minimal setup. I built it while looking for an easier way to create HTML Elements from within JavaScript, and it grew on me after that.

I might work on it, I probably will not, but either way, it was a great tool I used to kill boredom


---

Happy coding with **Stax**! 🚀

Feel free to contribute to the project or reach out with any issues or feature requests.