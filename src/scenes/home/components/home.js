import "bootswatch/dist/litera/bootstrap.min.css";
import NAVBAR from "../../../components/Navbar/navbar";
import { Container, Row, Col} from "react-bootstrap";

const HOME = () => {
    return(
        <>
        <Container fluid className={`p-0`}>
            <Row>
                <Col>
                    <NAVBAR/>
                </Col>
            </Row>
        </Container>
    </>
    );
}

export default HOME;
