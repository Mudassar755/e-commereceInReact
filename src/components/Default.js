import React, { Component } from 'react'

 class Default extends Component {
  render() {
    return (
      <div className='container'>
      <div className="row">
      <div className="col-10 mx-auto text-center text-uppercase text-title pt-5">
      <h1 className='dispaly-3'>404</h1>
      <h1>error</h1>
      <h2>page not found</h2>
      <h3>the requisted url <span className='text-danger'>
      {this.props.location.pathname}</span> {' '}was not found</h3>
      </div>
      </div>
        
      </div>
    )
  }
}

export default Default ;
