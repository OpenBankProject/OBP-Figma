
figma.showUI(__html__, { width: 350, height: 550, title: "OBP Plugin 1" });

figma.ui.onmessage = async (msg) => {


  if (msg.type === "savetoken") {

    console.log("savetoken. Token: " + msg.token);
    await figma.clientStorage.setAsync('token', msg);

  } else if (msg.type === "fetchtoken") {

    console.log("fetchtoken");
    const dataFetched = await figma.clientStorage.getAsync('token');
    console.log("Token fetched : " + JSON.stringify(dataFetched));

    figma.ui.postMessage({
      type: 'fetchtoken',
      token: dataFetched.token
    })

  } else if (msg.type === "clear") {

    console.log("clear");
    await figma.clientStorage.setAsync('token', null);

  }
}

