import React from 'react'
import { lazy, Suspense } from 'react';
import Home from "../pages/Home/Home";
import Productpage from "../pages/Productpage/Productpage";
import { Routes, Route } from "react-router-dom";
import Productdetailspage from "../pages/ProductDetailpage/Productdetailspage";
import Carts from "../pages/Carts/Carts";
import Userprofile from "../pages/Userprofile/Userprofile";
import Login from "../pages/Userauth/Login";
import Signup from "../pages/Userauth/Signup";
import Resetpassword from "../pages/Userauth/Resetpassword";
import Forgotpassword from "../pages/Userauth/Forgotpassword";
import Shipping from "../pages/Shipping/Shipping";
import Checkout from "../pages/Checkout/Checkout";
import Userorders from "../pages/Userorders/Userorders";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import AdminCommonlayout from "../pages/Admin/AdminCommonlayout";
import Admindashboard from "../pages/Admin/Admindashboard";
import Adminproducts from "../pages/Admin/Adminproducts";
import Adminaddproduct from "../pages/Admin/Adminaddproduct";
import ProductCategory from "../pages/Admin/ProductCategory";
import Orders from "../pages/Admin/Orders";
import Payment from "../pages/Payment/Payment";
import { Slide, ToastContainer } from "react-toastify";
import Protectroute from "../components/Protectedroute/Protectroute";
import { UserPrivateroute } from "../components/Protectedroute/UserprivateRoute";
import Error from "../Error";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Terms from "../pages/Policy/Terms";
import Privacypolicy from "../pages/Policy/Privacypolicy";
import Showproducts from "../pages/ShowNestedproducts/Showproducts";
import ScrolltoTop from "../components/Scrolling/ScrolltoTop";
import EditProfile from "../pages/Editprofile/EditProfile"
import FaqSection from '../components/FaqSection/Faqsection'
import GoogleAuthSuccess from "../components/GoogleAuth/GoogleAuthSuccess";
import Spiner from "../pages/Loader/Spiner";

const Layout = lazy(() => import('../layout/Layout'));

const stripePromise = loadStripe(
  "pk_test_51R6qZVCcd2S0N0mjyQZlETJo5M6MEBAd9JmuvTf3BqqBjzjBeoRyR3b7ePoUQm0Fiob6gmTCpg0HJXYzpzYDBNH7003usjOJjs"
);
export default function AllRoutes() {
  return (
    <div className="App ">
      <Elements stripe={stripePromise}>
        <ScrolltoTop />

        <Routes>
          {/* Admin Routes */}
          {/* use of protected routes */}
          <Route path="/admin/*" element={<Protectroute />}>
            <Route path="dashboard" element={<AdminCommonlayout><Admindashboard /></AdminCommonlayout>} />
            <Route
              path="products"
              element={
                <AdminCommonlayout>
                  <Adminproducts />
                </AdminCommonlayout>
              }
            />
            <Route
              path="addproducts"
              element={
                <AdminCommonlayout>
                  <Adminaddproduct />
                </AdminCommonlayout>
              }
            />
            <Route
              path="category"
              element={
                <AdminCommonlayout>
                  <ProductCategory />
                </AdminCommonlayout>
              }
            />
            <Route
              path="orders"
              element={
                <AdminCommonlayout>
                  <Orders />
                </AdminCommonlayout>
              }
            />
          </Route>

          <Route
            path="/admin/admin-login"
            element={
              <AdminLogin />
            }
          />

          {/* USer routes */}

          <Route
            path="/"
            element={
              <Suspense fallback={<Spiner />}>
                <Layout>
                  <Home />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <Suspense fallback={<Spiner />}>
                <Layout>
                  <Productpage />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/productsdetail/:id"
            element={
              <Suspense fallback={<Spiner />}>
                <Layout>
                  <Productdetailspage />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/productsdetail/:id/showProducts/:id"
            element={
              <Suspense fallback={<Spiner />}>
                <Layout>
                  <Showproducts />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/terms"
            element={
              <Suspense fallback={<Spiner />}>
                <Layout>
                  <Terms />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/privacy"
            element={
              <Suspense fallback={<Spiner />}>
                <Layout>
                  <Privacypolicy />
                </Layout>
              </Suspense>
            }
          />
          <Route path="/google-auth-success" element={<GoogleAuthSuccess />} />
          <Route path="/faq" element={<FaqSection />} />
          {/* Private route */}
          <Route element={<UserPrivateroute />}>
            <Route
              path="/cart"
              element={
                <Suspense fallback={<Spiner />}>
                  <Layout>
                    <Carts />
                  </Layout>
                </Suspense>
              }
            />
            <Route
              path="/userprofile"
              element={
                <Suspense fallback={<Spiner />}>
                  <Layout>
                    <Userprofile />
                  </Layout>
                </Suspense>
              }
            />
            <Route
              path="/edituser/:id"
              element={
                <Suspense fallback={<Spiner />}>
                  <Layout>
                    <EditProfile />
                  </Layout>
                </Suspense>
              }
            />
            <Route
              path="/shipping"
              element={
                <Suspense fallback={<Spiner />}>
                  <Layout>
                    <Shipping />
                  </Layout>
                </Suspense>
              }
            />
            <Route
              path="/checkout"
              element={
                <Suspense fallback={<Spiner />}>
                  <Layout>
                    <Checkout />
                  </Layout>
                </Suspense>
              }
            />
            <Route
              path="/payment"
              element={
                <Suspense fallback={<Spiner />}>
                  <Layout>
                    <Payment />
                  </Layout>
                </Suspense>
              }
            />
            <Route
              path="/user-orders"
              element={
                <Suspense fallback={<Spiner />}>
                  <Layout>
                    <Userorders />
                  </Layout>
                </Suspense>
              }
            />
          </Route>

          <Route
            path="/signup"
            element={
              <Suspense fallback={<Spiner />}>
                <Layout>
                  <Signup />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spiner />}>
                <Layout>
                  <Login />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Suspense fallback={<Spiner />}>
                <Layout>
                  <Forgotpassword />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/resetpassword/:id/:token"
            element={
              <Suspense fallback={<Spiner />}>
                <Layout>
                  <Resetpassword />
                </Layout>
              </Suspense>
            }
          />
          <Route path="*" element={<Error />} />
          {/* <Route path="*" element={<Error/>}/> */}
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </Elements>
    </div>
  )
}
