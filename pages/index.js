import React, { PureComponent } from "react";
import Layout from "../index.js";
import {
  Form,
  Select,
  Button,
  Icon,
  Divider,
  Avatar,
  Menu,
  Dropdown
} from "antd";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">Show All</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">Notes</a>
    </Menu.Item>
    <Menu.Item key="3">Shops</Menu.Item>
    <Menu.Item key="4">Food &amp; Drink</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5">Want To Go</Menu.Item>
  </Menu>
);

const FormItem = Form.Item;
const Option = Select.Option;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          style={{ display: "flex", flex: 1, height: "100vh", width: "100vw" }}
        >
          <div
            style={{
              zIndex: 100,
              position: "absolute",
              top: 10,
              left: 10,
              background: "white",
              padding: 10,
              borderRadius: 3,
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.2), 0 -1px 0px rgba(0,0,0,0.02)"
            }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Divider type="vertical" />
            <Icon type="environment" /> <strong><span style={{ color: 'black' }}>See</span>gment</strong>
            <Divider type="vertical" />
            <Button type="primary">Add New Story</Button>
            <Divider type="vertical" />
            <Dropdown overlay={menu} trigger={["click"]}>
              <a className="ant-dropdown-link" href="#">
                Show All <Icon type="down" />
              </a>
            </Dropdown>
            <Divider type="vertical" />
            <Button type="ghost" icon="search" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
