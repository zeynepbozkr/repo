import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import StoreProvider from "../utils/store-provider";
import { Button, Card, Radio } from "antd";
import styles from "./Question.module.css";

const QuestionStore = StoreProvider.getStore("QuestionStore");

const Question = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Card className={styles.card}>
        <div style={{ textAlign: "center" }}>
          {QuestionStore.allCountries[count]?.name}
        </div>
        <br />
        <Radio>
          <br />
          <img
            style={{
              width: "100px",
            }}
            src={QuestionStore.allCountries[count]?.flag}
          ></img>
          <div></div>
          <div> {QuestionStore.allCountries[count]?.capital}</div>
          <div> {QuestionStore.allCountries[count]?.region}</div>
          <div> {QuestionStore.allCountries[count]?.borders?.length}</div>
        </Radio>
      </Card>
      <Button
        onClick={() =>
          setCount(
            Math.floor(Math.random() * QuestionStore.allCountries.length)
          )
        }
      >
        NEXT
      </Button>
    </div>
  );
};

export default observer(Question);
