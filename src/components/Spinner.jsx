import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='min-h-[calc(100vh-120px)] flex flex-col justify-center items-center'>
            <ScaleLoader></ScaleLoader>
        </div>
    );
};

export default Spinner;