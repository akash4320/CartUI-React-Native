import React, {PureComponent} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import CardSilder from 'react-native-cards-slider';
import {BottomNavigation} from 'react-native-paper';

const App=()=>{
    const ordersRoute = () => <View></View>;

    const favoriteRoute = () =><View></View>;

    const cartRoute = () => <View></View>;
     const homeRoute =()=><View></View>;
    const renderScene = BottomNavigation.SceneMap({
      home:homeRoute,
      orders: ordersRoute,
      favorite: favoriteRoute,
      cart: cartRoute,
    });

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      {key: 'home', title: 'Home', icon: 'home-flood'},
      {key: 'orders', title: 'Orders', icon: 'order-bool-ascending-variant'},
      {key: 'favorite', title: 'Favorite', icon: 'heart-multiple'},
      {key: 'cart', title: 'My Cart', icon: 'cart-arrow-right'}
    ]);

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            margin: 2,
            marginVertical: 5,
          }}>
          <View
            style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./Assets/avatar.png')} />
          </View>
          <View
            style={{flex: 7, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Welcome to 86
            </Text>
          </View>
          <View
            style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./Assets/bell.png')} />
          </View>
        </View>
        <View style={{height: 25, marginLeft: 25, marginTop: 10}}>
          <Text style={{color: 'gray', fontStyle: 'italic'}}>
            Find Your Daily Goods
          </Text>
        </View>
        <View style={{height: 70, flexDirection: 'row'}}>
          <View style={{flex: 10, justifyContent: 'center'}}>
            <View
              style={{
                height: 50,
                width: 250,
                backgroundColor: '#dedfe2',
                marginLeft: 25,
                borderRadius: 10,
                alignItems: 'center',
                paddingLeft: 10,
                flexDirection: 'row',
              }}>
              <View>
                <Image source={require('./Assets/search.png')} />
              </View>
              <View style={{paddingLeft: 20}}>
                <Text style={{fontSize: 18}}>Search Here...</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 2.5, justifyContent: 'center'}}>
            <Image source={require('./Assets/filter.png')} />
          </View>
        </View>
        <View style={{height: 120, flexDirection: 'row'}}>
          <View style={{flex: 8, alignItems: 'center'}}>
            <View
              style={{
                height: 110,
                width: 315,
                backgroundColor: '#fff0b1',
                borderRadius: 15,
                flexDirection: 'row',
              }}>
              <View style={{flex: 2, alignItems: 'center', marginTop: 20}}>
                <Image source={require('./Assets/icon.png')} />
              </View>
              <View style={{flex: 8, marginTop: 15}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Complete your profile
                </Text>
                <Text style={{fontStyle: 'italic'}}>
                  Order to complete your registration kindly update your profile
                </Text>
              </View>
              <View style={{flex: 2, marginTop: 16}}>
                <Image source={require('./Assets/icon2.png')} />
              </View>
            </View>
          </View>
        </View>
        <View style={{height: 40, flexDirection: 'row'}}>
          <View style={{flex: 9}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 25}}>
              Promotions
            </Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 15}}>
              See all
            </Text>
          </View>
        </View>
        <View style={{height: 140}}>
          <CardSilder>
            <Image
              style={{height: 135, borderRadius: 15}}
              source={require('./Assets/Banner2.png')}
            />
            <Image
              style={{height: 135, borderRadius: 15}}
              source={require('./Assets/Banner2.png')}
            />
            <Image
              style={{height: 135, borderRadius: 15}}
              source={require('./Assets/Banner2.png')}
            />
            <Image
              style={{height: 135, borderRadius: 15}}
              source={require('./Assets/Banner2.png')}
            />
          </CardSilder>
        </View>

        <View style={{height: 100, flexDirection: 'row'}}>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./Assets/Vegetables.png')} />
            <Text style={{fontSize: 12}}>Vegetables</Text>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./Assets/fish.png')} />
            <Text style={{fontSize: 12}}>Fish</Text>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./Assets/fruits.png')} />
            <Text style={{fontSize: 12}}>Fruits</Text>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./Assets/meat.png')} />
            <Text style={{fontSize: 12}}>Meat</Text>
          </View>
        </View>

        <View style={{height: 100, flexDirection: 'row'}}>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./Assets/grocery.png')} />
            <Text style={{fontSize: 12}}>Grocery</Text>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./Assets/spice.png')} />
            <Text style={{fontSize: 12}}>Spice</Text>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./Assets/cleaning.png')} />
            <Text style={{fontSize: 12}}>Cleaning</Text>
          </View>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./Assets/oil.png')} />
            <Text style={{fontSize: 12}}>Oil</Text>
          </View>
        </View>

        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </View>
    );
  }


export default App;
