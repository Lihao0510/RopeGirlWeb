import React, {Component} from 'react';
import '../src/styles/About/index.less';
import withRedux from 'next-redux-wrapper';
import store from '../src/store';
import * as AboutAction from '../src/action/about';

class About extends Component {

    static async getInitialProps({store, isServer, pathname, query}) {

        store.dispatch(AboutAction.aboutTest1('页面刷新!'));

        return {
            query, pathname
        }
    }

    constructor(props) {
        super(props);
        console.log('AboutInit ==>', props)
    }

    componentDidMount() {
        console.log('AboutDidMount ==>', this)
        /*this.aboutContainer.onscroll = () => {
            console.log("AboutScroll ==>", this.aboutContainer.scrollTop);
        }*/
    }

    handleScroll = (e) => {
        console.log("AboutScroll ==>", e.target.scrollTop);
    };

    render() {
        return (
            <div
                className={"container"}
                onScroll={this.handleScroll}
            >
                <div className={"header"}>
                    <p>
                        {this.props.about.whatTheFuck}
                    </p>
                </div>
                <div className={"content"}>
                    <button
                        onClick={() => {
                            this.props.dispatch(AboutAction.aboutTest1("改变就是好事!"))
                        }}
                    >点击我改变Title
                    </button>
                </div>
                <div className={"footer"}>

                </div>
            </div>
        )
    }
}

export default withRedux(store, ({about}) => ({about}))(About);