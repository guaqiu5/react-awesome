const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false, isHappy: false };
    }

    render() {
        if (this.state.liked && this.state.isHappy) {
            return '你在🐶叫什么！';
        }

        return e(
            'button', { onClick: () => this.setState({ liked: true }) },
            '汪汪',
            'button', { onClick: () => this.setState({ liked: true }) },
            '大胆',

        );
    }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);