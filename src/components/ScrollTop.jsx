import { library } from '@fortawesome/fontawesome-svg-core';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faAnglesUp);

export default function ScrollTop(){
    return(
        <button className="scroll-to-top-button">
            <FontAwesomeIcon className='fa-thin' icon={faAnglesUp} />
        </button>
    );
}