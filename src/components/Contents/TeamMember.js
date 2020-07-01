import React, { Component } from 'react';
import { teamList_Ref } from '../../config/firebase';
import { Badge } from 'reactstrap';

export class TeamMember extends Component {
  state = {
    TeamMate: [],
  };

  componentDidMount() {
    this.ReadDetailTeam(this.props.detailTitle);
  }

  ReadDetailTeam = (title) => {
    teamList_Ref.child('/' + title + '/team_member').on('value', (snap) => {
      this.setState({
        TeamMate: snap.val(),
      });
    });
  };

  render() {
    return (
      <div>
        {/* {this.TeamName} */}

        {this.state.TeamMate
          ? this.state.TeamMate.map((con, i) => {
              return (
                <Badge color='primary' pill className='mr-1' key={i}>
                  {con.memberName}
                </Badge>
              );
            })
          : '아직 팀멤버가 없습니다.'}
        {/* {this.state.Badge} */}
      </div>
    );
  }
}

export default TeamMember;
