import React from 'react';

export default function ListButton({status, handleAddInput}) {
    return (
        <div>
            {status === 'add'
            ? <button onClick={handleAddInput}>+</button>
            : <button >x</button>
            }
        </div>
    );
}

