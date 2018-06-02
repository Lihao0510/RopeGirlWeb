import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import Nav from '../components/nav';
import store from '../src/store';

class Index extends Component{

    static async getInitialProps ({pathname, query}) {
        return {
            query, pathname
        }
    }

    constructor(props){
        super(props);
        console.log('IndexInit ==>', props)
    }

    render() {
        return(
            <div>
                <Nav />
                <p>
                    {this.props.about.whatTheFuck}
                </p>
                <div className="hero">
                    <h1 className="title">Welcome to Next!</h1>
                    <p className="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>

                    <div className="row">
                        <Link href="https://github.com/zeit/next.js#getting-started">
                            <a className="card">
                                <h3>Getting Started &rarr;</h3>
                                <p>Learn more about Next on Github and in their examples</p>
                            </a>
                        </Link>
                        <Link href="https://open.segment.com/create-next-app">
                            <a className="card">
                                <h3>Examples &rarr;</h3>
                                <p>
                                    Find other example boilerplates on the <code>create-next-app</code> site
                                </p>
                            </a>
                        </Link>
                        <Link href="/about">
                            <a className="card">
                                <h3>关于我们</h3>
                                <p>想了解更多有关RopeGirl的信息,请点击这里</p>
                            </a>
                        </Link>
                    </div>
                </div>

                <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title, .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9B9B9B;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
            </div>
        )
    }
}

export default withRedux(store, ({about}) => ({about}))(Index);

