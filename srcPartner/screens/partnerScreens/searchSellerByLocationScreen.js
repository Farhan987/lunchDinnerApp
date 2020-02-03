import React, {Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Container, Tab, Tabs, TabHeading, Text} from 'native-base';
import {WHITE_COLOR, SCREEN_BG_COLOR} from '../../theme/color';
import CustomHeader from '../../components/customComponents/customHeader';
import CustomPartnerInfoComponent from '../../components/customComponents/customPartnerInfo';
import CustomSearchBar from '../../components/customComponents/customSearchBar';
import CustomButton from '../../components/customComponents/customButton';

export default class SearchSellerByLocationScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader
          onPressMenu={() => this.props.navigation.toggleDrawer()}
        />
        <Tabs tabBarUnderlineStyle={{backgroundColor: SCREEN_BG_COLOR}}>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: WHITE_COLOR}}>
                <Text style={{color: SCREEN_BG_COLOR}}>All</Text>
              </TabHeading>
            }>
            <ScrollView>
              <CustomPartnerInfoComponent
                buttonText={'View Meals'}
                onPressViewMeals={() =>
                  this.props.navigation.navigate('PartnerAddToCartScreen')
                }
              />
              <CustomPartnerInfoComponent
                buttonText={'View Meals'}
                onPressViewMeals={() =>
                  this.props.navigation.navigate('PartnerAddToCartScreen')
                }
              />
              <CustomPartnerInfoComponent
                buttonText={'View Meals'}
                onPressViewMeals={() =>
                  this.props.navigation.navigate('PartnerAddToCartScreen')
                }
              />
              <CustomPartnerInfoComponent
                buttonText={'View Meals'}
                onPressViewMeals={() =>
                  this.props.navigation.navigate('PartnerAddToCartScreen')
                }
              />
            </ScrollView>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: WHITE_COLOR}}>
                <Text style={{color: SCREEN_BG_COLOR}}>Search by Loc</Text>
              </TabHeading>
            }>
            <CustomSearchBar
              searchBarWidth={'70%'}
              searchBarHeight={35}
              placeholderText={'Search any Location'}
            />
            <CustomSearchBar
              searchBarWidth={'70%'}
              searchBarHeight={35}
              placeholderText={'Search by Name'}
            />
            <View style={{height: 10}} />

            <CustomButton
              width={'30%'}
              height={30}
              text="Filter"
              mainButtonBgColor={SCREEN_BG_COLOR}
            />

            <ScrollView>
              <CustomPartnerInfoComponent
                buttonText={'View Meals'}
                onPressViewMeals={() =>
                  this.props.navigation.navigate('PartnerAddToCartScreen')
                }
              />
            </ScrollView>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  pageTitleViewStyle: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
});
