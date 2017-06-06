var React = require('react');
var PropTypes = require('prop-types');

var PlayerPreview = require('./playerPreview');

function PlayerPreview(props) {
    return (
        <div>
            <div className='column'>
                <img
                    className='avatar'
                    src={props.avatar}
                    alt={'avatar for ' + props.username}/>
                <h2 className='username'>@{props.username}</h2>
            </div>
            {/* {props.children} */}
        </div>
    )
}

PlayerPreview.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
}

module.exports = PlayerPreview;
