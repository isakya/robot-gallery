import React from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart'


interface Props {}

interface State {
  robotGallery: any
  count: number
}

class App extends React.Component<Props, State> {

  // * 生命周期第一阶段： 初始化
  // 初始化
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0
    }
  }
  // 在组件创建好dom元素一行、挂载进页面的时候调用
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({robotGallery: data}))
  }

  // * 生命周期第二阶段： 更新
  // 1. componentWillReceiveProps：组件在接收到一个新的 prop （更新后）时被调用
  // componentWillReceiveProps ---> 已废弃

  // 2. shouldComponentUpdate：通过判断props 和 state 变化来判断组件是否需要更新，返回true 更新、返回false 不更新
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.some !== this.state.some
  // }

  // 组件更新后调用
  componentDidUpdate() {}

  // * 生命周期第三阶段：销毁
  // 组件销毁后调用
  // 可以当作析构函数 destructor 来使用
  componentWillUnmount() {}


  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
            <img src={logo} className={styles.appLogo} alt="" />
            <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
        </div>
        <button onClick={() => {
          // setState第二个参数是访问setState处理后的数据
          this.setState({count: this.state.count + 1}, () => {
            console.log('count', this.state.count);
          })
          // 两个 setState + 1 实现不了state + 2，原因是setState的异步处理，拿的都是上一次的state状态 + 1
          this.setState({count: this.state.count + 1}, () => {
            console.log('count', this.state.count);
          })

          // 解决方法，第一个参数改为函数
          // preState preProps 都为上一个生命周期的状态
          this.setState((preState, preProps) => {return {count: preState.count + 1}}, () => {
            console.log('count', this.state.count);
          })
          // 与state的count不同步
          console.log('count', this.state.count);
        }}>Click</button>
        <span>count: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(r => <Robot id={r.id} email={r.email} name={r.name} />)}
        </div>
      </div>
    );
  }
}

export default App;
