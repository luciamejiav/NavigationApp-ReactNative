import React from "react";  
import { View, Text,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {

    const navigation = useNavigation();

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity
            onPress={ () => navigation.navigate('Stack')}
                style = {{
                    backgroundColor: "green",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignItems: 'center',
                    borderRadius: 10
                }}
            >
                <Text
                    style = {{
                        fontSize: 15,
                        textAlign: 'center',
                        color: "white"
                    }}
                >
                    Go to stack scren
                </Text>

            </TouchableOpacity>
        </View>
    )
}


