import React from 'react'
import { connect } from 'react-redux'

const Page = (props) => {
  return (
    <div>Opa, funcinando...</div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Page)