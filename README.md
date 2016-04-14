# Swipable Views with pagination for react-native


> This component is wrapper from react-swipable-views component. It adds pagination dots.


## Installation

```sh
npm install swipable-views-with-pagination
```

## Props
 Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| children | node |  | Use this property to provide your slides. |
| containerStyle | object | {} | Whether or not the auto complete is animated as it is toggled. |
| disabled | bool | false | If true, it will disable touch events. This is useful when you want to prohibit the user from changing slides. |
| index | integer | 0 | This is the index of the slide to show. This is useful when you want to change the default slide shown. Or when you have tabs linked to each slide. |
| onChangeIndex | Function(index, fromIndex) |  | This is callback prop. It's call by the component when the shown slide change after a swipe made by the user. This is useful when you have tabs linked to each slide. |
| onSwitching | Function(index) |  | This is callback prop. It's called by the component when the slide switching. This is useful when you want to implement something corresponding to the current slide position. |
| resistance | bool | false | If true, it will add bounds effect on the edges. |
| style | object | {} | This is the inlined style that will be applied on the root component. |
| slideStyle | object | {} | This is the inlined style that will be applied on the slide component. |
| threshold | integer | 5 | This is the threshold used for detectinga quick swipe. If the computed speed is above this value, the index change. | 
| SwipableViewsWithPagination specific props
|-------------------------------------------
| paginationStyle | object | default css styles | Style pagination wrapper
| dotsStyle | object | default css styles | Styles for paginations dots
| getPaginationDimensions | func | return { x,y,width,height } | Get pagination wrapper size
--------------------------------------------



### Native

```js
import React, {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from 'react-native-button';

import SwipeableViewsWithPagination from 'swipeable-views-with-pagination';


const MyComponent = () => (
  <SwipeableViewsWithPagination style={slideContainer}>
    <View style={[styles.slide, styles.slide1]}>
      <Text style={styles.text}>
        slide n°1
      </Text>
    </View>
    <View style={[styles.slide, styles.slide2]}>
      <Text style={styles.text}>
        slide n°2
      </Text>
    </View>
    <View style={[styles.slide, styles.slide3]}>
      <Text style={styles.text}>
        slide n°3
      </Text>
    </View>
  </SwipeableViewsWithPagination>
);

onst styles = StyleSheet.create({
  slideContainer: {
    height: 100,
  },
  slide: {
    padding: 15,
    height: 100,
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MyComponent;
```




