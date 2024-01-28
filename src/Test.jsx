import React from "react";
import { Image, Button, Flex } from "antd";
const Test = () => (
  <>
    <Image.PreviewGroup
      preview={{
        onChange: (current, prev) =>
          console.log(`current index: ${current}, prev index: ${prev}`),
      }}
    >
      <Image
        width={200}
        src="https://i.pinimg.com/originals/71/56/48/7156480387bffb8a0f1f3bee952ee882.png"
      />
    </Image.PreviewGroup>

    <Flex vertical
    gap="large"
    style={{
      width: '10%',
      marginTop: '50px',
    }}>
      <Button type="primary" href="/" 
      style={{
      display: 'flex',
      backgroundColor: 'red',
      fontSize: '20px',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
        Sair
      </Button>
    </Flex>
  </>
);
export default Test;
