// OBP-Figma Copyright (C) 2021 TESOBE GmbH

figma.showUI(__html__, { width: 350, height: 550, title: "OBP Plugin 1" });

figma.ui.onmessage = async (message) => {


  if (message.type === "savetoken") {

    console.log("savetoken. Token: " + message.token);
    await figma.clientStorage.setAsync('token', message);

  } else if (message.type === "fetchtoken") {

    console.log("fetchtoken");
    const dataFetched = await figma.clientStorage.getAsync('token');
    console.log("Token fetched : " + JSON.stringify(dataFetched));

    figma.ui.postMessage({
      type: 'fetchtoken',
      token: dataFetched.token
    })

  } else if (message.type === "clear") {

    console.log("clear");
    await figma.clientStorage.setAsync('token', null);

  }
}

