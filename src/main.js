import {Stax} from 'stax-lib'

const stax = new Stax();
const counter = {count: 0}

// Create the UI components using Stax
const testDiv = stax.div({
  styles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100dvh",
    backgroundImage: "linear-gradient(to bottom right, rgb(7, 209, 98) 0%, rgb(0, 110, 255) 100%)"
  },
  children: [
    stax.h1({
      children: "Welcome to stax",
      styles: {
        fontSize: "24px",
      },
    }),
    stax.div({
      styles: {
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      },
      children: [
        stax.p({
          children: "Clicked Counter &(counter.count) time(s)",
          styles: {
            fontSize: "24px",
          },
          bindings: { counter },
        }),
        stax.button({
          children: "Click Me",
          styles: {
            backgroundColor: "lemon",
            padding: "10px",
            fontSize: "20px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          },
          events: {
            click: () => {
              counter.count++;
            },
          },
        }),
      ],
    }),
  ],
});



const app = document.getElementById("app");

stax.render(testDiv, app);