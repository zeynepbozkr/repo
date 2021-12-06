import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import HomePage from "./InformationPage/index";
import { Row, Col, Image, Button } from "antd";
import "antd/dist/antd.css";
import StoreProvider from "../utils/store-provider";
import style from "../styles/HomePage.module.css";
import { useRouter } from "next/router";

const QuestionStore = StoreProvider.getStore("QuestionStore");

function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = async () => {
    const status = await QuestionStore.fetchAllData();

    if (status) {
      setLoading(false);
    }
  };
  return loading ? (
    <div>LOADİNG</div>
  ) : (
    <div>
      <Row align="top" justify="center">
        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "800px",
            backgroundColor: "#cbb4d4",
          }}
        >
          <Button
            style={{
              backgroundColor: "transparent",
              fontSize: "16px",
            }}
            onClick={() => router.push("/InformationPage")}
          >
            Information
          </Button>
        </Col>

        <Col
          span={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "800px",
            backgroundColor: "#636FA4",
          }}
        >
          <Button
            style={{
              fontSize: "16px",
              backgroundColor: "transparent",
            }}
            onClick={() => router.push("/QuestionPage")}
          >
            Question
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default observer(Home);
