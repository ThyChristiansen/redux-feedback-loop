import React, { Component } from "react";
// import SubmissionSuccess from '../ReviewItem/ReviewItem'


class Rev1ew extends Component {
    state = {
        feedbacks: []
    }

    componentDidMount() {
        console.log('in review ', this.props);
    }


    handleSubmit=()=>{ // handle next button to moving to understanding component
        console.log('Next clicked!')
        this.props.history.push('/success');
        this.props.dispatch({ // dispatch all of data in inputs up to index
            type:'submit',
            //store data inside an array
            payload: this.props.state
        }) 
    }

    render() {
        return (
            <div>
                <h1>Giving feedback</h1>
                {/* {this.props.review.map((feedback) => */}
                    <ul>
                        <li>Feeling: {this.props.feedback.feeling}</li>
                        <li>Understanding: {this.props.feedback.understanding}</li>
                        <li>Support: {this.props.feedback.support}</li>
                        <li>Comment: {this.props.feedback.comments}</li>
                        <button onClick = {this.handleSubmit}>Submit</button>

                    </ul>
                 {/* )}  */}
            </div>

        )
    }
}

export default Rev1ew;