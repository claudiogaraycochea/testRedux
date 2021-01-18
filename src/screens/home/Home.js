import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
// import * as action from '../../store/actions';
import { selected_tab } from '../../store/actions';
// import { addTodo, deleteTodo } from '../../store/Actions';

class Home extends Component {

  constructor(){
    super();
    this.state = {
      'badgeid': '',
      'initial': ''
    }
  }

  render() {
    console.log('//////////// HOME');
    const { tabId } = this.props;
    /*console.log('>>>> superheroes: ', superheroes);
    console.log('this.props: ',this.props);*/
    console.log('tabId: ',tabId);

    return (
      <View>
        <Text>Hi 1 </Text>
        <Button
          title="Set with 2"
          onPress={() =>
            this.props.selected_tab('2')
          }
        />

        <Button
          title="Set with 3"
          onPress={() =>
            this.props.selected_tab('3')
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);