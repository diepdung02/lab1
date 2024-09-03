import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import Lab1_1 from './exe1';
import Lab1_2 from './exe2';
import Lab1_3 from './exe3';
import Lab1_4 from './exe4';
import Lab1_5 from './exe5';
import Lab1_6 from './exe6';
import Lab1_7 from './exe7';
import Lab1_8 from './exe8';
import Calculator from './calculator';


const Main = () => {
  const [index, setIndex] = React.useState(0);

  const routes = [
    { key: 'lab1_1', title: 'Lab1_1', icon: 'home' },
    { key: 'lab1_2', title: 'Lab1_2', icon: 'account' },
    { key: 'lab1_3', title: 'Lab1_3', icon: 'view-grid' },
    { key: 'lab1_4', title: 'Lab1_4', icon: 'information' },
    { key: 'lab1_5', title: 'Lab1_5', icon: 'calendar' },
    { key: 'lab1_6', title: 'Lab1_6', icon: 'message' },
    { key: 'lab1_7', title: 'Lab1_7', icon: 'bell' },
    { key: 'lab1_8', title: 'Lab1_8', icon: 'map' },
    { key: 'calculator', title: 'Calculator', icon: 'calculator' },
  ];

  const renderScene = BottomNavigation.SceneMap({
    lab1_1: Lab1_1,
    lab1_2: Lab1_2,
    lab1_3: Lab1_3,
    lab1_4: Lab1_4,
    lab1_5: Lab1_5,
    lab1_6: Lab1_6,
    lab1_7: Lab1_7,
    lab1_8: Lab1_8,
    calculator: Calculator,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={({ route, color }) => (
        <Icon name={route.icon} size={24} color={color} />
      )}
    />
  );
};

export default Main;
