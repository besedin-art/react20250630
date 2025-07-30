// import { restaurants } from "../../constants/mock";
import { Layout } from "../Layout/Layout";
import { IndexPage } from "../../pages/IndexPage/IndexPage";
import { RestaurantsLayout } from "../../Layouts/RestaurantsLayout";
import { RestaurantsPage } from "../../pages/RestaurantsPage/RestaurantsPage";
import { RestaurantPage } from "../../pages/RestaurantPage/RestaurantPage";
import { RestaurantMenuContainer } from "../RestaurantMenu/RestaurantMenuContainer";
import { RestaurantReviewsContainer } from "../RestaurantReviews/RestaurantReviewsContainer";
import { DishPage } from "../../pages/DishPage/DishPage";
import { ThemeContextProvider } from "../ThemeContext/ThemeContextProvider";
import { UserContextProvider } from "../UserContext/UserContextProvider";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate } from "react-router";
import { Routes, Route } from "react-router";

import './reset.css';
import './global.css';

const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<IndexPage />} />
                <Route path="/restaurants" element={<RestaurantsLayout />}>
                  <Route index element={<RestaurantsPage />} />
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" />} />
                    <Route path="menu" element={<RestaurantMenuContainer />} />
                    <Route path="reviews" element={<RestaurantReviewsContainer />} />
                  </Route>
                </Route>
                <Route path="dish/:dishId" element={<DishPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
}

export default App;