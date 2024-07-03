import { StyleSheet, Image } from 'react-native';
import { View } from '@/components/Themed';
import { Text } from 'react-native-paper';
import React from 'react';
import { Link } from 'expo-router';
import { Button } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/choose.png')} style={styles.quizIcon} />
      <Text style={styles.title}>It's Quizzing Time!</Text>
      <Link asChild href='/quiz'>
        <Button
          mode='contained'
          buttonColor='#2E4A70'
          style={styles.startQuizBtn}
        >
          Start the quiz !
        </Button>
      </Link>
      <Link asChild href='/leaderboard'>
        <Button
          mode='contained'
          buttonColor='#24B0BA'
          style={styles.leaderboardBtn}
        >
          Leaderboard
        </Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },
  startQuizBtn: {
    marginBottom: 16,
    width: 160
  },
  leaderboardBtn: {
    width: 160
  },
  quizQuestion: {
    fontWeight: 'bold',
    fontSize: 20
  },
  quizIcon: {
    alignSelf: 'center',
    height: '30%',
    resizeMode: 'contain',
    marginBottom: 24
  }
});
