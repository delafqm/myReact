import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import { GlobalFooter } from 'ant-design-pro';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: '首页',
          title: '首页',
          href: '#',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: '#',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '技术框架来源：Ant Design',
          href: '#',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2019 方琪敏
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
