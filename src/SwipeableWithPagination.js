import React, {
  StyleSheet,
  Component,
  View,
  Image,
  Dimensions
} from 'react-native';

import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';

import Pagination from './Pagination';

let paginationSize = 0;

export default class SwipeableWithPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      index: 0
    };
    this.onChangeIndex = this.onChangeIndex.bind(this);
  }
  componentWillMount(){
    this.setState({length: this.props.children.length});
  }
  render() {
    return (
      <View >
          <SwipeableViews  onChangeIndex={this.onChangeIndex}>
              {this.props.children}
          </SwipeableViews>
          <Pagination
            length={this.props.children.length}
            index={this.state.index}
            paginationStyle={this.props.pagination || [styles.pagination]}
            dots={this.props.dots || styles.dots}
            getPaginationDimensions={this.props.getPaginationDimensions}/>
      </View>
    );
  }
  onChangeIndex(index){
      this.setState({index});
  }
}


const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  }
});
