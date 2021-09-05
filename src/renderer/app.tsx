import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";

import Application from "./components/Application";
import Editor from "./containers/Editor";
import store from "./store";

// Create main element
const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

// Render components
const render = (Component: () => JSX.Element) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Editor />
      </Provider>
    </AppContainer>,
    mainElement
  );
};

render(Application);
