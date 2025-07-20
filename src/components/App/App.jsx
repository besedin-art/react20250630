import { restaurants } from "../../constants/mock";
import { Layout } from "../Layout/Layout";
import { Restaurants } from "../Restaurants/Restaurants";
import { ScrollProgressBar } from "../ScrollProgressBar/ScrollProgressBar";
import { ThemeContextProvider } from "../ThemeContext/ThemeContextProvider";
import { UserContextProvider } from "../UserContext/UserContextProvider";

import './reset.css';
import './global.css';

const App = () => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <ScrollProgressBar />
          <h1>Restaurants</h1>
          <Restaurants restaurants={restaurants} />
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;