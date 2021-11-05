import React,{Component} from 'react'
import CardExampleCard from './display/ui'
let web3 = require('./utils/initWeb3')
let lotteryInstance = require('./eth/lotteryInstance')
class App extends Component {
  constructor() {
    super();
    this.state = {
      manager: '',
      round: 0,
      winner: '',
      playerCounts: 0,
      balance: 0,
      players: [],
      currentAccount: '',
      isClicked: false,
      isShowbutton: '',
    };
  }

  
  // 内置钩子函数，在页面渲染之后自动调用
  componentDidMount() {

  }
  // 内置钩子函数，在页面渲染之前自动调用
  async componentWillMount() {
    // 获取当前的所有地址
    let accounts = await web3.eth.getAccounts()
    let manager = await lotteryInstance.methods.manager().call((err,result)=>{console.log(result)})
    let round = await lotteryInstance.methods.round().call((err,result)=>{console.log(result)})
    let winner = await lotteryInstance.methods.winner().call((err,result)=>{console.log(result)})
    let playerCounts = await lotteryInstance.methods.getPlayersCount().call((err,result)=>{console.log(result)})
    let balanceWei = await lotteryInstance.methods.getBalance().call((err,result)=>{console.log(result)})
    let balance = web3.utils.fromWei(balanceWei,'ether')
    let players = await lotteryInstance.methods.getPlayers().call((err,result)=>{console.log(result)})
    let isShowbutton = accounts[0] === manager ? 'inline' :'none'
    this.setState({
      manager: manager,
      round: round,
      winner: winner,
      playerCounts: playerCounts,
      balance: balance,
      players: players,
      currentAccount: accounts[0],
      isClicked: false,
      isShowbutton: isShowbutton,
    });
  }
  // 卸载钩子函数

  play = async () =>{
    console.log('play button click!')
    // 业务逻辑
    //1. 调用play方法
    //2. 转钱1 ether
    this.setState({isClicked:true})
    let accounts = await web3.eth.getAccounts()
    try {
      await lotteryInstance.methods.playe().send({
        // from: this.state.currentAccount,
        // value:1 * 10 ** 18,
        from: accounts[0],
        value: web3.utils.toWei('1', 'ether'),
        gas: '3000000',
      })
      this.setState({isClicked:false})
      alert('投注成功！')
      window.location.reload(true);
    } catch (e) {
      this.setState({isClicked:false})
      alert('投注失败！')
        console.log(e)
        window.location.reload(true);
    }
  }

  draw = async () =>{
    console.log('kaijiang button click!')
    // 业务逻辑
    //1. 调用kaijiang方法
    this.setState({isClicked:true})
    let accounts = await web3.eth.getAccounts()
    try {
      await lotteryInstance.methods.draw().send({
        from: accounts[0],
        // value:1 * 10 ** 18,
        gas: '3000000',
      })
      this.setState({isClicked:false})
      alert('开奖成功！')
      window.location.reload(true);
    } catch (e) {
      this.setState({isClicked:false})
      alert('开奖失败！')
        console.log(e)
        window.location.reload(true);
    }
  }
  undraw = async () =>{
    console.log('tuijiang button click!')
    // 业务逻辑
    //1. 调用tuijiang方法
    this.setState({isClicked:true})
    let accounts = await web3.eth.getAccounts()
    try {
      await lotteryInstance.methods.undraw().send({
        from: accounts[0],
        // value:1 * 10 ** 18,
        gas: '3000000',
      })
      this.setState({isClicked:false})
      alert('退奖成功！')
      window.location.reload(true);
    } catch (e) {
      this.setState({isClicked:false})
      alert('退奖失败！')
        console.log(e)
        window.location.reload(true);
    }
  }
  render() {
    return (
      <div>
      <CardExampleCard state={this.state} 
      play ={this.play}
      draw ={this.draw}
      undraw ={this.undraw}
      />
      </div>
    );
  }
  
}

export default App;

/**
 * <p>Hello Word {web3.version}</p>
 * <p>manager : {this.state.manager}</p>
 */