# Extension DID Parameters: derivation-scheme, derivation-value

This specification defines two new DID parameters, to be included in the [DID Spec Registries](https://w3c.github.io/did-spec-registries/).

## Status

Work-in-progress

## Syntax

The parameter names are `derivation-scheme` and `derivation-value`. Possibles values for `derivation-scheme` are `bip32` as
well as other derivation schemes. The range of possible values for `derivation-value` depend on the value of
`derivation-scheme`.

## Definition

These DID parameters can be used to include a chain code in a DID URL, which will result in derived keys
in the resolved DID document.

TODO

## Examples

 * `did:example:123?derivation-scheme=bip32&derivation-value=...`

## Interaction with other DID Parameters

TODO

## Related Resources

 * https://hackmd.io/FcS0GDJSSKaI5EMUjAOA4A

## Contribute

Contributions to this document can be discussed in the DIF I&D Working Group:

 * https://identity.foundation/working-groups/identifiers-discovery.html
 * https://dif.groups.io/g/id-wg/
