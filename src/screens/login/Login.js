import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class Login extends Component {

  constructor(){
    super();
    this.state = {
      'badgeid': '',
      'initial': ''
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Login page</Text>
        <Button
          title="Go to home"
          onPress={() =>
            navigation.navigate('Home')
          }
        />
        <Button
          title="Go to Profile"
          onPress={() =>
            navigation.navigate('Profile')
          }
        />
      </View>
    )
  }
};

const mapStateToProps = (state) => {
  const { subjects } = state
  return { subjects }
};

export default connect(mapStateToProps)(Login);

// export default (Login);