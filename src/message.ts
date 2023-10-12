function makeMessage(params: {
  header?: {
    title: string;
    subtitle?: string;
  }[];
  body?: string[];
}) {
  const headerMessage: string[] = [];

  params.header?.forEach((headerRow) => {
    if (headerRow.title) {
      if (headerRow.subtitle) {
        headerMessage.push(`<b>${headerRow.title}</b>: ${headerRow.subtitle}`);
      } else {
        headerMessage.push(`<b>${headerRow.title}</b>`);
      }
    }
  });

  const bodyMessage: string[] = [];

  params.body?.forEach((bodyRow) => {
    if (bodyRow) {
      bodyMessage.push(bodyRow);
    }
  });

  const message = [
    ...[headerMessage.length ? [headerMessage.join("\n\n")] : []],
    ...[bodyMessage.length ? [bodyMessage.join("\n")] : []],
  ];

  return message.join("\n\n");
}

function makeEntityMessage(params: {
  title?: string;
  fallback?: string;
  comment?: string;
  properties?: {
    name?: string;
    value: string | number;
    children?: string[];
  }[];
}) {
  const message: string[] = [];

  if (params.title) {
    message.push(`<b>${params.title}:</b>`);
  }

  const propertiesMessage: string[] = [];

  params.properties?.forEach((propertyRow) => {
    const propertyRowMessage: string[] = ["— "];

    if (propertyRow.name) {
      propertyRowMessage.push(`<i>${propertyRow.name}:</i> `);
    }

    if (propertyRow.value !== null && propertyRow.value !== undefined) {
      propertyRowMessage.push(propertyRow.value.toString());
    }

    const propertyRowChildrenMessage: string[] = [];

    propertyRow.children?.forEach((childrenRow) => {
      if (childrenRow) {
        propertyRowMessage.push(`    • ${childrenRow}`);
      }
    });

    propertiesMessage.push(propertyRowMessage.join(""));

    if (propertyRow.children?.length) {
      propertiesMessage.push(propertyRowChildrenMessage.join("\n"));
    }
  });

  if (params.properties?.length) {
    message.push(propertiesMessage.join("\n"));
  } else {
    if (params.fallback) {
      message.push(params.fallback);
    }
  }

  if (params.comment) {
    message.push(params.comment);
  }

  return message.join("\n\n");
}

export const messageHelper = {
  makeMessage,
  makeEntityMessage,
};
