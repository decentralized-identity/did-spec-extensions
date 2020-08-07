const fs = require("fs");
const path = require("path");

const privateKey0 = require("../__fixtures__/private-key-0.json");
const state0 = require("../__fixtures__/state-0.json");
const patch0 = require("../__fixtures__/patch-0.json");
const state1 = require("../__fixtures__/state-1.json");
const signedPatch0 = fs
  .readFileSync(path.resolve(__dirname, "../__fixtures__/signed-patch-0.txt"))
  .toString();
const signedPatch0Decoded = require("../__fixtures__/signed-patch-0-decoded.json");

const lib = require("../lib");

it("patches can be inferred from state change", () => {
  const patch = lib.generatePatch(state0, state1);
  expect(patch).toEqual(patch0);
});

it("patches can be signed", () => {
  const kid = "did:example:456#_Qq0UL2Fq651Q0Fjd6TvnYE-faHiOpRlPVQcY_-tA4A";
  const jws = lib.signPatch(patch0, kid, privateKey0);
  expect(jws).toBe(signedPatch0);
});

it("expect decoded", () => {
  expect(lib.decodeComplete(signedPatch0)).toEqual(signedPatch0Decoded);
});

it("patches can be applied", () => {
  const proposedChanges = lib.applyPatch(state0, patch0);
  expect(proposedChanges).toEqual(state1);
});
