import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { Modal, Dimensions, View } from "react-native";

import animatedLogo from '../../assets/splash_animation.json';
import { NavigationType } from "./SplashScreenTypes";
import { ROUTES } from "../../constants";
import styles from "./SplashScreenStyles";

const { height, width } = Dimensions.get('window');

const Splashscreen = () => {
    const navigation = useNavigation<NavigationType>();
    const closeSplashScreen = () => {
        navigation.navigate(ROUTES.Home);
    };

    return (
        <Modal animationType="fade">
            <View style={styles.mainContainer}>
                <LottieView
                    style={{
                        width: width + 50,
                        height: height,
                        marginLeft: -25
                    }}
                    source={animatedLogo}
                    resizeMode="cover"
                    loop={false}
                    autoPlay
                    onAnimationFinish={closeSplashScreen}
                    />
            </View>
        </Modal>
    );
}

export default Splashscreen;