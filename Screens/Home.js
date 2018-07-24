import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';



class Home extends Component {

  state = {
    prices : [],
    displayArray :[],
    btc :[],
    eth : [],
    bnb : [],
    usdt : []
    
  }

  componentWillMount(){
    this.GetUserInfo();
  }


  GetUserInfo = async() =>{

    try {
      response = await fetch(
        'https://api.binance.com/api/v1/ticker/price'
        // 'https://samples.openweathermap.org/data/2.5/weather?q=Chennai&appid=b6907d289e10d714a6e88b30761fae22'
        // 'https://api.binance.com/api/v1/trades?apiKey=${encodeURIComponent(data.apiKey)}' 
      );
      let responseJson = await response.json();
      console.log(responseJson[0].price);
      this.setState({prices : responseJson})
      this.splitByCoin();
    } catch (error) {
      console.error(error);
    }
  }

   splitByCoin() {
    var btcArray = [];
    var ethArray = [];
    var bnbArray = [];
    var usdtArray = [];

    coin = this.state.prices;
  
    for(i = 0; i < coin.length; i++){
      var coinType = coin[i].symbol.slice(-3);
      console.log("coinType  "+coinType);
      switch (coinType){
        case "BTC":
          btcArray.push(coin[i])
          break;
        case "ETH":
          ethArray.push(coin[i])
          break;
        case "BNB":
          bnbArray.push(coin[i])
          break;
        case "SDT":
          usdtArray.push(coin[i])
          break;
        default:
  
      }
    }
    this.setState({displayArray : btcArray})
    
    this.setState({btc : btcArray})
    this.setState({eth : ethArray})
    this.setState({bnb : bnbArray})
    this.setState({usdt : usdtArray})

  }

  coinName (nameFromServer){
    let removeLetterCount = 3;
    if(nameFromServer.slice(-3) == "SDT"){
      removeLetterCount = 4;
    }
    var coinNameCount = (nameFromServer.length) - removeLetterCount;
    var coinName = nameFromServer.substring(0, coinNameCount);
    return coinName;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style = {styles.listView}
        
          data={ this.state.displayArray}
          renderItem={({item, index}) => <View style = {[{flexDirection: 'row'}, 
          index%2==0 ? { backgroundColor : 'white' } : { backgroundColor : '#f7f7f7' }]}>
            <Text style={styles.contentLabel}>{ this.coinName(item.symbol)
          }</Text>
            <Text style={styles.contentLabel}>{item.price}</Text> 
          </View>}
        />
        <View style = {styles.bottomView}>
           <TouchableOpacity style = {styles.buttons} onPress = {() => this.setState({displayArray : this.state.btc})}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>BTC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttons} onPress={() => this.setState({displayArray : this.state.eth})}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>ETH</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttons} onPress={() => this.setState({displayArray : this.state.bnb})}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>BNB</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttons} onPress={() => this.setState({displayArray : this.state.usdt})}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>USDT</Text>
            </View>
          </TouchableOpacity> 
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor: '#3b5998',
  },
  listView:{
     marginLeft : 10,
     marginRight : 10,
     marginTop : 20,
     marginBottom : 20,
  },
  contentLabel: {
    flex : 1,
    padding: 20,
    fontSize: 16,
    height: 60,
  },
  bottomView :{
      marginLeft : 10,
      marginRight : 10,
      marginBottom : 50,
      height: 45,
      flexDirection : "row"
  },
  buttons :{
    flex : 1,
    // backgroundColor : "#8b9dc3"
  },
  button:{
    backgroundColor : "#8b9dc3",
    height : 45,
    marginLeft : 2,
    marginRight : 2,
  },
  buttonText :{
    textAlign : "center",
    paddingTop : 15,
  }
})

export default Home;

