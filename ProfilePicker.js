import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // use this if you're using the separate picker package

class ProfilePicker extends Component {
  state = {
    user: 'citizen'
  };

  updateUser = (user) => {
    this.setState({ user });
    if (this.props.onUserChange) {
      this.props.onUserChange(user); // send selected value back to ProfileScreen
    }
  };

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.user}
          onValueChange={this.updateUser}
        >
          <Picker.Item label="Nature Enthusiast" value="nature enthusiast" />
          <Picker.Item label="Family" value="family" />
          <Picker.Item label="Citizen" value="citizen" />
          <Picker.Item label="Senior" value="senior" />
        </Picker>
      </View>
    );
  }
}

export default ProfilePicker;
