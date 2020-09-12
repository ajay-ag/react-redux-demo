import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loading, fetchPost } from '../redux/actions';
import BounceLoader from "react-spinners/ClipLoader";

const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'black'
};

class Blog extends Component {


    postList = () => {

        const posts = this.props.post;

        if (posts.length > 0) {
            return posts.map((post, index) => {

                return (
                    <div key={post.id} className="mb-5 shadow bg-white rounded-lg">
                        <div class="  p-4 border-b border-gray-100">
                            <div class=" bg-size bg-cover bg-center">
                                <div class="py-2 flex items-end text-xl uppercase ">
                                    <h3 className="text-grey-500">{post.title}</h3>
                                </div>
                            </div>
                            <div class="py-2">
                                <p class="text-grey-500 text-sm">{post.body}</p>
                            </div>
                        </div>
                    </div>
                )

            })
        }

        return null

    }

    componentDidMount = () => {
        if (this.props.post.length === 0) {
            this.props.fetchPost();
        }
    }

    render() {

        const loading = this.props.loader;
        return (
            <div className="mx-5 mt-5 ">
                <BounceLoader
                    css={override}
                    loading={loading}
                />
                {
                    (loading !== true) ? this.postList() : null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {

    const { loader, post } = state.postdata

    return {
        loader: loader,
        post: post,
    }

}

const mapDispatchToProps = {
    loading, fetchPost
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog);


