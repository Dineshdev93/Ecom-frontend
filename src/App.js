import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Productpage from "./pages/Productpage/Productpage";
import { Routes, Route } from "react-router-dom";
import Productdetailspage from "./pages/ProductDetailpage/Productdetailspage";
import Carts from "./pages/Carts/Carts";
import Userprofile from "./pages/Userprofile/Userprofile";
import Login from "./pages/Userauth/Login";
import Signup from "./pages/Userauth/Signup";
import Resetpassword from "./pages/Userauth/Resetpassword";
import Forgotpassword from "./pages/Userauth/Forgotpassword";
import Shipping from "./pages/Shipping/Shipping";
import Checkout from "./pages/Checkout/Checkout";
import Userorders from "./pages/Userorders/Userorders";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminCommonlayout from "./pages/Admin/AdminCommonlayout";
import Admindashboard from "./pages/Admin/Admindashboard";
import Adminproducts from "./pages/Admin/Adminproducts";
import Adminaddproduct from "./pages/Admin/Adminaddproduct";
import ProductCategory from "./pages/Admin/ProductCategory";
import Orders from "./pages/Admin/Orders";
import Payment from "./pages/Payment/Payment";
import { Slide, ToastContainer } from "react-toastify";
import Protectroute from "./components/Protectedroute/Protectroute";
import { UserPrivateroute } from "./components/Protectedroute/UserprivateRoute";
import Error from "./Error";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Terms from "./pages/Policy/Terms";
import Privacypolicy from "./pages/Policy/Privacypolicy";
import Showproducts from "./pages/ShowNestedproducts/Showproducts";
import ScrolltoTop from "./components/Scrolling/ScrolltoTop";
<<<<<<< HEAD
import EditProfile from "./pages/Editprofile/EditProfile";

=======
import FaqSection from './components/FaqSection/Faqsection'
>>>>>>> 38d66fecdc6393218b83fb05f22fff09a4714b32
function App() {
  const stripePromise = loadStripe(
    "pk_test_51R6qZVCcd2S0N0mjyQZlETJo5M6MEBAd9JmuvTf3BqqBjzjBeoRyR3b7ePoUQm0Fiob6gmTCpg0HJXYzpzYDBNH7003usjOJjs"
  );

  return (
    <div className="App ">
      <Elements stripe={stripePromise}>
        <ScrolltoTop/>
       
        <Routes>
          {/* Admin Routes */}
          {/* use of protected routes */}
          <Route path="/admin/*" element={<Protectroute />}>
            <Route path="dashboard" element={<AdminCommonlayout><Admindashboard /></AdminCommonlayout>}/>
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
              <Layout>
                <Home />
              </Layout> 
            }
          />
          <Route
            path="/products"
            element={
              <Layout>
                <Productpage />
              </Layout>
            }
          />
          <Route
            path="/productsdetail/:id"
            element={
              <Layout>
                <Productdetailspage />
              </Layout>
            } 
          />
          <Route
            path="/productsdetail/:id/showProducts/:id"
            element={
              <Layout>
                <Showproducts />
              </Layout>
            }
          />
          <Route
            path="/terms"
            element={
              <Layout>
                <Terms/>
              </Layout>
            }
          />
          <Route
            path="/privacy"
            element={
              <Layout>
                <Privacypolicy/>
              </Layout>
            }
          />
           <Route path="/faq" element={<FaqSection/>}/>
          {/* Private route */}
          <Route element={<UserPrivateroute />}>
            <Route
              path="/cart"
              element={
                <Layout>
                  <Carts />
                </Layout>
              }
            />
            <Route
              path="/userprofile"
              element={
                <Layout>
                  <Userprofile />
                </Layout>
              }
            />
            <Route
              path="/edituser/:id"
              element={
                <Layout>
                    <EditProfile/>
                </Layout>
              }
            />
            <Route
              path="/shipping"
              element={
                <Layout>
                  <Shipping />
                </Layout>
              }
            />
            <Route
              path="/checkout"
              element={
                <Layout>
                  <Checkout />
                </Layout>
              }
            />
            <Route
              path="/payment"
              element={
                <Layout>
                  <Payment />
                </Layout>
              }
            />
            <Route
              path="/user-orders"
              element={
                <Layout>
                  <Userorders />
                </Layout>
              }
            />
          </Route>

          <Route
            path="/signup"
            element={
              <Layout>
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Layout>
                <Forgotpassword />
              </Layout>
            }
          />
          <Route
            path="/resetpassword/:id/:token"
            element={
              <Layout>
                <Resetpassword />
              </Layout>
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
  );
}
export default App;
