# Extension Error Code: `notAllowedVerificationMethodType`

This specification defines a new error code, to be included in the [DID Spec Registries](https://w3c.github.io/did-spec-registries/).

## Status

Work-in-progress

## Syntax

The error code is `notAllowedVerificationMethodType`.

## Definition

This DID Resolution error code is used to indicate that a security policy has been triggered, and the DID document
contains a verification method with a type that is not allowed.

## Examples

```json
{
	"@context": "https://w3id.org/did-resolution/v1",
	"didDocument": null,
	"didResolutionMetadata": {
		"error": "notAllowedVerificationMethodType"
	},
	"didDocumentMetadata": {}
}
```

# DID Resolution Option: `overrideVerificationMethodTypePolicy`

This specification also defines a new DID Resolution Option, which can be used by a client to override
the behavior of the security policy.

Possible values:

* error: A result with error `notAllowedVerificationMethodType` is returned if the security policy is triggered.
* warn: A normal DID Resolution Result is returned, but a warning is included in the `didResolutionMetadata` field.
* ignore: The security policy is ignored, and a normal DID Resolution Result is returned.

## Contribute

Contributions to this document can be discussed in the DIF I&D Working Group:

 * https://identity.foundation/working-groups/identifiers-discovery.html
 * https://dif.groups.io/g/id-wg/
