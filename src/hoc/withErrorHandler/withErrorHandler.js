import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                    error : null
            };
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.respInterceptor = axios.interceptors.response.use(res => res , error => {
                this.setState({error : error});
            });
        }
        
        componentDidMount(){
            console.log('did mount error')
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.respInterceptor);
        }

        errorConfirmHandler = () => {
            this.setState({error : null});
        }

        render() {
            return (
                <Auxiliary>
                    <Modal 
                        show = {this.state.error}
                        modalClosed= {this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                        <WrappedComponent {...this.props}></WrappedComponent>
                </Auxiliary>
            );

        }
    }
}

export default withErrorHandler;