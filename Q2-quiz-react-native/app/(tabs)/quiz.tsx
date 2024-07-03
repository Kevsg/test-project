import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { QuestionType, generateQuiz } from '@/assets/data/quiz';
import React, { useContext, useState } from 'react';
import { Divider, RadioButton, TextInput, Button } from 'react-native-paper';
import { router } from 'expo-router';
import LeaderboardContext from '../../context/leaderboardContext';

type QuestionItemProps = {
  questionItem: QuestionType,
  questionIndex: number
  onValueChange: Function
}

const QuestionItem = (props: QuestionItemProps) => {
  // TODOS: Add Logic
  const { questionItem, questionIndex, onValueChange } = props
  const [answer, setAnswer] = useState('')

  const choicesItem = questionItem.choices.map((choice: string, choiceIndex: number) => {
    return <View key={`choice-${choiceIndex}`} style={styles.choiceContainer}>
      <RadioButton.Item position='leading' label={choice} value={choiceIndex.toString()} />
    </View>
  })

  return (
    <RadioButton.Group onValueChange={newAnswer => { onValueChange(questionIndex, newAnswer); setAnswer(newAnswer) }} value={answer}>
      <View >
        <Text style={styles.quizQuestion}>{`${questionIndex + 1}) ` + questionItem.question}</Text>
      </View>
      <View style={styles.choicesItem}>
        {choicesItem}
      </View>
      <Divider style={styles.divider} />
    </RadioButton.Group>
  )
}

const quiz = generateQuiz()

export default function QuizScreen() {
  const [questionCorrectArr, setQuestionCorrectArr] = useState([...new Array(quiz.length).fill(false)]);
  const [username, setUsername] = React.useState("");
  const [noUsername, setNoUsername] = React.useState(false)
  const { leaderboard, setLeaderboard } = useContext(LeaderboardContext)

  const handleQuestionItemClick = (questionIndex: number, choiceIndex: string) => {
    const questionCorrectArrCopy = [...questionCorrectArr]
    questionCorrectArrCopy[questionIndex] = quiz[questionIndex].correctAnswer.toString() === choiceIndex
    setQuestionCorrectArr(questionCorrectArrCopy)
  }

  const handleSubmit = () => {
    if (!username) {
      setNoUsername(true);
      return
    } else {
      setNoUsername(false);
    }
    const correctQuestion = questionCorrectArr.filter((val) => !!val).length
    const newLeaderboardEntry = {
      username,
      score: `${correctQuestion}`
    }
    const newLeaderboard = [...leaderboard, newLeaderboardEntry]
    setLeaderboard(newLeaderboard)
    router.navigate('/leaderboard')
  }

  const questionItem = quiz.map((q, index) => {
    return <QuestionItem key={q.question} questionItem={q} questionIndex={index} onValueChange={handleQuestionItemClick} />
  })

  return <View style={styles.container}>
    <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
      {questionItem}
      <View>
        <TextInput
          style={styles.usernameInput}
          label={noUsername ? 'Username is required' : 'Please enter your name'}
          value={username}
          onChangeText={(username: string) => setUsername(username)}
          error={noUsername}
        />
        <Button
          mode='contained'
          buttonColor='#6750A4'
          onPress={() => handleSubmit()}
        >
          Submit
        </Button>
      </View>
    </ScrollView>
  </View>
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerScrollView: {
    width: '100%'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },
  button: {
    marginBottom: 16
  },
  quizQuestion: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 12
  },
  choicesItem: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  choiceContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6
  },
  divider: {
    marginVertical: 24
  },
  usernameInput: {
    marginBottom: 24
  }
});
