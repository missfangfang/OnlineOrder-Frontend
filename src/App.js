import { Layout } from "antd";

const { Header, Content } = Layout;

// App是一个component，因为在index.js里面有<App />
function App() {
  return (
    // 100vh (viewport height) - 100%占满整个网页页面
    // Ant Design固定header高度64px
    <Layout style={{ height: "100vh" }}>
      <Header>header</Header>  
      <Content
        style={{
          padding: "50px",
          maxHeight: "calc(100% - 64px)", // 这是一个css函数：content元素的爹的100%减去64px
          overflowY: "auto",  // Y轴溢出前不做任何处理，auto在溢出的时候会产生一个scroll bar
        }}
      >
        content
      </Content>
    </Layout>
  );
}

export default App;