import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
  ScrollView
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box, Text, Center} from 'native-base';
import DeviceInfo from 'react-native-device-info';



const FirstRoute = () => {

  const [deviceName, setDeviceName] = useState("")
  const [Emulator, setisEmulator] = useState()

  let manufacturer = DeviceInfo.getManufacturerSync();
  let appName = DeviceInfo.getApplicationName();
  let batteryLevel = DeviceInfo.useBatteryLevel();
  let model = DeviceInfo.getModel();

  DeviceInfo.getDeviceName().then((result) => {
      setDeviceName(result)
    });
  DeviceInfo.isEmulator().then((result) => {
      setisEmulator(result)
  });

  // deviceJSON.batteryLevelIsLow = useBatteryLevelIsLow();
  let isTablet = DeviceInfo.isTablet();
  let UniqueId = DeviceInfo.getUniqueId();
  let deviceId = DeviceInfo.getDeviceId();
  let brand = DeviceInfo.getBrand();
  let deviceType = DeviceInfo.getDeviceType();
  let Carrier = DeviceInfo.getCarrierSync()
  let batteryStatus = DeviceInfo.isBatteryChargingSync();
  let hasCamera = DeviceInfo.isCameraPresentSync();

return (
<View style={{flex:1,backgroundColor:"#E8E8E8"}}>
  <ScrollView style={{margin:4,marginLeft:12,marginRight:12}}>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Manufacturer</Text><Text style={{flex : 1}}>{manufacturer}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100, padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>App name</Text><Text style={{flex : 1}}>{appName}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Battery Level</Text><Text style={{flex : 1}}>{Math.round(batteryLevel*100)}%</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Name</Text><Text style={{flex : 1}}>{deviceName}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Running on Emulator:</Text><Text style={{flex : 1}}>{String(Emulator)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Tablet:</Text><Text style={{flex : 1}}>{String(isTablet)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Unique Id:</Text><Text style={{flex : 1}}>{UniqueId}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Brand</Text><Text style={{flex : 1}}>{brand}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Type</Text><Text style={{flex : 1}}>{deviceType}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Network Operator</Text><Text style={{flex : 1}}>{Carrier}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Battery Status</Text><Text style={{flex : 1}}>{String(batteryStatus)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Is Camera Present</Text><Text style={{flex : 1}}>{String(hasCamera)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Model</Text><Text style={{flex : 1}}>{model}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Id</Text><Text style={{flex : 1}}>{deviceId}</Text>
    </View>
  </ScrollView>
</View>
)
}
const SecondRoute = () => <Center flex={1}>This is Tab 2</Center>;

const ThirdRoute = () => <Center flex={1}>This is Tab 3</Center>;

const FourthRoute = () => <Center flex={1}>This is Tab 4 </Center>;

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Tab 1' },
    { key: 'second', title: 'Tab 2' },
    { key: 'third', title: 'Tab 3' },
    { key: 'fourth', title: 'Tab 4' },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? '#1f2937' : '#a1a1aa';
          const borderColor = index === i ? 'cyan.500' : 'coolGray.200';

          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ marginTop: StatusBar.currentHeight }}
      />
    </NativeBaseProvider>
  );
}


