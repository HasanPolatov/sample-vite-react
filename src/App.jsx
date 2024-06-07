import React from 'react';

const App = () => {
    const openPDF = () => {
        window.open('https://hasanpolatov.uz/media/315.pdf', '_blank');
    };

    return (
        <div>
            {/* Button which opens PDF file */}
            <button onClick={openPDF}>
                Open PDF
            </button>
        </div>
    );
};

export default App;