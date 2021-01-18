import Login from '../screens/login/Login';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';

const Routes = {
  Login: { screen: Login },
  Home: { screen: Home }
}

const commonScreens = {
  /*Login: Login,
  Home: Home,*/
};

const authScreens = {
  Login: Login,
  Home: Home,
  Profile: Profile,
};

const userScreens = {
  /*Login: Login,
  Home: Home,*/
};

export {commonScreens, authScreens, userScreens};