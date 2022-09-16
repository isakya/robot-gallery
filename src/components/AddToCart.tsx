import React, { useContext } from "react";
import { appStateContext } from "../AppState";
import { RobotProps } from "./Robot";


// Hoc高阶组件
// 声明函数采用 with 开头
export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
  // return class extends React.Component {}
  return (props) => {
    const setState = useContext(appStateContext)
    const addToCart = (id, name) => {
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
    return <ChildComponent {...props} addToCart={addToCart} />
  }
}