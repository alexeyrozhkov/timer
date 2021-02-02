import './FunctionalButtons.css';

export function FunctionalButtons(props) {
    return(
        <div className='buttons'>
            <div className='button-group'>
                <button className='button circle' onClick={props.circle}>Circle</button>
                <button className='button drop' onClick={props.drop}>Drop</button>
            </div>
            <div className='button-group'>
                <button className='button start' onClick={props.start}>Start</button>
                <button className='button stop' onClick={props.stop}>Stop</button>
            </div>
        </div>
    )
}