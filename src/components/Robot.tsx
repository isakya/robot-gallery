import React,{useContext} from 'react'
import styles from './Robot.module.css'
import {appContext} from '../index'

interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot : React.FC<RobotProps> = ({id, name, email}) => {
  // 消费context的第二种写法：推荐
  const value = useContext(appContext)
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
          </div>
        // )
    // }}
    // </appContext.Consumer>
  )
}

export default Robot;