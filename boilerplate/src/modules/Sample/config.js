import { prepareInitialState } from "@tomato/components";

import { Home, Login, Shop, UserAccount } from "./views";

import { Main } from './layouts';

const routes = [
  {
    moduleId: "sample",
    path: "/",
    layout: Main, 
    view: Home,
  },
  {
    moduleId: "login",
    path: "/login",
    layout: Main, 
    view: Login,
  },
  {
    moduleId: "shop",
    path: "/shop",
    layout: Main, 
    view: Shop,
  },
  {
    moduleId: "profile",
    path: "/profile",
    layout: Main, 
    view: UserAccount,
  },
];

export const sample = {
  id: "sample",
  endpoint: "/sample",
  icon: "Email",
  name: "Sample",
  routes,
    initialState: prepareInitialState({}),
    // initialState: prepareInitialState({ produtos: [{name: 'aa'}] }),
};
