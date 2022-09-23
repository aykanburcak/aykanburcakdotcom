import delve from "delve";
import {checkRequiredData} from "./check-required-data";

export async function getDataDependencies(json) {
  let blocks = delve(json.attributes, "blocks", []);
  blocks = await Promise.all(blocks.map(checkRequiredData));
  return {
    ...json,
    blocks,
  };
}
