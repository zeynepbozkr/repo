import StoreProvider from "../utils/store-provider.js";
import QuestionStore from "./question.store";
export const stores = {
  QuestionStore,
};

Object.keys(stores).forEach((store) => {
  StoreProvider.addStore(store, stores[store]);
});
