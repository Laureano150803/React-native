import Index from "./src/components/Index";
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigations/NavigationTabs.js'
import store from "./store/store";
import { Provider } from "react-redux";


export default function App() {
  return (
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
  );
}

