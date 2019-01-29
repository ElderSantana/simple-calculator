import React, {Component} from 'react';
import { StyleSheet, View  } from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons : {
    flexDirection: 'row',
    flexWrap: 'wrap',    
  },

});

export default class App extends Component {
  state = {
    displayValue : 0,
  }
  add = n =>{
    if(this.state.displayValue === 0){
      // if value is zero, just update the value
      this.setState({ displayValue: n})
    }else{
      // concat the values clicked
      this.setState({ displayValue: n === ('+' || '-' || '*' || '/') ? `${this.state.displayValue} ${n} ` : `${this.state.displayValue}${n}`})
    }
  }
  clear = () =>{
    // clear the value from display
    this.setState({ displayValue: 0})
  }
  result = () => {
    // if user has clicked in the opertation, it will go ahead and evaluate the expression
    this.setState({ displayValue: eval(this.state.displayValue)});
  }
  render() {
    return (
      <View style={styles.container}>
        <Display font={this.state.font} value={this.state.displayValue}></Display>
        <View style={styles.buttons}>
          <Button label="C" triple onClick={this.clear}></Button>
          <Button label="/" operation onClick={() => this.add('/')}></Button>
          <Button label="7" onClick={() => this.add('7')}></Button>
          <Button label="8" onClick={() => this.add('8')}></Button>
          <Button label="9" onClick={() => this.add('9')}></Button>
          <Button label="*" operation onClick={() => this.add('*')}></Button>
          <Button label="4" onClick={() => this.add('4')} ></Button>
          <Button label="5" onClick={() => this.add('5')} ></Button>
          <Button label="6" onClick={() => this.add('6')} ></Button>
          <Button label="-" operation onClick={() => this.add('-')}></Button>
          <Button label="1" onClick={() => this.add('1')}></Button>
          <Button label="2" onClick={() => this.add('2')}></Button>
          <Button label="3" onClick={() => this.add('3')}></Button>
          <Button label="+" operation onClick={() => this.add('+')}></Button>
          <Button label="0" double onClick={() => this.add('0')}></Button>
          <Button label="." onClick={() => this.add('.')}></Button>
          <Button label="=" operation onClick={() => this.result()}></Button>
        </View>
      </View>
    );
  }
}


