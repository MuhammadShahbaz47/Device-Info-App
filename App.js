import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Pressable,
  ScrollView
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box, Text, Center, VStack, HStack, Button, IconButton, Icon, StatusBar} from 'native-base';
import DeviceInfo from 'react-native-device-info';
import SplashScreen from 'react-native-splash-screen'

function AppBar(){
  return (
    <>
        {/* <StatusBar backgroundColor="#00a6ff" barStyle="light-content" /> */}

        <HStack bg='#00a6ff' px="5" py="3" justifyContent='space-between' alignItems='center'>
          <HStack alignItems='center'>
            <Text color="white" fontSize="20" fontWeight='bold'>Devicify :</Text>
            <Text px="2" color="white" fontSize="20" fontWeight='300'>The Device Info App</Text>
          </HStack>
        </HStack>

    </>
  )
}

const FirstRoute = () => {

  const [deviceName, setDeviceName] = useState("")
  const [Emulator, setisEmulator] = useState()
  const [isHeadphonesConnected, setisHeadphonesConnected] =useState()

  let manufacturer = DeviceInfo.getManufacturerSync();
  let appName = DeviceInfo.getApplicationName();
  let getVersion = DeviceInfo.getVersion();
  let batteryLevel = DeviceInfo.useBatteryLevel();
  let model = DeviceInfo.getModel();

  DeviceInfo.getDeviceName().then((result) => {
      setDeviceName(result)
    });
  DeviceInfo.isEmulator().then((result) => {
      setisEmulator(result)
  });
  DeviceInfo.isHeadphonesConnected().then((enabled) => {
      setisHeadphonesConnected(enabled)
  });
  DeviceInfo.getIpAddress().then((ip) => {
    // "92.168.32.44"
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
  let Ip = DeviceInfo.getIpAddressSync();
  let FreeDiskStorage = DeviceInfo.getFreeDiskStorageSync();
  let TotalDiskCapacity = DeviceInfo.getTotalDiskCapacitySync();
  let getTotalMemory = DeviceInfo.getTotalMemorySync();
  let getUsedMemory = DeviceInfo.getUsedMemorySync();
  let BatteryCharging = DeviceInfo.isBatteryChargingSync();
  let GMS = DeviceInfo.hasGmsSync();
  let HMS = DeviceInfo.hasHmsSync();
  let LocationEnabled = DeviceInfo.isLocationEnabledSync()
  let hasNotch = DeviceInfo.hasNotch();
  let isMouseConnected = DeviceInfo.isMouseConnectedSync();
  let isLandscape = DeviceInfo.isLandscapeSync();
  let isPinOrFingerprintSet = DeviceInfo.isPinOrFingerprintSetSync()
  let isKeyboardConnected = DeviceInfo.isKeyboardConnectedSync();
  let isAirplaneMode = DeviceInfo.isAirplaneModeSync();

return (
<View style={{flex:1,backgroundColor:"#E8E8E8"}}>
  <ScrollView style={{margin:4,marginLeft:12,marginRight:12}}>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Manufacturer</Text><Text style={{flex : 1}}>{manufacturer}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100, padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>App Name & Version</Text><Text style={{flex : 1}}>{appName} {getVersion}</Text>
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
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Id</Text><Text style={{flex : 1}}>{deviceId}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Headphones Connected</Text><Text style={{flex : 1}}>{String(isHeadphonesConnected)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Wi-Fi IP Address</Text><Text style={{flex : 1}}>{Ip}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Free Disk Storage</Text><Text style={{flex : 1}}>{(FreeDiskStorage/1e+9).toFixed(2)} GB</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Total Disk Capacity</Text><Text style={{flex : 1}}>{(TotalDiskCapacity/1e+9).toFixed(2)} GB</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Total Memory</Text><Text style={{flex : 1}}>{(getTotalMemory/1e+9).toFixed(2)} GB</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Used Memory</Text><Text style={{flex : 1}}>{(getUsedMemory/1e+9).toFixed(2)} GB</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Battery Status</Text><Text style={{flex : 1}}>{(BatteryCharging == true) ? "Charging" : "Not Charging"}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Google Mobile Services</Text><Text style={{flex : 1}}>{String(GMS)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Huawei Mobile Services</Text><Text style={{flex : 1}}>{String(HMS)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Location Enabled</Text><Text style={{flex : 1}}>{String(LocationEnabled)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Notch</Text><Text style={{flex : 1}}>{String(hasNotch)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Mouse Connected</Text><Text style={{flex : 1}}>{String(isMouseConnected)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Is Landscape</Text><Text style={{flex : 1}}>{String(isLandscape)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Is PinOrFingerprintSet</Text><Text style={{flex : 1}}>{String(isPinOrFingerprintSet)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Is KeyboardConnected</Text><Text style={{flex : 1}}>{String(isKeyboardConnected)}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1, backgroundColor:"white"}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Airplane Mode</Text><Text style={{flex : 1}}>{(isAirplaneMode == true) ? "On" : "Off"}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row", maxHeight:100,padding:1}}> 
    <Text style={{flex : 1,fontWeight: "bold"}}></Text><Text style={{flex : 1}}></Text>
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
  useEffect(() => SplashScreen.hide());

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'General' },
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
          const borderColor = index === i ? '#00a6ff' : 'coolGray.200';

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
            <AppBar/>
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


