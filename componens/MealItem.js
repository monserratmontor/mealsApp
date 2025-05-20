import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native"
import { useNavigation} from '@react-navigation/native'
import MealDetails from "./MealDetals"

function MealItem({ id, title, imageUrl, duration, cosplexity, affordability}) {
    console.log('title', title)
    console.log('imageUrl', imageUrl)

    const navigation = useNavigation()

    function selectMealItemHandler(){
        navigation.navigate('MealDetail', {mealId: id})
    }

    return(
        <view style={Styles.MealItem}>
            <Pressable
            android_ripple={{ color: '#ccc'}}
            style={({ pressed}) => (pressed ? styles.buttonPressed: null)}
            onPress={selectMealItemHandler}
            >
                <view>
                    <view>
                        <image
                        source={{url: imageUrl}}
                        style={styles.image}
                        />
                        <Text style={styles.title}

                    </view>
                </view>
            </Pressable>
        </view>
    )
    
}