import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { View, Image, ScrollView } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
       <Image 
         source={images.bg} 
         className="absolute w-full z-0"
         />
         <ScrollView 
           className="flex-1 px-5" 
           showsVerticalScrollIndicator={false} 
           contentContainerStyle={{
            minHeight: '100%', 
            paddingBottom: 100 }}>
           <Image 
             source={icons.logo}
             className="w-12 h-10 mt-20 mb-5 mx-auto"
           />
         </ScrollView>
    </View>
  );
}
