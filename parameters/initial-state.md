# Extension DID Parameter: initial-state

This specification defines a new DID parameter, to be included in the [DID Spec Registries](https://w3c.github.io/did-spec-registries/).

## Status

Work-in-progress

## Syntax

The parameter name is `initial-state`. The range of possible values is method-specific and MUST be defined
by the applicable DID method specification.

## Definition

This DID parameter is used to include data in a DID URL that makes it possible to resolve a DID
in situations when the DID method's [Create operation](https://w3c.github.io/did-core/#create) has not
been completed yet. Many DID methods require a period of time (which may be indefinite) between the
generation of a DID and the DID being anchored/propagated in the underlying ledger system, and other
layers for which propagation delays may apply. This DID parameter enables resolution of unpropagated and
unpublished DIDs.

## Examples

 * `did:example:WRfXPg8dantKVubE3HX8pw?initial-state=eyJkZWx0YV9oYXNoIjoiRWlDUlRKZ2Q0U0V2YUZDLW9fNUZjQnZJUkRtWF94Z3RLX3g`
 * `did:example:WRfXPg8dantKVubE3HX8pw?initial-state=eyJkZWx0YV9oYXNoIjoiRWlDUlRKZ2Q0U0V2YUZDLW9fNUZjQnZJUkRtWF94Z3RLX3g#keys-1`

## Interaction with other DID Parameters

TODO

## Related Resources

 * https://identity.foundation/sidetree/spec/#long-form-did-uris

## Contribute

Contributions to this document can be discussed in the DIF I&D Working Group:

 * https://identity.foundation/working-groups/identifiers-discovery.html
 * https://dif.groups.io/g/id-wg/
