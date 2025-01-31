import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestraurantMenu from "./components/RestraurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Lazy-loaded components
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

// App layout component
const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Simulate authentication by setting a default user name
  useEffect(() => {
    const data = { name: "Muhajir Ahmadh" };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app-layout">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// Router configuration with future flags
const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Body /> },
        {
          path: "/about",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <About />
            </Suspense>
          ),
        },
        { path: "/contact", element: <Contact /> },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery />
            </Suspense>
          ),
        },
        { path: "/restraurants/:resId", element: <RestraurantMenu /> },
        { path: "/cart", element: <Cart /> },
      ],
      errorElement: <Error />,
    },
  ],
  {
    // Enabling future flags for upcoming changes in React Router v7
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  }
);

// Rendering the app with the configured router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider
    future={{
      v7_startTransition: true,
    }}
    router={appRouter}
  />
);
