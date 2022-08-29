import paginate from "jw-paginate";
const log4js = require("log4js");

log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "debug" } },
});

const logger = log4js.getLogger("cheese");

const data = require('./testData.json');
const express = require("express");
const app = express();

data.forEach((item) => {
  item.attributes.forEach((attr) => {
    item[attr.trait_type] = attr.value;
  });
});

logger.level = "debug";

app.get("/", (req, res, next) => {
  logger.debug('----------------------------------------------------------------------------------------------------------------');
  logger.debug(process.server);
  logger.debug(process.client);
  logger.debug(data[0]);
  logger.debug(data.length);
  // filter
  const filter = {};
  for (const [key, value] of Object.entries(req.query)) {
    if (["page", "pageSize", "keyword", "orderBy"].includes(key)) continue;
    if (value === "") continue;
    filter[key] = value.split(",");
  }

  let items = data.filter((a) => {
    const val = [];
    for (const [key, value] of Object.entries(filter)) {
      val.push(value.includes(a[key]));
    }
    return !val.includes(false);
  });

  logger.debug(items[0].name);

  // orderBy
  function compare(a, b) {
    const key = ["1", "2"].includes(req.query.orderBy) ? "rank" : "id";
    if (a[key] < b[key]) return -1;
    if (a[key] < b[key]) return 1;
    return 0;
  }
  items.sort(compare);
  // orderBy 역순 정렬
  if (["2", "4"].includes(req.query.orderBy)) {
    items.reverse();
  }

  logger.debug(items[0].name);

  // keyword
  items = items.filter((a) => {
    return a.name.includes(req.query.keyword);
  });


  logger.debug(req.query);


  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;


  logger.debug(items.length);
  logger.debug(page);
  logger.debug(pageSize);

  const pager = paginate(items.length, page, pageSize);
  const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
  return res.json({
    pager,
    pageOfItems: pager.totalPages < page ? [] : pageOfItems,
  });
});

module.exports = {
  path: "/apiBellyPhoto",
  handler: app,
};
