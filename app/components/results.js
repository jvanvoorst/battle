var React = require('react');
var queryString = require('query-string');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');

var api = require('../utils/api');

function Player(props) {
    return (
        <div>
            <h1 className='header'>{props.label}</h1>
            <h3 style={{textalign: 'center'}}>Score: {props.score}</h3>
        </div>
    )
}

Player.propTypes = {
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    profile: PropTypes.object.isRequired,
}

class Results extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        }
    }

    componentDidMount() {
        var players = queryString.parse(this.props.location.search);

        api.battle([
            players.playerOneName,
            players.playerTwoName
        ]).then((res) => {
            if (res === null) {
                return this.setState(() => {
                    return {
                        error: 'Looks like there was an error, Check that both users exist',
                        loading: false,
                    };
                });
            }

            this.setState(() => {
                return {
                    error: null,
                    winner: res[0],
                    loser: res[1],
                    loading: false
                }
            })
        });
    }
    render() {
        var error = this.state.error;
        var winner = this.state.winner;
        var loser = this.state.loser;
        var loading = this.state.loading;

        if (loading) {
            return <p>Loading</p>;
        }

        if (error) {
            return (
                <div>
                    <p>{error}</p>
                    <Link to='/battle'>Reset</Link>
                </div>
            )
        }

        return (
            <div className='row'>
                <Player
                    label='Winner'
                    score={winner.score}
                    profile={winner.profile}
                />
                <Player
                    label='Loser'
                    score={loser.score}
                    profile={loser.profile}
                />
            </div>
        );
    }
}

module.exports = Results;
