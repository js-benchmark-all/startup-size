// @ts-nocheck
import { Hashing } from "typebox/system"
import { Format } from "typebox/format"
import { Guard } from "typebox/guard"

// @ts-ignore
let external_0 = []

// @ts-ignore
export function SetExternal(external) { external_0 = external.variables }

// @ts-ignore
const check_3a3de13536275f9d = ((value) => ((typeof value === "object" && value !== null && !(Array.isArray(value))) && ((("id" in value && "health" in value) && "inventory" in value) && ((((Number.isInteger(value.id) && (!((Number.isFinite(value.id) || typeof value.id === "bigint")) || value.id >= 0)) && (value.displayName === undefined || (!("displayName" in value) || (typeof value.displayName === "string" && (Guard.StringGraphemeCount(value.displayName) <= 24 && Guard.StringGraphemeCount(value.displayName) >= 3))))) && (Number.isFinite(value.health) && (value.health <= 100 && value.health >= 0))) && (Array.isArray(value.inventory) && (value.inventory.every((element, index) => ((typeof element === "object" && element !== null && !(Array.isArray(element))) && (("id" in element && "tags" in element) && (((Number.isInteger(element.id) && (!((Number.isFinite(element.id) || typeof element.id === "bigint")) || element.id >= 0)) && (element.displayName === undefined || (!("displayName" in element) || (typeof element.displayName === "string" && (Guard.StringGraphemeCount(element.displayName) <= 24 && Guard.StringGraphemeCount(element.displayName) >= 3))))) && (Array.isArray(element.tags) && element.tags.every((element, index) => typeof element === "string")))))) && value.inventory.length <= 30))))));

// @ts-ignore
export function Check(value) { return check_3a3de13536275f9d(value) }