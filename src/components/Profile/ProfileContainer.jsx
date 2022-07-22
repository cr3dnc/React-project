import React from 'react';
import Profile from '../../components/Profile/Profile';
import { connect } from 'react-redux';
import { getUsersProfile, getStatus, updateStatus, profileSetData, profileSetPhoto } from '../../redux/profile_reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}
                profileSetPhoto={this.props.profileSetPhoto} profileSetData={this.props.profileSetData} userId={this.props.userId} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.id
    }
}
export default compose(
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus, profileSetData, profileSetPhoto }),
    withRouter
)(ProfileContainer)