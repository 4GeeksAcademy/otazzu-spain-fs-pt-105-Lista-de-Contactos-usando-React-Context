import React from "react";

export const ConfirmModal = ({ contactToDelete, confirmDelete, cancelDelete }) => {
    return (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Deletion</h5>
                        <button type="button" className="btn-close" onClick={cancelDelete} />
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete <strong>{contactToDelete?.name}</strong>?</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={cancelDelete}>Cancel</button>
                        <button className="btn btn-danger" onClick={confirmDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
