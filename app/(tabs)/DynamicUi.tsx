import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  SafeAreaView,
  Platform,
  Button,
  Alert,
} from "react-native";
import CustomButton from "@/components/CustomButton/CustomButton";

import Box from "@/components/FlexBox";

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <SafeAreaView style={styles.SafeContainer}>
      <View style={styles.container}>
        <View
          style={[
            styles.Box,
            {
              width: windowWidth > 500 ? "70%" : "90%",
              height: windowHeight > 500 ? "60%" : "90%",
            },
          ]}
        >
          <Text
            style={styles.Text} //style={{ fontSize: windowWidth > 500 ? 50 : 24 }}
          >
            Welcome !
          </Text>
          <CustomButton title="Press On Me" onPress={() => alert("Press!")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 26 : 0,
  },
  Box: {
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 24,
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 20,
        fontStyle: "italic",
      },
      android: {
        color: "white",
        fontSize: 50,
        fontStyle: "bold",
      },
    }),
  },
});

// <View style={styles.FlexBox}>
//   <Box style={{ backgroundColor: "#ae7a19" }}>Box 1</Box>
//   <Box style={{ backgroundColor: "#b59bdd" }}>Box 2</Box>
//   <Box style={{ backgroundColor: "#3e9b00" }}>Box 3</Box>
//   <Box
//     style={{
//       backgroundColor: "#d79bf0",
//       position: "absolute",
//       top: 0,
//       left: 100,
//     }}
//   >
//     Box 4
//   </Box>
//   <Box style={{ backgroundColor: "#ce9b23" }}>Box 5</Box>
//   <Box style={{ backgroundColor: "#ae9a01" }}>Box 6</Box>
//   <Box style={{ backgroundColor: "#ae2b01" }}>Box 7</Box>
// </View>
// const styles = StyleSheet.create({ r
//   FlexBox: {
//     marginTop: 64,
//     borderColor: "red",
//     borderWidth: 6,
//     flex: 1,

//     // width: 300,
//     flexDirection: "column",
//alignItems: "flex-start",
//flexDirection: "column",
// flexWrap: "wrap",
// alignItems: "center",
// justifyContent: "center",
//flexWrap: "wrap",
//flexDirection: "row",
// alignContent: "space-around",
// rowGap: 20,
//columnGap: 30,
// gap: 30,

// justifyContent: "flex-end",

// height: 375,

//flexDirection: "row-reverse",
//justifyContent: "space-around",

// import { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ImageBackground,
//   ScrollView,
//   Button,
//   Pressable,
//   Modal,
//   StatusBar,
//   ActivityIndicator,
//   Alert,
//   StyleSheet,
// } from "react-native";
// import Greet from "@/components/Greet";
// import Box from "@/components/FlexBox";
// import { Directions } from "react-native-gesture-handler";
// //const LogoImg = require("./ReactProjects/assets/adaptive-icon.png")
// const LogoImg = require("./adaptive-icon.png");
// export default function app() {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="red" barStyle="default" />
//       <ScrollView>
//         {/* <View style={{width:200,height:200, backgroundColor:"brown"}}> */}

//         {/* <Text> <Text style={{color:"white", marginRight:100}}> Hello</Text> World</Text> */}
//         {/* <Image source={LogoImg} style={{width:300, height:300}} />
//     <Image source={{ uri : "https://picsum.photos/700"}} style={{width:300, height:300}}/> */}
//         {/* <ImageBackground source={LogoImg} style={{flex:1}}></ImageBackground> */}
//         <View style={styles.FlexBox}>
//           <Box style={{ backgroundColor: "#ae7a19", flex: 1 }}>Box 1</Box>
//           <Box style={{ backgroundColor: "#b59bdd", flex: 3 }}>Box 2</Box>
//           <Box style={{ backgroundColor: "#3e9b00", flex: 1 }}>Box 3</Box>
//           {/* <Box style={{ backgroundColor: "#d79bf0" }}>Box 4</Box>
//           <Box style={{ backgroundColor: "#ce9b23" }}>Box 5</Box>
//           <Box style={{ backgroundColor: "#ae9a01" }}>Box 6</Box>
//           <Box style={{ backgroundColor: "#ae2b01" }}>Box 7</Box> */}
//         </View>

//         <Button
//           title="support"
//           onPress={() => setModalVisible(true)}
//           color={"midnightblue"}
//         />
//         <Button
//           title="Show Alert"
//           onPress={() =>
//             Alert.alert("Show Alert Msg", "Show the content of the alert")
//           }
//         />
//         {/* <Button
//           title="Show Ok $ cancel"
//           onPress={Alert.alert("Show Alert Msg", "Details of the msg", [
//             {
//               text: "OK",
//               onPress: () => console.log("OK Pressed"),
//             },

//             {
//               text: "Cancel",
//               onPress: () => console.log("Cancel Pressed"),
//             },
//           ])}
//         /> */}
//         <Greet name="John Adam" />
//         <Greet name="Wissam Talal" />
//         <View style={styles.inherites}>
//           <Text style={styles.inheritesText}>
//             Wissam Talal<Text style={styles.inheritesBold}> AbuAresh</Text>
//           </Text>
//         </View>
//         <View style={[styles.Box, styles.LightBluebg, styles.BoxShadow]}>
//           <Text>lightBlueBox</Text>
//         </View>
//         <View style={[styles.Box, styles.LightGreenbg]}>
//           <Text>LightGreenBox</Text>
//         </View>
//         <Pressable onPress={() => console.log("Image Press")}>
//           <Image source={LogoImg} style={{ width: 300, height: 300 }} />
//         </Pressable>
//         <Pressable>
//           <Text>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea
//             neque qui eos sit cum animi omnis minima, nihil ad sapien te
//             voluptatibus veritatis fuga, eius, laboriosam unde l audantium
//             veniam commodi? Lorem ipsum dolor sit amet consectetur, adipisicing
//             elit. Minima obcaecati doloremque magni sed laudantium nobis
//             nesciunt quisquam mollitia, culpa nemo reiciendis odio iure
//           </Text>
//         </Pressable>
//         <Image source={LogoImg} style={{ width: 300, height: 300 }} />
//       </ScrollView>
//       <Modal
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//         animationType="slide" // none , fade, slide
//         presentationStyle="pagesheet" // fullscreen, formsheet, pagesheet
//       >
//         <View style={{ flex: 1, backgroundColor: "midnightblue", padding: 30 }}>
//           <StatusBar backgroundColor="lightgreen" barStyle="light-content" />
//           <ActivityIndicator size="large" color="red" animating={true} />
//           <ScrollView>
//             <Button
//               title="close"
//               color={"plum"}
//               onPress={() => setModalVisible(false)}
//             />
//             <Pressable onPress={() => console.log("Image Press")}>
//               <Image source={LogoImg} style={{ width: 300, height: 300 }} />
//             </Pressable>
//             <Pressable>
//               <Text style={{ color: "white" }}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Corrupti ea neque qui eos sit cum animi omnis minima, nihil ad
//                 sapien te voluptatibus veritatis fuga, eius, laboriosam unde l
//                 audantium veniam commodi? Lorem ipsum dolor sit amet
//                 consectetur, adipisicing elit. Minima obcaecati doloremque magni
//                 sed laudantium nobis nesciunt quisquam mollitia, culpa nemo
//               </Text>
//             </Pressable>
//             <Image source={LogoImg} style={{ width: 300, height: 300 }} />
//           </ScrollView>
//         </View>
//       </Modal>
//     </View>
//   );
//   {
//     /* <View style={{width:200,height:200, backgroundColor:"red"}}></View> */
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "alicblue",
//     color: "white",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "5px",
//   },
//   Box: {
//     width: 100,
//     height: 100,
//     marginHorizontal: 20,
//     marginVertical: 20,
//     borderRadius: 10,
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 30,
//     paddingVertical: 30,
//     borderWidth: 2,
//     borderColor: "black",
//   },
//   LightBluebg: {
//     backgroundColor: "lightblue",
//   },
//   LightGreenbg: {
//     backgroundColor: "lightgreen",
//   },

//   BoxShadow: {
//     shadowColor: "#333333",
//     shadowOffset: { width: 20, height: 20 },
//     shadowOpacity: 0.8,
//     shadowRadius: 90,
//     elevation: 10,
//   },
//   inherites: {
//     backgroundColor: "black",
//   },
//   inheritesText: {
//     color: "white",
//     textAlign: "center",
//   },
//   inheritesBold: {
//     fontWeight: "bold",
//   },
//   FlexBox: {
//     marginTop: 64,
//     borderColor: "red",
//     borderWidth: 6,
//     flex: 1,
//     //flexDirection: "column-reverse",
//     justifyContent: "space-evenly",
//   },
// });
