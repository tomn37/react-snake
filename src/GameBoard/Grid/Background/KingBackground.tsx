import React from 'react';
import BulldozerImg from '../../../Assets/bulldozer.jpg';
interface BackgroundProps {
    children: JSX.Element;
}
function KingBackground (props: BackgroundProps) {
    return (<>
                <img className="img-1" alt="" src={BulldozerImg} />
                <img className="img-2" alt="" src={BulldozerImg} />
                <img className="img-3" alt="" src={BulldozerImg} />
                <img className="img-4" alt="" src={BulldozerImg} />
                {props.children}
            </>)
}

export default KingBackground;
