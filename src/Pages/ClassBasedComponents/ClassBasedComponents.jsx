import User from './User';
import classes from './ClassBasedComponents.module.css';
import { Component } from 'react';
import FilteredUserList from './FilteredUserList';
import { AuthContext } from '../../context/auth-context';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class ClassBasedComponents extends Component {
    static contextType = AuthContext;

    constructor() {
        super();
        this.state = {
            users: DUMMY_USERS,
            filteredUsers: DUMMY_USERS,
            showUsers: true,
        };
    }


    changeFilter(e) {
        let inputValue = e.target.value.toLowerCase();
        this.setState(currentState => {
            return {
                filteredUsers: currentState.users.filter(user => {

                    return user.name.toLowerCase().includes(inputValue)   // return !user.includes(inputValue))
                })
            }

        })
    }


    toggleUsersHandler() {
        this.setState(currentState => {
            return { showUsers: !currentState.showUsers }
        })
    }

    componentDidMount() { } // ngOnInit

    componentDidUpdate(prevProps, prevState) {
        // if (prevProps.searchTerm !== this.state.searchTerm) { // would prevent infinite loop if you would get this prop
        //
        // }
    }

    componentWillUnmount() { }// onDestroy/cleanup function useEffect

    render() {
        const usersList = (
            <FilteredUserList filteredUsers={this.state.filteredUsers} />
        )

        return (
            <>
                <label htmlFor="filter-users">Filter Users: </label><input type="text" id="filter-users" onChange={this.changeFilter.bind(this)} />
                {/* <pre>{JSON.stringify(this.state.filteredUsers)}</pre> */}
                <div className={classes.users}>
                    <button onClick={this.toggleUsersHandler.bind(this)}>
                        {this.state.showUsers ? 'Hide' : 'Show'} Users
                    </button>
                    {this.state.showUsers && usersList}
                </div>


                <pre>{'Context from ContextType from AuthContext: ' + JSON.stringify(this.context)}</pre>
            </>
        );
    }
}

export default ClassBasedComponents;
