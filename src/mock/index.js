const Mock = require("mockjs");

Mock.mock(/^\/home/, {
  "data|1-10": [
    {
      "name|5-8": "ja",
    },
  ],
  code: 0,
});
