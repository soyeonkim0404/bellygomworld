import paginate from "jw-paginate";
const log4js = require("log4js");
const url = require("url");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "debug" } },
});

const logger = log4js.getLogger("cheese");

const data = require("./testData.json");
const express = require("express");
const app = express();

data.forEach((item) => {
  item.attributes.forEach((attr) => {
    item[attr.trait_type] = attr.value;
  });
});

logger.level = "debug";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.queryData = url.parse(req.url, true).query;
  logger.debug({ queryData: req.queryData });
  next();
});

app.get("/", (req, res, next) => {
  try {
    logger.debug(
      "----------------------------------------------------------------------------------------------------------------"
    );
    logger.debug({ query: req.query });
    logger.debug({ queryData: req.queryData });

    // filter
    const filter = {};
    for (const [key, value] of Object.entries(req.queryData)) {
      if (["page", "pageSize", "keyword", "orderBy"].includes(key)) continue;
      if (value === "") continue;
      filter[key] = value.split(",");
    }
    logger.debug({ filter: filter });
    let items = data.filter((a) => {
      const val = [];
      for (const [key, value] of Object.entries(filter)) {
        val.push(value.includes(a[key]));
      }
      return !val.includes(false);
    });

    // orderBy
    function compare(a, b) {
      const key = ["1", "2"].includes(req.queryData.orderBy) ? "rank" : "id";
      if (a[key] < b[key]) return -1;
      if (a[key] < b[key]) return 1;
      return 0;
    }
    items.sort(compare);
    // orderBy 역순 정렬
    if (["2", "4"].includes(req.queryData.orderBy)) {
      items.reverse();
    }

    // keyword
    if (req.queryData.keyword) {
      items = items.filter((a) => {
        return a.name.includes(req.queryData.keyword);
      });
    }

    const page = parseInt(req.queryData.page) || 1;
    const pageSize = parseInt(req.queryData.pageSize) || 10;

    logger.debug(items.length);
    logger.debug(page);
    logger.debug(pageSize);

    const pager = paginate(items.length, page, pageSize);
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    logger.debug({ pager: pager });
    return res.json({
      pager,
      pageOfItems: pager.totalPages < page ? [] : pageOfItems,
    });
  } catch (e) {
    logger.debug(e);
  }
});

module.exports = {
  path: "/apiBellyPhoto",
  handler: app,
};
