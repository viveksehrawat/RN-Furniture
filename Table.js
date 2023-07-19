import React, { useState} from 'react';
import {Text} from 'react-native';

class Table extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      isBig: false
    }
  }

  changeState = () => {
    this.setState({isBig: !this.state.isBig});
  }

  render() {
    return <Text style={{fontSize: this.state.isBig ? 24: 14}} onPress={this.changeState}> This is my Table</Text>;
  }
}
// const Table = () => {
//   const [isBig, setIsBig] = useState(false)
//   console.log('isBig => ', isBig)
//   const changeState = () => {
//     setIsBig(currenState => !currenState)
//   }
  
//   return(
//         <Text style ={  {fontSize: isBig ? 24: 14} } onPress={changeState}>  This is Table</Text>
//     );
// };

export default Table;
