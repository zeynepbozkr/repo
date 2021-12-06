import { restEndpoint } from "../core/url";
import http from "../core/base.api";
import { getAuthHeader } from "../helpers/authorization";

class QuestionAPI {
  // verifySession = async () => {
  //   const [, header] = await getAuthHeader().toArray();

  //   return await http
  //     .get(`${apiEndpoint}/security/verify-session-web`, null, header)
  //     .then((res) => res.data);
  // };

  fetchAllCountries = async () => {
    // const [, header] = await getAuthHeader().toArray();

    return await http.get(`${restEndpoint}/all`).then((res) => res);
  };
}

export default new QuestionAPI();
