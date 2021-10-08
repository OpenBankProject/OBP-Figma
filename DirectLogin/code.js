var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 350, height: 550, title: "OBP Plugin 1" });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.type === "savetoken") {
        console.log("savetoken. Token: " + msg.token);
        yield figma.clientStorage.setAsync('token', msg);
    }
    else if (msg.type === "fetchtoken") {
        console.log("fetchtoken");
        const dataFetched = yield figma.clientStorage.getAsync('token');
        console.log("Token fetched : " + JSON.stringify(dataFetched));
        figma.ui.postMessage({
            type: 'fetchtoken',
            token: dataFetched.token
        });
    }
    else if (msg.type === "clear") {
        console.log("clear");
        yield figma.clientStorage.setAsync('token', null);
    }
});
