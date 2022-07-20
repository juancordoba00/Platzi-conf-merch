import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/templates/Layout";
import NotFound from "../pages/NotFound";

const Home = React.lazy(() => import('../pages/Home'));
const Checkout = React.lazy(() => import('../pages/Checkout'));
const Information = React.lazy(() => import('../pages/Information'));
const Payment = React.lazy(() => import('../pages/Payment'));
const Success = React.lazy(() => import('../pages/Success'));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<>...Loading</>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/checkout"
            element={
              <React.Suspense fallback={<>...Loading</>}>
                <Checkout />
              </React.Suspense>
            }
          />
          <Route
            path="/checkout/information"
            element={
              <React.Suspense fallback={<>...Loading</>}>
                <Information />
              </React.Suspense>
            }
          />
          <Route
            path="/checkout/payment"
            element={
              <React.Suspense fallback={<>...Loading</>}>
                <Payment />
              </React.Suspense>
            }
          />
          <Route
            path="/checkout/success"
            element={
              <React.Suspense fallback={<>...Loading</>}>
                <Success />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
