import TestTwoWidget from '@acm-widgets/testtwo/frontend/src/widget/Widget.jsx';
import TestThreeWidget from '@acm-widgets/testthree/frontend/src/widget/Widget.jsx';

import './App.css';

// DO NOT CHANGE
function App() {
    return (
        <>
            <h1 className="main-title">Austin Code Mentorship Widgets</h1>
            <div className="widgets">
                <TestTwoWidget apiUrl={`http://127.0.0.1:5000/api/testtwo`} />
                <TestThreeWidget
                    apiUrl={`http://127.0.0.1:5000/api/testthree`}
                />
            </div>
            <a
                href="https://github.com/me-julian/acm-widgets"
                target="_blank"
                referrerPolicy="noReferrer"
                className="link link--grey"
            >
                Click here to learn more about this website
            </a>
        </>
    );
}

export default App;
