import React, {useState} from 'react';
import Alert from "react-bootstrap/Alert";

const InfoAlert: React.FC = () => {
    const [show, setShow] = useState(true);

    if (show) {
        setTimeout(() => setShow(false), 4000);

        return (
            <Alert variant="info">
                <Alert.Heading>Awesome!</Alert.Heading>
                <p>
                    Someone added a new user!
                </p>
            </Alert>
        );
    } else {
        return null;
    }
};

export default InfoAlert;
