import ReactDOM from "react-dom/client";
import { App } from "./components/App/App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { BrowserRouter } from "react-router-dom";
import "./GlobalStyle.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

document.body.addEventListener("click", (event) => {
    if (event.isCorrected) return;
  
    const offsetX = 0;
    const offsetY = 35;
  
    const correctedX = event.clientX + offsetX;
    const correctedY = event.clientY + offsetY;
  
    console.log("Original Coordinates:", event.clientX, event.clientY);
    console.log("Corrected Coordinates:", correctedX, correctedY);
  
    const correctedTarget = document.elementFromPoint(correctedX, correctedY);
  
    if (correctedTarget) {
      // Create a new corrected event with a custom property
      const correctedEvent = new MouseEvent("click", {
        clientX: correctedX,
        clientY: correctedY,
        bubbles: true,
        cancelable: true,
        view: window,
      });
  
      Object.defineProperty(correctedEvent, "isCorrected", { value: true });
  
      // Dispatch the corrected event on the corrected target
      correctedTarget.dispatchEvent(correctedEvent);
    }
  
    // Prevent the original event from propagating
    event.stopPropagation();
    event.preventDefault();
  });