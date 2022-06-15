export class CreateCatalogDto {
  'version': number;
  'packageIdentifiers': [
    {
      type: string;
      value: number;
    },
  ];
  'longDescription': {
    values: [
      {
        locale: string;
        value: string;
      },
    ];
  };
  'shortDescription': {
    values: [
      {
        locale: string;
        value: string;
      },
    ];
  };
  'merchandiseCategory': {
    nodeId: '1-846-188-450';
  };
  'alternateCategories': [
    {
      nodeId: '1-846-188-450';
    },
  ];
  'status': string;
  'departmentId': number;
  'nonMerchandise': null;
  'familyCode': number;
  'referenceId': number;
  'manufacturerCode': number;
  'externalIdentifiers': [
    {
      type: string;
      value: number;
    },
  ];
  'posNumber': string;
  'sourceSystem': {
    createdBy: string;
    modifiedBy: string;
  };
  'dynamicAttributes': [
    {
      type: string;
      attributes: [
        {
          key: string;
          value: number;
          localizedValue: {
            values: [
              {
                locale: string;
                value: string;
              },
            ];
          };
        },
      ];
    },
  ];
}
