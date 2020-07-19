const jsonpatch = require("fast-json-patch");
const jose = require("jose");

const generatePatch = (doc1, doc2) => {
  const patch = jsonpatch.compare(doc1, doc2);
  return patch;
};

const signPatch = (patch, kid, privateKeyJwk) => {
  const jws = jose.JWS.sign(
    {
      "ietf-json-patch": patch,
    },
    jose.JWK.asKey(privateKeyJwk),
    {
      kid,
    }
  );
  return jws;
};

const decodeComplete = (jws) => {
  return jose.JWT.decode(jws, { complete: true });
};

const applyPatch = (state, patch) => {
  const document = jsonpatch.applyPatch(state, patch).newDocument;
  return document;
};

module.exports = { generatePatch, signPatch, decodeComplete, applyPatch };
