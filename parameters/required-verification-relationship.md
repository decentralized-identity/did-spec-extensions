# Extension DID Parameter: requiredVerificationRelationship

This specification defines a DID URL parameter for ensuring that the dereferenced verification method is linked to its DID Document by the specified verification relationship.

## Status

Work-in-progress

## Syntax

The parameter name is `requiredVerificationRelationship`. Possibles values are any verification relationship (see [DID Core specification](https://www.w3.org/TR/did-core/#verification-relationships) for a list).

## Definition

This DID parameter instructs a DID URL dereferencer to return the verification method in the DID document only if it is present under the Document for the specified verification relationship.
If the dereferenced resource is not a verification method, this parameter MUST be disregarded by the dereferencer.

If no verification method with the provided identifier and requested verification relationship is found during the dereference process, then the dereferenced must return an `notFound` error, as described in the [DID Core specification](https://www.w3.org/TR/did-core/#did-url-dereferencing-metadata).

If the value of this parameter is invalid, the dereferencer must return an [`invalidVerificationRelationship error`](../error-codes/invalid-verification-relationship.md).

## Examples

* `did:example:123?requiredVerificationRelationship=authentication#key-1`
* `did:example:123?requiredVerificationRelationship=assertionMethod#key-2`
* `did:example:123?requiredVerificationRelationship=keyAgreement#key-3`
* `did:example:123?requiredVerificationRelationship=capabilityDelegation#key-4`
* `did:example:123?requiredVerificationRelationship=capabilityInvocation#key-5`

## Interaction with other DID Parameters

The new parameter does not transform the expected result of the dereferenced resource in any way, but simply acts as an additional filter.
Hence, the evaluation of this parameter should be performed before applying any user-requested transformations (e.g., [transformKeys](transform-keys.md)), and only if the dereferenced resource is a verification method.

## Related Resources

* https://www.w3.org/TR/did-core/#verification-relationships

## Contribute

Contributions to this document can be discussed in the DIF I&D Working Group:

 * https://identity.foundation/working-groups/identifiers-discovery.html
 * https://dif.groups.io/g/id-wg/
