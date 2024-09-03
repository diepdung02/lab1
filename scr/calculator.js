import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  const buttons = ['C', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  function calculateResult() {
    try {
      const result = eval(currentNumber).toString();
      setCurrentNumber(result);
    } catch {
      setCurrentNumber('Error');
    }
  }

  function handleInput(buttonPressed) {
    Vibration.vibrate(35);

    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.slice(0, -1));
        break;
      case 'C':
        setLastNumber('');
        setCurrentNumber('');
        break;
      case '=':
        setLastNumber(currentNumber + '=');
        calculateResult();
        break;
      default:
        if (['+', '-', '*', '/'].includes(buttonPressed)) {
          if (!['+', '-', '*', '/'].includes(currentNumber.slice(-1))) {
            setCurrentNumber(currentNumber + buttonPressed);
          }
        } else {
          setCurrentNumber(currentNumber + buttonPressed);
        }
        break;
    }
  }

  const buttonStyles = (button) => {
    let backgroundColor = darkMode ? '#424242' : '#f1f1f1';
    let minWidth = '23%';

    if (['+', '-', '*', '/'].includes(button)) {
      backgroundColor = '#00b9d6';
    } else if (button === '0') {
      minWidth = '48%';
    } else if (button === '.' || button === 'DEL' || button === 'C') {
      minWidth = '48%';
    }

    return {
      backgroundColor,
      width: minWidth,
      height: '20%',
      borderColor: darkMode ? '#303030' : '#e0e0e0',
    };
  };

  return (
    <View style={styles.container}>
      <View style={[styles.results, { backgroundColor: darkMode ? '#212121' : '#ffffff' }]}>
        <TouchableOpacity
          style={[styles.themeButton, { backgroundColor: darkMode ? '#424242' : '#e5e5e5' }]}
          onPress={() => setDarkMode(!darkMode)}
        >
          <Entypo name={darkMode ? 'light-up' : 'moon'} size={24} color={darkMode ? 'white' : 'black'} />
        </TouchableOpacity>
        <Text style={[styles.historyText, { color: darkMode ? '#b5b7bb' : '#7c7c7c' }]}>{lastNumber}</Text>
        <Text style={[styles.resultText, { color: darkMode ? '#00b9d6' : '#00b9d6' }]}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button}
            style={[styles.button, buttonStyles(button)]}
            onPress={() => handleInput(button)}
          >
            <Text style={[styles.textButton, { color: ['+', '-', '*', '/', '='].includes(button) ? 'white' : darkMode ? '#e0e0e0' : '#333' }]}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  results: {
    width: '100%',
    flex: 2,
    justifyContent: 'flex-end',
    padding: 15,
  },
  resultText: {
    fontSize: 40,
    marginBottom: 10,
    textAlign: 'right',
  },
  historyText: {
    fontSize: 20,
    textAlign: 'right',
  },
  themeButton: {
    alignSelf: 'flex-end',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttons: {
    flex: 3,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    borderColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  textButton: {
    fontSize: 28,
  },
});
