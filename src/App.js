import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp( {
			apiKey: 'AIzaSyCHRjxysrfsYouV1UPJU7LZEvjutZoKb4A',
    		authDomain: 'auth-app-d1cfa.firebaseapp.com',
    		databaseURL: 'https://auth-app-d1cfa.firebaseio.com',
    		projectId: 'auth-app-d1cfa',
    		storageBucket: 'auth-app-d1cfa.appspot.com',
    		messagingSenderId: '156293871363'
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;