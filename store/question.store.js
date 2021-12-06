import { action, makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import QuestionAPI from "../api/question.api";

class QuestionStore {
  allCountries = [];
  diffucultQuestion = false;
  mediumQuestion = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchAllData() {
    const [err, response] = await QuestionAPI.fetchAllCountries().toArray();

    console.log(response, "ASD");
    if (!err && response) {
      runInAction(() => {
        this.allCountries = response;
      });
    }
    return !err;
  }
}

export default new QuestionStore();
