import { prepareInitialState } from "@tomato/components";

import { List, Login } from "./views";

import { Main } from './layouts';

const routes = [
  {
    moduleId: "sample",
    // admin: false,
    // authenticated: true,
    path: "/",
    layout: Main, 
    view: List,
  },
  {
    moduleId: "login",
    // admin: false,
    // authenticated: true,
    path: "/login",
    layout: Main, 
    view: Login,
  },
];

export const sample = {
  id: "sample",
  endpoint: "/sample",
  icon: "Email",
  name: "Sample",
  routes,
  initialState: prepareInitialState({}),
};
