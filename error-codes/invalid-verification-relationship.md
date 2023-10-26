# Extension Error Code: `invalidVerificationRelationship`

This specification defines a new error code, to be included in the [DID Spec Registries](https://w3c.github.io/did-spec-registries/).

## Status

Work-in-progress

## Syntax

The error code is `invalidVerificationRelationship`.

## Definition

This DID Dereference error code is used to indicate that the specified DID URL query parameter [`requiredVerificationRelationship`](../parameters/required-verification-relationship.md) contains an invalid value.

## Examples

```json
{
	"@context": "https://w3id.org/did-resolution/v1",
	"contentStream": null,
	"dereferencingMetadata": {
		"error": "invalidVerificationRelationship"
	},
	"contentMetadata": {}
}
```

## Contribute

Contributions to this document can be discussed in the DIF I&D Working Group:

 * https://identity.foundation/working-groups/identifiers-discovery.html
 * https://dif.groups.io/g/id-wg/
