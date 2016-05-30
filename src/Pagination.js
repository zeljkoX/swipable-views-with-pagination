import {
  View,
  Image,
} from 'react-native';

import React, { Component } from 'react’;


export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.onLayout = this.onLayout.bind(this);
  }
  render() {
    let result = [];
    for(let i = 0; i < this.props.length;i=i+1){
      if(this.props.index == i ){
        result.push(<Image source={require('./active.png')} style={this.props.dots} key={i}/>);
      } else {
        result.push(<Image source={require('./inactive.png')} style={this.props.dots} key={i}/>);
      }
    }
    return (
      <View style={this.props.paginationStyle} onLayout={this.onLayout}>
        {result}
      </View>
    );
  }
  onLayout(event){
    if(this.props.getPaginationDimensions) {
          this.props.getPaginationDimensions(event.nativeEvent.layout);
    }
  }
}
