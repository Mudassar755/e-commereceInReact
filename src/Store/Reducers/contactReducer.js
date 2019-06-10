import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_CONTACT,EDIT_CONTACT } from '../Actions/types';

const initialState = {
    contacts: [
        {
        id:1,
        name: 'Mudassar',
        email: 'mudasar@gmail.com',
        phone: '333-333-333',
    },
    {
        id:2,
        name: 'Bilal',
        email: 'bilal@gmail.com',
        phone: '444-444-444',
    },
    {
        id:3,
        name: 'Hamza',
        email: 'hamza@gmail.com',
        phone: '555-555-555',
    },
],
contact: {},
};

export default function (state = initialState, action) {

    switch (action.type){
        case GET_CONTACTS: 
            return {
                ...state,
            };

            case GET_CONTACT:
            return {
                ...state,
                contact: action.payload,
            }

            case DELETE_CONTACT: 
            return {
                ...state,
                contacts: state.contacts.filter( contact => (contact.id !== action.payload))
            };

            case ADD_CONTACT: 
            return {
                ...state,
                contacts : [action.payload, ...state.contacts]
            };
        case EDIT_CONTACT:
        return {
            ...state,
            contacts: [action.payload, ...state.contacts]
        }
        default: {
            return state
        }
    }
}