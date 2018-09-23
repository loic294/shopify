import React, { Component } from 'react'
import s from './styles.module.scss'

export const addTaost = (text) => {
  var event = new CustomEvent("toast", {
    detail: {
      text,
      id: new Date().getTime()
    }
  });
  document.dispatchEvent(event);
}

class Toast extends Component {

  state = {
    toats: []
  }

  componentDidMount() {
    this.toatsListener = document.addEventListener("toast", (e) => {
      this.setState({ toats: [e.detail, ...this.state.toats]})

      setTimeout(() => {
        this.state.toats.pop()
        this.setState({ toats: this.state.toats})
      }, 3000)
    });
  }

  componentWillUnmount() {
    document.removeEventListener("toast", this.toatsListener)
  }

  render() {
    const { toats } = this.state

    return <div className={s.toasts}>
      {toats.map(({ id, text }) => (
        <div key={id} className={s.toast}>{text}</div>
      ))}
    </div>

  }

}

export default Toast
