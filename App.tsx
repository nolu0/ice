import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import {Picker} from "@react-native-picker/picker";
import {WorkoutDetails} from './types';


export default function App() {

  //useState hook is used to manage the state of the varaible s that are going to change
  const[workouts, setWorkouts] = useState<String>('');
  const[workOutName, setWorkoutsName] = useState<string>('');

  //This varaible is declared as string because TextInput handles text input as strings.
  const[duration, setDuration] = useState<string>('');
  const[excerciseType, setType] = useState<string>('');
  const[calories, setCalories] = useState<string>('');
  const[totalCalories, setTotalCalories] = useState<string>('');

  //array holding a predefined list of exercise types
  const ExcerciseType =['cardio','Strength', 'Flexibility', 'Balance','Hiit'  ];

  //function adds the new workout details to the workouts array
  const handleSubmit =() => {
    if(workOutName && duration && excerciseType && calories )
    {
      const newWorkout: WorkoutDetails ={  /*creates new workout objects*/
workOut_Name: workOutName, /*user input for the workout added to the new object*/ 
duration: parseInt(duration), /*thes structure of the workoutDetails object declares duration as numeric*/ 
excercise_Type:excerciseType, /*users selected value  for exercise type from the picker is added to new object*/ 
calories: parseInt(calories)}; /* the structure of the wotkoutDEtails objrct declares calories as numeric*/ 


setWorkouts([...workouts, newWorkout]); //updating the workout list with the newly added workout
setTotalCalories(totalCalories, newWorkout.calories); // updates the totalcalories with the new
setWorkoutsName('');
setDuration('');
setType('None');
setCalories('');
    }
  }
  const totalworkouts =workouts.length; //holds the total amount of workouts in the 

  renderItem={({item}) => (

  <View style={Style.container}>
  <Text style={StyleSheet.workoutName}>workOut_Name: {Item.workout_Name</Text>
  <Text style={StyleSheet.otherDetails}>Duration: {ClipboardItem.duration}</Text>
</View>
  )}
  />
  </View>

return  (
  
  <SafeAreaView styles={style.itemcontainer}>
  <View style={styles.headingContainer}
  <Text style={styles.trackName}> FITNESS TRACKER</Text>
</View>

<View style ={Styles.listview}
<FlatList
style = {Style.liststyle}
data = {workouts}
keyExtractor={(item, index) => index.toString()}
<Picker
selectedvalue={excerciseType} // the current value selected in the picker (dropdown menu.)
onValuechange={(itemValue)} => setType(itemValue) //Event handler called when a user selects a new value from the picker
// it updates the state varaible 'exerciseType' with the selected value.

style={styles.input}>

  (ExcerciseType.map((excerciseType) => (
    <Picker.Item Label={excerciseType} value={excerciseType} key={excerciseType}/>
  ))}
</Picker>

<View style={Style.userInputView}
<TextInput
style={StyleSheet.input}
placeholder='workout name'
value={workoutName}
onChangeText={setWorkoutName}
</TextInput>

<TextInput
style ={StyleSheet.input}
placeholder='duration'(min)
value ={duration}
onChangeText={setDuration}
inputMode='numeric'>
</TextInput>

      <View style={StyleSheet.container}>
        <Text style={StyleSheet.WorkoutName}>WORKOUT NAME: {Item.workout_name}</Text>
        <Text style={StyleSheet.otherDetails}> Duration {Item.duration}</Text>
      
