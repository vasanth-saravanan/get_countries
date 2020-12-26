import React from 'react';
import { View, Text, Image, FlatList , TouchableOpacity } from 'react-native';
import { styles } from '../styles/country'
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  weather: any
}

const Weather = ({ weather }: Props) => {
    var content = [];
    for (let i = 0; i < 4; i++) {
        content.push(
            < View style={styles.boxOutter} key={i}>
                <View style={styles.boxInner}>
                    {
                        i == 0 ? (<View style={styles.boxInnerTop}>
                            <Text style={styles.doller}>Temperature</Text>
                        </View>) :
                            i == 1 ? (<View style={styles.boxInnerTop}>
                                <Text style={styles.doller}>Weather Icons</Text>
                            </View>) :
                                i == 2 ? (<View style={styles.boxInnerTop}>
                                    <Text style={styles.doller}>Wind Speed</Text>
                                </View>) :
                                    (<View style={styles.boxInnerTop}>
                                        <Text style={styles.doller}>Precip</Text>
                                    </View>)}
                    <View style={styles.boxInnerBottom}>
                        {i == 0 ? (<Text style={styles.doller_title}>{weather.temperature}</Text>) :
                            i == 1 ? (<Text style={styles.doller_title}>{weather.weather_icons.map((icon:any) => <Image key={icon} style={{width: 20, height:20}} source={{uri:icon}}/>)}</Text>) :
                                i == 2 ? (<Text style={styles.doller_title}>{weather.wind_speed}</Text>) :
                                    (<Text style={styles.doller_title}>{weather.precip}</Text>)}
                    </View>
                </View>
            </View >
        )
    }
  return (
    <View style={styles.backgroundContainer}>
            <View style={{ flex: 0.9, }}>
                <View style={styles.topContainer}>
                    <View style={styles.topContentContainer}>
                    <FontAwesome
                        name={"globe"}
                        size={100}
                        color={"#fff"}
                    />
                    </View>
                </View>
                <View style={styles.restTopContainer}>
                    <View style={styles.topWhiteContainer}>
                        {content}
                    </View>
                </View>
            </View>
        </View>
  )
}

const mapStateToProps = (state: any) => (
  { weather: state.reducer.weather.data.current }
)

export default connect(mapStateToProps)(Weather);