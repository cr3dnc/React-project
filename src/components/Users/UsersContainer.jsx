import React from 'react';
import { follow, unfollow, setCurrentPage, setTotalPage, requestUsers } from '../../redux/users_reducer';
import Users from './Users';
import { connect } from "react-redux";
import Preloader from '../Common/Preloader/preloader.js';
import { compose } from 'redux';
import { getUsers, getCurrentPage, getPageSize, getTotalPage, getIsFetching, getToggleButtonDisable } from '../../redux/users_reselect';

class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }
    onPageChanged = (currentPage) => {
        const { pageSize } = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalPage={this.props.totalPage}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleButtonDisable={this.props.toggleButtonDisable} />
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalPage: getTotalPage(state),
        isFetching: getIsFetching(state),
        toggleButtonDisable: getToggleButtonDisable(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        setTotalPage, requestUsers
    })
)(UsersContainer)