import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const BottomSheetModal = ({ isOpen, onClose, children }) => {
    return (
        <Transition in={isOpen} timeout={300} unmountOnExit>
            {state => (
                <div
                    className={`fixed inset-0 flex items-end justify-center z-50 transition-opacity ${state === 'entering' || state === 'exiting' ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    <div className="fixed w-full max-w-lg p-4 transform transition-transform bg-white rounded-t-lg shadow-lg sm:max-w-xl">
                        <div className="relative p-6">
                            <button
                                onClick={onClose}
                                className="absolute top-1 right-4 text-gray-400 hover:text-gray-600"
                            >
                                &times;
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default BottomSheetModal;
