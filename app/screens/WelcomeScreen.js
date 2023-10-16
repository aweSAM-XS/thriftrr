import {
    ImageBackground,
    StyleSheet,
    Text,
    Image,
    View,
    Button,
} from 'react-native';

export default function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}>
            <View>
                <Image
                    style={styles.image}
                    source={require('../assets/logo-red.png')}
                />
                <Text style={styles.text}>It's time to get Thrifty</Text>
            </View>
            <View style={styles.buttons}>
                <Button title='Log in' color={'dodgerblue'} />
                <Button title='Sign up' color={'tomato'} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        objectFit: 'cover',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        marginTop: 100,
        height: 150,
        aspectRatio: 1,
    },
    text: {
        fontSize: 20,
    },
    buttons: {
        width: '60%',
        gap: 20,
        marginBottom: 20,
    },
});
