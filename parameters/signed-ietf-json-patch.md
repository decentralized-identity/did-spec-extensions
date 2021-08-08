# Extension DID Parameter: signedIetfJsonPatch

This specification defines a new DID parameter, to be included in the [DID Spec Registries](https://w3c.github.io/did-spec-registries/).

## Status

Work-in-progress

## Syntax

The parameter name is `signedIetfJsonPatch`. The value is always a JWS of the following decoded form:

```json
{
  "header": { "alg": "ES256K", "kid": "did:example:123#456" },
  "payload": {
    "ietf-json-patch": [
      {
        "op": "add",
        "path": "/publicKey/1",
        "value": {
          "id": "#4SZ-StXrp5Yd4_4rxHVTCYTHyt4zyPfN1fIuYsm6k3A",
          "type": "JsonWebKey2020",
          "controller": "did:key:z6MknSQNZ7bZwS9xtEnhvr549m8xPJFXjNepmSgeJj837gmS",
          "publicKeyJwk": {
            "crv": "secp256k1",
            "x": "Z4Y3NNOxv0J6tCgqOBFnHnaZhJF6LdulT7z8A-2D5_8",
            "y": "i5a2NtJoUKXkLm6q8nOEu9WOkso1Ag6FTUT6k_LMnGk",
            "kty": "EC",
            "kid": "4SZ-StXrp5Yd4_4rxHVTCYTHyt4zyPfN1fIuYsm6k3A"
          }
        }
      }
    ]
  },
  "signature": "tyh-VfuzIxCyGYDlkBA7DfyjrqmSHu6pQ2hoZuFqUSLPNY2N0mpHb3nk5K17HWP_3cYHBw7AhHale5wky6-sVA"
}
```

## Definition

The purpose of `signedIetfJsonPatch` is to enable any DID controller to propose changes to a DID Document by constructing a DID URI.

In order to verify that the changes are from the controller, the receiver of the DID URI MUST perform the following steps:

1. Decode the JWS.
2. Perform DID Resolution on the value of `kid`.
3. Ensure there existed a `verificationMethod` with `id` === `kid` in the `authentication` verification relationship section.
4. Convert the key to JWK if necessary.
5. Perform JWS verification

If JWS verification fails, the receiver MUST abort.

If JWS verification suceeds, the receiver MUST compute the propsed changes as follows:

1. Decode the JWS, and obtain the value of property `ietf-json-patch` as `patch0`.
2. Resolve the DID Document as `state0`.
3. Compute `state1` as the document produced by the application of `applyPatch` to `state0` and `patch0`.
4. Let `state1` be the DID Document with the changes proposed by the DID URI.

## Examples

- `did:example:123?signedIetfJsonPatch=eyJraWQiOiJkaWQ6ZXhhbXBsZTo0NTYjX1FxMFVMMkZxNjUxUTBGamQ2VHZuWUUtZmFIaU9wUmxQVlFjWV8tdEE0QSIsImFsZyI6IkVkRFNBIn0.eyJpZXRmLWpzb24tcGF0Y2giOlt7Im9wIjoiYWRkIiwicGF0aCI6Ii9wdWJsaWNLZXkvMSIsInZhbHVlIjp7ImlkIjoiIzRTWi1TdFhycDVZZDRfNHJ4SFZUQ1lUSHl0NHp5UGZOMWZJdVlzbTZrM0EiLCJ0eXBlIjoiSnNvbldlYktleTIwMjAiLCJjb250cm9sbGVyIjoiZGlkOmtleTp6Nk1rblNRTlo3Ylp3Uzl4dEVuaHZyNTQ5bTh4UEpGWGpOZXBtU2dlSmo4MzdnbVMiLCJwdWJsaWNLZXlKd2siOnsiY3J2Ijoic2VjcDI1NmsxIiwieCI6Ilo0WTNOTk94djBKNnRDZ3FPQkZuSG5hWmhKRjZMZHVsVDd6OEEtMkQ1XzgiLCJ5IjoiaTVhMk50Sm9VS1hrTG02cThuT0V1OVdPa3NvMUFnNkZUVVQ2a19MTW5HayIsImt0eSI6IkVDIiwia2lkIjoiNFNaLVN0WHJwNVlkNF80cnhIVlRDWVRIeXQ0enlQZk4xZkl1WXNtNmszQSJ9fX1dfQ.OgW0DB8SCVSBrSPA4yXcXLH8tcZcC5SbrqKye0qEWytC3gmA7mLU9BrZzT7IWv0S3KNo8Ftkn5X1l8w7TPsQAw`

## Use Cases

1. Asking someone to modify their did document.
2. Allow for verification of signatures from the changed did document. The signatures must be associated with the Full DID URI!
3. Privacy protecting enhancements to a did document. Adding social media accounts, github accounts or personal web sites to service endpoints.

## Interaction with other DID Parameters

#### [initial-state](https://github.com/decentralized-identity/did-spec-extensions/blob/master/parameters/initial-state.md)

Unlike `initial-state` the format of `signedIetfJsonPatch` is always the same, and is NOT DID Method specific.

When `initial-state` is present, it is processed first by the DID Method Resolver, so `signedIetfJsonPatch` and `initial-state` MAY be present in the same DID URI.

#### KERI / DID Peer / DID Key / Sidetree Methods

Some DID Methods have identifiers which can be used to deterministically generate a did document, others rely on DID Parameters like `initial-state` to achieve the same.
`signedIetfJsonPatch` can be used to provide an authenticable augmentation of this deterministic DID Document, however, these transformed DID documents are not the same as the result of performing an Update Operation in the underlying DID Method.
In the case that a DID Method encodes Update Operations into DID Parameters, those updates MUST be applied before `signedIetfJsonPatch`.

## Related Resources

- [JavaScript Object Notation (JSON) Patch)](https://tools.ietf.org/html/rfc6902)
- [JSON Web Signature (JWS)](https://tools.ietf.org/html/rfc7515)

## Contribute

Contributions to this document can be discussed in the DIF I&D Working Group:

- https://identity.foundation/working-groups/identifiers-discovery.html
- https://dif.groups.io/g/id-wg/
