import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addList } from './actions'


class AddListView extends Component {
    constructor() {
        super()
        this.state = {
            showForm: false
        }
    }
    showListForm = () => {
        this.setState({
            showForm: true
        })
    }

    saveListName = (e) => {
        this.setState({
            listHeading: e.target.value
        })
    }

    saveList = () => {
        this.props.onAddList(this.state.listHeading)
        this.setState({
            showForm: false
        })
    }
    render() {
        return (<div className="w5 ml2 mt2 pointer h3 bg-black-60 pa2 shadow-2 flex flex-column items-center justify-center br2">{!this.state.showForm ? <div onClick={this.showListForm} className="w-100 h-100">
            AddList</div> :
            <div className="w-100 br2">
                <input className="w-90 h-75 bn br2" placeholder="Type heading..." autoFocus={true} type="text" onBlur={this.saveListName} />
                <button onClick={this.saveList} className="w4 outline-0 bn h-25 br2 mt2 material-green">Add List</button>
            </div>}</div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddList: (heading) => {
            dispatch(addList(heading))
        }
    }
}

export const AddList = connect(
    null,
    mapDispatchToProps
)(AddListView)