# Extension Error Code: `notAllowedMethod`

This specification defines a new error code, to be included in the [DID Spec Registries](https://w3c.github.io/did-spec-registries/).

## Status

Work-in-progress

## Syntax

The error code is `notAllowedMethod`.

## Definition

This DID Resolution error code is used to indicate that a security policy has been triggered, and the DID method
is not allowed.

The DID Resolution Metadata MAY include additional information about why the security policy has been triggered.

## Examples

```json
{
	"@context": "https://w3id.org/did-resolution/v1",
	"didDocument": null,
	"didResolutionMetadata": {
		"error": "notAllowedMethod"
	},
	"didDocumentMetadata": {}
}
```

# DID Resolution Option: `overrideMethodPolicy`

This specification also defines a new DID Resolution Option.

## Definition

This DID Resolution Option can be used by a client to override the behavior of the security policy.

Possible values:

* `error`: A DID Resolution Result with error `notAllowedMethod` is returned if the security policy is triggered.
* `warn`: A normal DID Resolution Result is returned, but a warning is included in the `didResolutionMetadata` field.
* `ignore`: The security policy is ignored, and a normal DID Resolution Result is returned.

## Contribute

Contributions to this document can be discussed in the DIF I&D Working Group:

 * https://identity.foundation/working-groups/identifiers-discovery.html
 * https://dif.groups.io/g/id-wg/
