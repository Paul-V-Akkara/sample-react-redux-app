import React, {Component} from 'react'
import { connect } from 'react-redux'

class List extends Component{
    render(){
        return <div className="w5 mt2 list h5 mh2 shadow-2 flex flex-column br2">
        <div className="h2 material-green w-100 flex flex-column justify-center">{this.props.value.heading}</div>
        <div className="card-container w-100 flex-auto overflow-auto"></div>
         </div>
    }
}

const ListArray = ({lists})=>{
        return lists.map((item)=>{
                return <List key={item.id} value={item}/>
            })
}

const mapStateToProps = state => {
    return { lists: state.lists };
  };
  

export const Lists = connect(
    mapStateToProps
)(ListArray)