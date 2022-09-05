import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Pressable,
  ScrollView,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box, Text, VStack, HStack,StatusBar, FlatList, Avatar, Spacer, Heading, Button} from 'native-base';
import DeviceInfo from 'react-native-device-info';
import SplashScreen from 'react-native-splash-screen';
import RNRestart from 'react-native-restart';

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

  const startReload = ()=> RNRestart.Restart();

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
    <Text style={{flex : 1,fontWeight: "bold"}}>Wi-Fi IP Address</Text><Text style={{flex : 1}}>{(Ip == "0.0.0.0") ? "Wi-Fi Not Available" : Ip}</Text>
    </View>
    <View marginTop={10}> 
    <Button backgroundColor={"#00a6ff"} onPress={startReload}>Reload</Button>
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
    <View style={{backgroundColor:"white"}}> 
    <Text style={{textAlign: 'center', fontWeight: "bold"}}>Battery</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Battery Level</Text><Text style={{flex : 1}}>{Math.round(batteryLevel*100)}%</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Battery Status</Text><Text style={{flex : 1}}>{(BatteryCharging == true) ? "Charging" : "Not Charging"}</Text>
    </View>
    <View style={{backgroundColor:"white",marginTop:25}}> 
    <Text style={{textAlign: 'center', fontWeight: "bold"}}>Storage</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Total Disk Capacity</Text><Text style={{flex : 1}}>{(TotalDiskCapacity/1e+9).toFixed(2)} GB</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Used Disk Capacity</Text><Text style={{flex : 1}}>{((TotalDiskCapacity/1e+9)-(FreeDiskStorage/1e+9)).toFixed(2)} GB</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Free Disk Storage</Text><Text style={{flex : 1}}>{(FreeDiskStorage/1e+9).toFixed(2)} GB</Text>
    </View>
    <View style={{backgroundColor:"white",marginTop:25}}> 
    <Text style={{textAlign: 'center', fontWeight: "bold"}}>RAM</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Total Memory</Text><Text style={{flex : 1}}>{(getTotalMemory/1e+9).toFixed(2)} GB</Text>
    </View>
    <View style={styles.LineBorderwhite}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Used Memory</Text><Text style={{flex : 1}}>{(getUsedMemory/1e+9).toFixed(2)} GB</Text>
    </View>
    <View style={styles.LineBorder}> 
    <Text style={{flex : 1,fontWeight: "bold"}}>Free Memory</Text><Text style={{flex : 1}}>{(((getTotalMemory)-(getUsedMemory))/1e+9).toFixed(2)} GB</Text>
    </View>
  </ScrollView>
    </View>
  )
}

const FourthRoute = () => {
  const data = [
    {
      fullName: "Muhammad Shahbaz Abdul Aziz",
      recentText: "CSC-19F-100",
      avatarUrl:
        "https://i.ibb.co/3RZY2SV/205248809-3003087506646312-7082831507477165500-n2.jpg"
    },
    {
      fullName: "Mubashir Aslam",
      recentText: "CSC-19F-096",
      avatarUrl:"https://i.ibb.co/vm6M9xt/pp.jpg"
    },
    {
      fullName: "Zeeshan Ashraf",
      recentText: "CSC-19F-106",
      avatarUrl: "https://i.ibb.co/WKyjvdS/pp-1.jpg"
    }
  ]
  return (
    <View style={{flex:1,backgroundColor:"#E8E8E8"}}>
    <Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
        
      <Heading fontSize="xl" p="4" pb="3">
        About App
      </Heading>
            
            <HStack px={4} space={3} justifyContent="space-between">
              <Avatar backgroundColor={"blue.400"}
                size="48px"
                source={{
                  uri: "https://i.ibb.co/mBvwHPz/ic-launcher-round.png"
                }}
              />
              <VStack>
                <Text style={{fontWeight:"bold", fontSize:20}}>
                  Devicify 1.0
                </Text>
                <Text marginRight={20}>
                Devicify(Device info application) is an app that provides you with the information
                you need to know about your phone, system, and hardware with a simple and easy-to-use
                interface.
                </Text>
              </VStack>
              <Spacer />
            </HStack>

      <Heading fontSize="xl" p="4" pb="3">
        Group Members
      </Heading>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
            </HStack>
          </Box>
        )}
      />
    </Box>
    </View>
  )
}

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
          const color = index === i ? 'white' : '#a1a1aa';
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

