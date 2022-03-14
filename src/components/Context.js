import React, { Component, createContext } from 'react';
import axios from 'axios';

const Context = React.createContext();

const Reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT' : 
        return {
            Contacts: state.Contacts.filter((contact) => contact.id !== action.payload)
        };
        case 'ADD_CONTACT' : 
        return {
            Contacts: [action.payload, ...state.Contacts]
        };
        case 'UPDATE_CONTACT' : 
        return {
            Contacts: state.Contacts.map(Contact => Contact.id === action.payload.id ? Contact = action.payload : Contact)
        };
        default : 
        return state;
    }
}

export class Provider extends Component {

    state = {
        Contacts : [
            {id: 1, name: "Omar Zairh", phone: "0677833006",email: "omarzairh00@gmail.com"},
            {id: 2, name: "Mohamed Chebani", phone: "0677833080",email: "chebnanicom02@gmail.com"},
            {id: 3, name: "Othmane Bakkass", phone: "0677833078",email: "othmane002@gmail.com"}
        ],
        dispatch: action => this.setState(state => Reducer(state, action))
    }

    async componentDidMount() {
        console.log('will mounted');
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')

            this.setState({
                Contacts: res.data
            })
        }catch(e) {
            console.log(e)
        }
        
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                 {this.props.children} {/*make it injectable */}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
