import React from "react";
import {connect} from "react-redux";
import {advancedShowAlert, createPost, showAlert} from "../store/actions";
import {Alert} from "../assets/Alert";

class PostForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()
        if (this.state.title.trim()) {
            this.props.createPost({
                title: this.state.title, id: Date.now().toString()
            })
            this.setState({title: ''})
        } else if (!this.state.title.trim()) {
            this.props.showAlert('The post title cannot be empty.')
        }
    }

    changeInput = event => {
        this.setState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
        this.props.advancedShowAlert()
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert}/>}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name='title'
                        value={this.state.title}
                        onChange={this.changeInput}
                    />
                </div>
                <button
                    className='btn btn-success'
                    type='submit'
                    // disabled={!this.state.title}
                >Create
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    alert: state.app.alert
})


export default connect(mapStateToProps, {createPost, showAlert, advancedShowAlert})(PostForm)