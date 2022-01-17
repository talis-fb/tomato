import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";

import { getStates, initStore } from "@tomato/components";

import App from "./App";
import MODULES from "./modules";

import SHOP from './modules/Sample/redux'

const modulesState = getStates(MODULES);
const manualStates = {};
const state = { ...modulesState, ...manualStates };
const STORE = initStore({ state });

createRoot(document.getElementById("root")).render(
    <Provider store={STORE}>
        <Provider store={SHOP}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </Provider>
);
