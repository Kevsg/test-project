import { StyleSheet, ScrollView, Image } from 'react-native';
import { View } from '@/components/Themed';
import React, { useContext } from 'react';
import { Avatar, Card, Text, } from 'react-native-paper';
import LeaderboardContext from '../../context/leaderboardContext';


const LeftContent = props => <Avatar.Icon {...props} icon="account" />

export default function LeaderboardScreen() {

    const { leaderboard, setLeaderboard } = useContext(LeaderboardContext)

    return (<View style={styles.container}>
        <Image source={require('@/assets/images/podium.png')} style={styles.leaderboardIcon} />
        <Text style={styles.leaderboardTitle} variant="displayMedium">Leaderboard</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
            {leaderboard.length === 0 && <Text variant="headlineLarge" style={styles.leaderboardSubtitle}>No Data yet!</Text>}
            {leaderboard.map((data, index) => {
                return <Card key={`leaderboard-${index}`} mode='elevated' elevation={5} style={styles.leaderboardCard} theme={{ colors: { primary: 'green' } }}>
                    <Card.Title title={data.username} subtitle={`Score: ${data.score}/20`} left={LeftContent} />
                </Card>
            })}

        </ScrollView>
    </View>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 24
    },
    leaderboardTitle: {
        marginBottom: 24,
        textAlign: 'center'
    },
    leaderboardSubtitle: {
        textAlign: 'center'
    },
    leaderboardCard: {
        width: '100%',
        marginBottom: 16,
    },
    leaderboardIcon: {
        alignSelf: 'center',
        height: '30%',
        resizeMode: 'contain',
        marginBottom: 24
    }
});
