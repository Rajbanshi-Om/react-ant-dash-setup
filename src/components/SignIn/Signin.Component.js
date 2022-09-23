import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RequestApi } from "../../lib/AxiosIntercepter/axios-util";
import './signin.css'
const SignInComponent = () => {
    const navigate =  useNavigate()
    const onFinish = async(values) => {
        console.log('Success:', values);
        const newData = {
            email: values.email,
            password:values.password
        }
        const result = await RequestApi({ url: '/auth/login',method:'post' ,data: newData })
        console.log("result", result)
        if (result.status === 200 && result.data.accessToken) {
            navigate('/')
        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    return ( 
        <>

            <Row    style={{height:'100vh', padding:'2px',backgroundColor:'#EFEFEF' }}  justify="center" align="middle">
                <Col xs={24} sm={24} md={10} lg={6} >
                    <Card className="card_shadow" style={{ width: "100%" }}
                        title={
                            <>
                                <Row justify="center">
                                    <Col> Login </Col>
                                </Row>
                            </>
                        }>

             <Form
                name="basic"
                layout="vertical"
                size="large"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ type:'email',required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" wrapperCol={{  span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{  span: 24 }}>
                    <Button style={{width: '100%'}}  type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                </Form>
                    </Card>
                </Col>
                </Row>
        </>
     );
}
 
export default SignInComponent;