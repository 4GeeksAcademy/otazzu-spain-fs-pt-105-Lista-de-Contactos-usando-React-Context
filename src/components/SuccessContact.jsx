import React from 'react';

export const SuccessContact = () => {
    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Contact created!</h5>
                    </div>
                    <div className="modal-body">
                        <p>The contact was created successfully.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
