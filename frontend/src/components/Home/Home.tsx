import React from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native'

const homeStyles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FAFAFA'
  },
  title: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 24,
    textAlign: 'left',
    fontWeight: '400'
  },
  cardContent: {
    height: 60,
    marginTop: 10,
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#BBCBFB',
    borderLeftColor: '#567DF4',
    borderLeftWidth: 8,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10
  },
  card: {
    fontSize: 20,
    paddingLeft: 10
  },
  floatButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#22215B',
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textFloatButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default function Home () {
  return (
        <View style={homeStyles.HomeContainer}>
            <Text style={homeStyles.title}>My Groups</Text>
            <ScrollView>
                <View style={homeStyles.cardContent}>
                    <Text style={homeStyles.card}>
                        My First group
                    </Text>
                </View>
                <View style={homeStyles.cardContent}>
                    <Text style={homeStyles.card}>
                        Skylab 202101
                    </Text>
                </View>
                <View style={homeStyles.cardContent}>
                    <Text style={homeStyles.card}>
                        Personal Links
                    </Text>
                </View>
                <View style={homeStyles.cardContent}>
                    <Text style={homeStyles.card}>
                        Mesenterio
                    </Text>
                </View>
                <View style={homeStyles.cardContent}>
                    <Text style={homeStyles.card}>
                        aTríviate
                    </Text>
                </View>

            </ScrollView>
            <View style={homeStyles.floatButton}>
                <TouchableOpacity
                    disabled
                    onPress={() => console.log('holi')}
                >
                    <Text style={homeStyles.textFloatButton}>+</Text>
                </TouchableOpacity>
            </View>

        </View>

  )
}
