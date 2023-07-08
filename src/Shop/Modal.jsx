import React, { Component } from 'react'

export default class Modal extends Component {
    
    render() {
        console.log(this.props.content)
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fs-1" id="exampleModalLabel">{this.props.content.name}</h5>
                            </div>
                            <div className="modal-body">
                                <img alt='' className='w-75' src={this.props.content.image}/>
                                <p className='fs-3'>{this.props.content.description}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
