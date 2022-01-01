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

  let manufacturer = DeviceInfo.getManufacturerSync();
  let appName = DeviceInfo.getApplicationName();
  let getVersion = DeviceInfo.getVersion();
  let model = DeviceInfo.getModel();
  let deviceName = DeviceInfo.getDeviceNameSync()
  let isTablet = DeviceInfo.isTablet();
  let UniqueId = DeviceInfo.getUniqueId();
  let deviceId = DeviceInfo.getDeviceId();
  let brand = DeviceInfo.getBrand();
  let deviceType = DeviceInfo.getDeviceType();
  let Ip = DeviceInfo.getIpAddressSync();
  // deviceJSON.batteryLevelIsLow = useBatteryLevelIsLow();

return (
<View style={{flex:1,backgroundColor:"#E8E8E8"}}>
  <ScrollView style={{margin:4,marginLeft:12,marginRight:12}}>
    <View style={styles.LineBorder}>
    <Text style={{flex : 1,fontWeight: "bold"}}>App Name & Version</Text><Text style={{flex : 1}}>{appName} {getVersion}</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Manufacturer</Text><Text style={{flex : 1}}>{manufacturer}</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Name</Text><Text style={{flex : 1}}>{deviceName}</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Tablet</Text><Text style={{flex : 1}}>{String(isTablet)}</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Unique Id</Text><Text style={{flex : 1}}>{UniqueId}</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Brand</Text><Text style={{flex : 1}}>{brand}</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Type</Text><Text style={{flex : 1}}>{deviceType}</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Model</Text><Text style={{flex : 1}}>{model}</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Device Id</Text><Text style={{flex : 1}}>{deviceId}</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Wi-Fi IP Address</Text><Text style={{flex : 1}}>{Ip}</Text>
    </View>
  </ScrollView>
</View>
)
}
const SecondRoute = () => {

  let Emulator = DeviceInfo.isEmulatorSync()
  let isHeadphonesConnected = DeviceInfo.isHeadphonesConnectedSync()
  let Carrier = DeviceInfo.getCarrierSync()
  let hasCamera = DeviceInfo.isCameraPresentSync();
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
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Running on Emulator</Text><Text style={{flex : 1}}>{(Emulator == true) ? "Yes" : "No"}</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Network Operator</Text><Text style={{flex : 1}}>{Carrier}</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Camera</Text><Text style={{flex : 1}}>{(hasCamera == true) ? "Found" : "Not Found"}</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Headphones</Text><Text style={{flex : 1}}>{(isHeadphonesConnected == true) ? "Connected" : "Not Connected"}</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Google Mobile Services</Text><Text style={{flex : 1}}>{(GMS == true) ? "Available" : "Not Available"}</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Huawei Mobile Services</Text><Text style={{flex : 1}}>{(HMS == true) ? "Available" : "Not Available"}</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Location</Text><Text style={{flex : 1}}>{(LocationEnabled == true) ? "On" : "Off"}</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Notched Device</Text><Text style={{flex : 1}}>{(hasNotch == true) ? "Yes" : "No Notch Found"}</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Mouse Connected</Text><Text style={{flex : 1}}>{(isMouseConnected == true) ? "Connected" : "Not Connected"}</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Landscape Mode</Text><Text style={{flex : 1}}>{(isLandscape == true) ? "On" : "Off"}</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>PIN or FINGERPRINT</Text><Text style={{flex : 1}}>{(isPinOrFingerprintSet == true) ? "Found" : "Not Found"}</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Keyboard</Text><Text style={{flex : 1}}>{(isKeyboardConnected == true) ? "Connected" : "Not Connected"}</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Airplane Mode</Text><Text style={{flex : 1}}>{(isAirplaneMode == true) ? "On" : "Off"}</Text>
    </View>
  </ScrollView>
</View>
  )
}

const ThirdRoute = () => {

  let batteryLevel = DeviceInfo.useBatteryLevel();
  let FreeDiskStorage = DeviceInfo.getFreeDiskStorageSync();
  let TotalDiskCapacity = DeviceInfo.getTotalDiskCapacitySync();
  let getTotalMemory = DeviceInfo.getTotalMemorySync();
  let getUsedMemory = DeviceInfo.getUsedMemorySync();
  let BatteryCharging = DeviceInfo.isBatteryChargingSync();

  return(
    <View style={{flex:1,backgroundColor:"#E8E8E8"}}>
  <ScrollView style={{margin:4,marginLeft:12,marginRight:12}}>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Battery Level</Text><Text style={{flex : 1}}>{Math.round(batteryLevel*100)}%</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Battery Status</Text><Text style={{flex : 1}}>{(BatteryCharging == true) ? "Charging" : "Not Charging"}</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Free Disk Storage</Text><Text style={{flex : 1}}>{(FreeDiskStorage/1e+9).toFixed(2)} GB</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Total Disk Capacity</Text><Text style={{flex : 1}}>{(TotalDiskCapacity/1e+9).toFixed(2)} GB</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Total Memory</Text><Text style={{flex : 1}}>{(getTotalMemory/1e+9).toFixed(2)} GB</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Used Memory</Text><Text style={{flex : 1}}>{(getUsedMemory/1e+9).toFixed(2)} GB</Text>
    </View>
  </ScrollView>
    </View>
  )
}

const FourthRoute = () => <Center flex={1}>Developed by M.Shahbaz </Center>;

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
    { key: 'second', title: 'Services' },
    { key: 'third', title: 'Hardware' },
    { key: 'fourth', title: 'About Us' },
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

const styles = StyleSheet.create({
  LineBorder:{
    flex:1, 
    flexDirection:"row",
    maxHeight:100,
    padding:1
  },
  LineBorderwhite:{
    flex:1, 
    flexDirection:"row",
    maxHeight:100,
    padding:1,
    backgroundColor:"white"
  }
});

