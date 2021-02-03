import http from "../common/js/request";

export function getHomeData() {
  return http.get("/home");
}
