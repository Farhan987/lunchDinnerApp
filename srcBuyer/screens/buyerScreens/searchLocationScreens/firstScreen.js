import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Alert,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Container, Content, Icon, Button, Right, Left, Text} from 'native-base';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import CustomHeader from '../../../components/customComponents/customHeader';
import {LARGE, MEDIUM} from '../../../font/font';
import {WHITE_COLOR} from '../../../theme/color';
import CustomSearchBar from '../../../components/customComponents/customSearchBar';
import SearchLocationModal from '../../../components/popups/searchLocationModal';

export default class FirstScreen extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <Container>
        <CustomHeader headerTitle={'Search Meals'} />
        <Content>
          <CustomSearchBar
            placeholderText={'Search any Location'}
            backgroundColor={WHITE_COLOR}
          />
          <TouchableOpacity style={styles.barsButtonStyle}>
            <Icon style={{color: 'grey'}} name="compass" />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            presentationStyle="pageSheet"
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <SearchLocationModal
              setModalVisible={() =>
                this.setModalVisible(!this.state.modalVisible)
              }
            />
          </Modal>

          <MapView
            provider={PROVIDER_GOOGLE}
            style={{width: '100%', height: 500}}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              onPress={() => {
                this.setModalVisible(true);
              }}
              coordinate={{latitude: 37.78825, longitude: -122.4324}}
              title={'Location 1'}
              description={'Location 1 Description'}
            />
            <Marker
              onPress={() => {
                this.setModalVisible(true);
              }}
              coordinate={{latitude: 37.7886, longitude: -122.436}}
              title={'Location 2'}
              description={'Location 2 Description'}
            />

            <Marker
              onPress={() => {
                this.setModalVisible(true);
              }}
              coordinate={{latitude: 37.7899, longitude: -122.435}}
              title={'Location 3'}
              description={'Location 3 Description'}
            />

            <Marker
              onPress={() => {
                this.setModalVisible(true);
              }}
              coordinate={{latitude: 37.7895, longitude: -122.431}}
              title={'Location 4'}
              description={'Location 4 Description'}
            />
            <Marker
              onPress={() => {
                this.setModalVisible(true);
              }}
              coordinate={{latitude: 37.7891, longitude: -122.428}}
              title={'Location 5'}
              description={'Location 5 Description'}
            />
          </MapView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  barsButtonStyle: {
    position: 'absolute',
    zIndex: 999,
    right: 20,
    top: 70,
    backgroundColor: WHITE_COLOR,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
