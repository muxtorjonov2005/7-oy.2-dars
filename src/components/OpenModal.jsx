import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../store/modalSlice';

function OpenModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modal.isOpen);

  return (
    <div className="p-4">
      <button
        onClick={() => dispatch(openModal())}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 opacity-75 fixed inset-0"></div>
          <div className="bg-white p-6 rounded-lg z-50 shadow-lg">
            <div className="mb-4">Modal Oyna</div>
            <button
              onClick={() => dispatch(closeModal())}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 cursor-pointer"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenModal;
