import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/country'
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getCountryDetails } from '../redux/actions.ts/action';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import SvgUri from 'react-native-svg-uri'

type Props = {
    getCountryDetails: Function
    country: any
    navigation: {
        navigate: Function
    }
}

const Country = ({ getCountryDetails, country, navigation }: Props) => {
    const clickHandler = () => {
        getCountryDetails(country.capital, navigation)
    }

    var content = [];
    for (let i = 0; i < 4; i++) {
        content.push(
            < View style={styles.boxOutter} key={i}>
                <View style={styles.boxInner}>
                    {
                        i == 0 ? (<View style={styles.boxInnerTop}>
                            <Text style={styles.doller}>Name</Text>
                        </View>) :
                            i == 1 ? (<View style={styles.boxInnerTop}>
                                <Text style={styles.doller}>Population</Text>
                            </View>) :
                                i == 2 ? (<View style={styles.boxInnerTop}>
                                    <Text style={styles.doller}>Latitude</Text>
                                </View>) :
                                    (<View style={styles.boxInnerTop}>
                                        <Text style={styles.doller}>Longitude</Text>
                                    </View>)}
                    <View style={styles.boxInnerBottom}>
                        {i == 0 ? (<Text style={styles.doller_title}>{country.name}</Text>) :
                            i == 1 ? (<Text style={styles.doller_title}>{country.population}</Text>) :
                                i == 2 ? (<Text style={styles.doller_title}>{country.latlng[0]}</Text>) :
                                    (<Text style={styles.doller_title}>{country.latlng[1]}</Text>)}
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
                <TouchableOpacity onPress={() => clickHandler()} style={styles.button}>
                    <Text style={styles.buttonText}>Capital Weather</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = (state: any) => (
    { country: state.reducer.country }
)

export default connect(mapStateToProps, { getCountryDetails })(Country);