import { Layout, Row, Col } from "antd";
import { LikeOutlined } from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just">
        { <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © 2023, made  by
            <a href="" className="font-weight-bold" target="_blank">
              FIXIT { <LikeOutlined /> }
            </a>
          </div>
        </Col> }
       
      </Row>
    </AntFooter>
  );
}

export default Footer;
