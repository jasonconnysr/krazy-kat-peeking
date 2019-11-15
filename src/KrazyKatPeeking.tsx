import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/styles.scss';

const rootElement = document.getElementById('krazy-kat-peeking');

class KrazyKatPeeking extends React.Component<Object, Object> {
    render() {
        return (
            <div>
                <h1>Krazy Kat Peeking</h1>
            </div>
        );
    }
}

ReactDOM.render(<KrazyKatPeeking/>, rootElement);

export default KrazyKatPeeking;
