import { Layout, Typography } from "antd";
import { useState } from "react";
import FoodList from "./components/FoodList";
import LoginForm from "./components/LoginForm";
import MyCart from "./components/MyCart";
import SignupForm from "./components/SignupForm";

const { Header, Content } = Layout;
const { Title } = Typography;

// App是一个component，因为在index.js里面有<App />
function App() {
  const [authed, setAuthed] = useState(false);  // check if user is logged in，默认没有登录

  return (
    // 100vh (viewport height) - 100%占满整个网页页面
    // Ant Design固定header高度64px
    // {{ height: "100vh" }}: 里面括号是个普通JS object不需要翻译，外面括号告诉babel停止翻译，直到下一个括号继续翻译
    <Layout style={{ height: "100vh" }}>
      <Header>
        <div>
          <Title
            level={2}
            style={{ color: "white", lineHeight: "inherit", marginBottom: 0 }}
          >
            LaiFood
          </Title>
          <div>{authed ? <MyCart /> : <SignupForm />}</div>
        </div>
      </Header>
      <Content
        style={{
          padding: "50px",
          maxHeight: "calc(100% - 64px)", // 这是一个css函数：content元素的爹的100%减去64px
          overflowY: "auto",  // Y轴溢出前不做任何处理，auto在溢出的时候会产生一个scroll bar
        }}
      >
        {authed ? (
          <FoodList />
        ) : (
          <LoginForm onSuccess={() => setAuthed(true)} />
        )}
      </Content>
    </Layout>
  );
}

export default App;