// import { restaurants } from "../../constants/mock";
import { Layout } from "../Layout/Layout";
import { Restaurants } from "../Restaurants/Restaurants";
import { ScrollProgressBar } from "../ScrollProgressBar/ScrollProgressBar";
import { ThemeContextProvider } from "../ThemeContext/ThemeContextProvider";
import { UserContextProvider } from "../UserContext/UserContextProvider";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

import './reset.css';
import './global.css';

const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <ScrollProgressBar />
            <h1>Restaurants</h1>
            <Restaurants />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
}

export default App;