import React, { useContext } from 'react'
import styles from './Robot.module.css'
import { appContext, appStateContext } from '../AppState'

interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  // 消费context的第二种写法：推荐
  const value = useContext(appContext)
  const setState = useContext(appStateContext)
  const addToCart = () => {
    if (setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }]
          }
        }
      })
    }
  }
  return (
    // 消费context的第一种写法：
    // <appContext.Consumer>
    // {(value) => {
    // return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
    // )
    // }}
    // </appContext.Consumer>
  )
}

export default Robot;