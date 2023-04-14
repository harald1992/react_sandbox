import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import User from "./User";


class FilteredUserList extends Component {

    componentDidUpdate(prevProps, prevState) {
        // if (prevProps.filteredUsers !==this.)
        // if(prevProps.)
        if (this.props.filteredUsers.length === 0) {
            throw new Error('No users provided');
        }
    }

    render() {
        const usersList = (
            <ul>
                {this.props.filteredUsers.map((user) => (
                    <User key={user.id} name={user.name} />
                ))}
            </ul>
        );

        return (
            <>
                <ErrorBoundary>
                    {usersList}
                </ErrorBoundary>
            </>
        )
    }

}

export default FilteredUserList;