function makePayload(payload: {
  action: string;
  data?: number | string | object;
}) {
  if (!payload.action) {
    return '';
  }

  if (!payload.data) {
    return payload.action;
  }

  const isDataObject =
    typeof payload.data === 'object' && payload.data !== null;

  const preparedData = isDataObject
    ? Object.values(payload.data).join(':')
    : payload.data;

  return [payload.action, preparedData].join(':');
}

function getPayload(ctx: any, dataKeys: string[] = []) {
  const payloadHash = ctx?.update?.callback_query?.data;

  if (!payloadHash) {
    return {
      action: '',
      data: null,
    };
  }

  const [action, ...dataValues] = payloadHash.split(':');

  const data = dataKeys.reduce<{ [key: string]: any }>(
    (accData, dataKey, dataKeyIndex) => {
      return {
        ...accData,
        [dataKey]: dataValues[dataKeyIndex],
      };
    },
    {},
  );

  return {
    action,
    data: dataKeys.length ? data : dataValues[0],
  };
}

export const callbackQueryHelper = {
  makePayload,
  getPayload,
};
