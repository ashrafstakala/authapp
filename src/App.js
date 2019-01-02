import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null };



	componentWillMount() {
		firebase.initializeApp( {
			apiKey: 'AIzaSyCHRjxysrfsYouV1UPJU7LZEvjutZoKb4A',
    		authDomain: 'auth-app-d1cfa.firebaseapp.com',
    		databaseURL: 'https://auth-app-d1cfa.firebaseio.com',
    		projectId: 'auth-app-d1cfa',
    		storageBucket: 'auth-app-d1cfa.appspot.com',
    		messagingSenderId: '156293871363'
		});

	// callback to check if user is logged in or not
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}		
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;