import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
// import * as action from '../../store/actions';
import { selected_tab } from '../../store/actions';
// import { addTodo, deleteTodo } from '../../store/Actions';

class Profile extends Component {

  constructor(){
    super();
    this.state = {
      'badgeid': '',
      'initial': ''
    }
  }

  render() {
    console.log('//////////// PROFILE');
    const { tabId } = this.props;
    console.log('Profile: tabId: ',tabId);

    return (
      <View>
        <Text>Profile</Text>
        <Button
          title="Set with 4"
          onPress={() =>
            this.props.selected_tab('4')
          }
        />

        <Button
          title="Set with 5"
          onPress={() =>
            this.props.selected_tab('5')
          }
        />
      </View>
    )
  }
};

const mapStateToProps = state => {
  return {
    superheroes: state.superheroes,
    tabId: state.tabId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selected_tab: (tabId) => {
      return dispatch(selected_tab(tabId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);