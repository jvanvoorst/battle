var React = require('react');

class Popular extends React.Component {
    render() {
        var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

        return (
            <ul>
                {languages.map((lang) => <li>{lang}</li>)}
            </ul>
        );
    }
}

module.exports = Popular;
