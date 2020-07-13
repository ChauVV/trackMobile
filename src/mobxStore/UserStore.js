import { observable, action } from 'mobx';
// import AsyncStore from 'react-native-simple-store';
// import ServerApis from 'mobxStore/api';
// import JWT from 'react-native-pure-jwt';
class User {
  @observable name = 'John';

  @action logout = () => {
    // NaviStore.pushToLogin();
  };

  @action login = async (username, password) => {
    try {
    } catch (error) {}
  };
}

const UserStore = new User();
export default UserStore;
