import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
import {Picker} from"@react-native-picker/picker";
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
<excercise_Type:excerciseType, /*users selected value  for exercise type from the picker is added to new object*/ 
calories: parseInt(calories)}; /* the structure of the wotkoutDEtails objrct declares calories as numeric*/ 


setWorkouts([..workouts, newWorkouts]); //updating the workout list with the newly added workout
setTotalCalories(totalCalories, newWorkout, calories); // updates the totalcalories with the new
setWorkoutsName('');
setDuration('');
setType('None');
setCalories('');
    }
  }
  const totalworkouts = workouts.length; //holds the total amount of workouts in the list



  return (


    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}
      <Text style={styles.trackName}> FITNESS TRACKER</Text>
    </View>

    <View style={StyleSheet.summarycontainer}>
      <Text style={StyleSheet.summaryHeading}>TODAY'S SUMMARY:</Text>
      <View style={StyleSheet.summaryContent}>
        </View>

        <Text style={StyleSheet.summaryText}>Total Workouts: {totalworkouts}</Text>
        <Text style={StyleSheet.summaryText}>Total calories Burned</Text>
        </View>
        <Image source={requires(./Images)}
        </View>
        </View>

        <View style ={StyleSheet.listView}>
          <FlatList
          style ={Styles.listStles}
          data= {workouts}
          keyExtractor={(item, index)} => index.toString()}
          renderItem={(item)} => (
            <View style={StyleSheet.container}>
              <Text style={StyleSheet.WorkoutName}>WORKOUT NAME: {Item.workout_name</Text>
              <Text style={StyleSheet.otherDetails}> Duration {Item.duration}</Text>
        </View>


        
