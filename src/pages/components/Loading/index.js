import React, {Component} from 'react'
import Loader from 'react-loader-spinner'

class Loading extends Component{
    render(){
      return (<div><Loader type="Oval" color="#4d7fd1" height={80} width={80} /></div>)
    }
}

export default Loading