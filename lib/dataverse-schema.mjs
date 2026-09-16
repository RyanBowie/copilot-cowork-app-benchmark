export const tag = "CoworkAppBenchmark-Test02-Dataverse-20260916";
export const solutionName = "ManagedAppBenchmark";
export const solutionDisplayName = "Device Procurement";
export const solutionDescription = "Company device inventory, employee equipment requests and approval workflow.";
export const prefix = "mab";
export const categories = { Laptop: 100000000, Accessory: 100000001, Tablet: 100000002, Monitor: 100000003 };
export const statuses = { Pending: 100000000, Approved: 100000001, Rejected: 100000002 };
export const label = (text) => ({ LocalizedLabels: [{ Label: text, LanguageCode: 1033 }] });
const common = (name, title, required = true) => ({
  SchemaName: `${prefix}_${name}`, DisplayName: label(title),
  Description: label(`${title}.`),
  RequiredLevel: { Value: required ? "ApplicationRequired" : "None" },
});
const text = (name, title, length = 100, required = true) => ({
  ...common(name, title, required), "@odata.type": "Microsoft.Dynamics.CRM.StringAttributeMetadata",
  MaxLength: length, FormatName: { Value: "Text" },
});
const integer = (name, title, min) => ({
  ...common(name, title), "@odata.type": "Microsoft.Dynamics.CRM.IntegerAttributeMetadata",
  MinValue: min, MaxValue: 1000000, Format: "None",
});
const memo = (name, title, required = true) => ({
  ...common(name, title, required), "@odata.type": "Microsoft.Dynamics.CRM.MemoAttributeMetadata",
  MaxLength: 4000, Format: "Text",
});
const choice = (name, title, values, defaultValue) => ({
  ...common(name, title), "@odata.type": "Microsoft.Dynamics.CRM.PicklistAttributeMetadata",
  ...(defaultValue === undefined ? {} : { DefaultFormValue: defaultValue }),
  OptionSet: {
    "@odata.type": "Microsoft.Dynamics.CRM.OptionSetMetadata", IsGlobal: false, OptionSetType: "Picklist",
    Options: Object.entries(values).map(([name, value]) => ({ Value: value, Label: label(name) })),
  },
});
const primary = (title) => ({ ...text("Name", title, 120), IsPrimaryName: true });
const dataset = () => ({
  ...text("BenchmarkTag", "Demo dataset", 100),
  Description: label(`${tag}; internal record-isolation key, not displayed in the application.`),
});
const table = (key, schema, singular, plural, businessKey, fields) => ({
  key, logicalName: `${prefix}_${schema.toLowerCase()}`, businessKey: `${prefix}_${businessKey}`,
  definition: {
    "@odata.type": "Microsoft.Dynamics.CRM.EntityMetadata",
    SchemaName: `${prefix}_${schema}`, DisplayName: label(singular), DisplayCollectionName: label(plural),
    Description: label(key === "devices"
      ? "Company laptops, accessories, tablets and monitors, with prices and available stock."
      : "Employee equipment requests, business justifications and approval decisions."),
    OwnershipType: "UserOwned", IsActivity: false, HasActivities: false, HasNotes: false,
    Attributes: [primary(key === "devices" ? "Device name" : "Request ID")],
  },
  fields,
});
export const tables = [
  table("devices", "BenchmarkDevice", "Device List", "Device List", "devicecode", [
    text("DeviceCode", "Device ID", 40),
    choice("Category", "Category", categories),
    {
      ...common("UnitPriceGBP", "Unit price GBP"),
      "@odata.type": "Microsoft.Dynamics.CRM.DecimalAttributeMetadata",
      MinValue: 0, MaxValue: 100000000, Precision: 2,
    },
    integer("AvailableQuantity", "Available quantity", 0),
    dataset(),
  ]),
  table("requests", "BenchmarkRequest", "Device Requests", "Device Requests", "name", [
    text("Requester", "Requester", 80), text("Department", "Department", 80),
    text("CostCentre", "Cost centre", 40), text("DeviceCode", "Device ID", 40),
    integer("Quantity", "Quantity", 1),
    {
      ...common("NeededBy", "Needed by"),
      "@odata.type": "Microsoft.Dynamics.CRM.DateTimeAttributeMetadata",
      Format: "DateOnly", DateTimeBehavior: { Value: "DateOnly" },
    },
    memo("Justification", "Business justification"),
    choice("RequestStatus", "Request status", statuses, statuses.Pending),
    memo("RejectionReason", "Rejection reason", false),
    dataset(),
  ]),
];
export function seedRows(seed, key) {
  if (key === "devices") return seed.devices.map((row) => ({
    mab_name: row.name, mab_devicecode: row.id, mab_category: categories[row.category],
    mab_unitpricegbp: row.unitPriceGBP, mab_availablequantity: row.availableQuantity, mab_benchmarktag: tag,
  }));
  return seed.requests.map((row) => ({
    mab_name: row.id, mab_requester: row.requester, mab_department: row.department,
    mab_costcentre: row.costCentre, mab_devicecode: row.deviceId, mab_quantity: row.quantity,
    mab_neededby: row.neededBy, mab_justification: row.justification,
    mab_requeststatus: statuses[row.status],
    mab_rejectionreason: row.rejectionReason === "" ? null : row.rejectionReason,
    mab_benchmarktag: tag,
  }));
}
