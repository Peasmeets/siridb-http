import React from 'react';
import Reflux from 'reflux-edge';
import { render } from 'react-dom';
import DatabaseStore from '../../Stores/DatabaseStore.jsx';
import { Modal } from 'react-bootstrap';

class InfoModal extends Reflux.Component {

    static propTypes = {
        show: React.PropTypes.bool.isRequired,
        onHide: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.store = DatabaseStore;
    }

    render() {

        return  (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <img src="/static/img/siridb-large.png" alt="SiriDB Logo" />
                    <dl className="dl-horizontal">
                        <dt>Database:</dt>
                        <dd>{this.state.dbname}</dd>
                        <dt>SiriDB:</dt>
                        <dd>{this.state.version}</dd>
                        <dt>HTTP Server:</dt>
                        <dd>{this.state.httpServer}</dd>
                    </dl>
                </Modal.Body>
            </Modal>
        );
    }
}

export default InfoModal;
