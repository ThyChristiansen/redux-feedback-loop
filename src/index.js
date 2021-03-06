import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Axios from 'axios';

const reducerInitialState = { //crate an state to store the data
    feedback: {
        feeling: '',
        understanding: '',
        support: '',
        comments: '',
    },
    feedbacks: [],
};

const feedbackReducer = (state = reducerInitialState, action) => {
    console.log('in feedbackReducer', action);
    if (action.type === 'comments') {
        // in the last input field 'comment', if type of action is comments => set properties inside state above equal 
        //the payload actions that I sent from each components
        console.log('in review', action.payload)
        let feedbackObj = { //create a new variable and assign it equal an object store datas
            feeling: action.payload.feeling,
            understanding: action.payload.understanding,
            support: action.payload.support,
            comments: action.payload.comments,
        }
        state = {
            ...state,
            feedback: feedbackObj // set state equal feedbackObj variable
        }
    }// End if action comments

    if (action.type === 'submit') {
        //if type of action is submit 
        console.log('in review action', action.payload)
        console.log('state in index:', state)

        let feedbackObjToSend = { //create an new variable and assign it to an object
            //have properties is set for properties inside state above
            feeling: state.feedback.feeling,
            understanding: state.feedback.understanding,
            support: state.feedback.support,
            comments: state.feedback.comments,
        }

        Axios.post('/:id', feedbackObjToSend) // POST request
            .then(response => {
                console.log('back from POST: ', response.data)
            }).catch(err => {
                console.log('Error in POST:', err);
            })

    } // End if action submit
    return state;
}

const feedbackStore = createStore(feedbackReducer);

ReactDOM.render(

    <Provider store={feedbackStore}>
        <App
        />,
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
