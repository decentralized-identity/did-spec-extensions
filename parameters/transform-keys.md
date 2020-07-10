# Extension DID Parameter: transform-keys

This specification defines a new DID parameter, to be included in the [DID Spec Registries](https://w3c.github.io/did-spec-registries/).

## Status

Work-in-progress

## Syntax

The parameter name is `transform-keys`. Possibles values are `jwk` and `jwks`.

## Definition

This DID parameter instructs a DID URL dereferencer to return the public keys in the DID document in
a specific format.

TODO

## Examples

 * `did:example:WRfXPg8dantKVubE3HX8pw?transform-keys=jwk`
 * `did:example:WRfXPg8dantKVubE3HX8pw?transform-keys=jwks`
 * `did:example:WRfXPg8dantKVubE3HX8pw?transform-keys=jwk#keys-1`

To get a DID resolution result with public keys transformed to JWK (use **transform-keys=jwk**):

```
curl -X GET "https://uniresolver.io/1.0/identifiers/did:sov:WRfXPg8dantKVubE3HX8pw;transform-keys=jwk"
curl -X GET "https://uniresolver.io/1.0/identifiers/did:btcr:xz35-jznz-q6mr-7q6;transform-keys=jwk"
curl -X GET "https://uniresolver.io/1.0/identifiers/did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6;transform-keys=jwk"
curl -X GET "https://uniresolver.io/1.0/identifiers/did:key:z6Mkfriq1MqLBoPWecGoDLjguo1sB9brj6wT3qZ5BxkKpuP6;transform-keys=jwk"
```

To get a DID document with public keys transformed to JWK (use **transform-keys=jwk** and Accept header):

```
curl -H "Accept: application/did+ld+json" -X GET "https://uniresolver.io/1.0/identifiers/did:sov:WRfXPg8dantKVubE3HX8pw;transform-keys=jwk"
curl -H "Accept: application/did+ld+json" -X GET "https://uniresolver.io/1.0/identifiers/did:btcr:xz35-jznz-q6mr-7q6;transform-keys=jwk"
curl -H "Accept: application/did+ld+json" -X GET "https://uniresolver.io/1.0/identifiers/did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6;transform-keys=jwk"
curl -H "Accept: application/did+ld+json" -X GET "https://uniresolver.io/1.0/identifiers/did:key:z6Mkfriq1MqLBoPWecGoDLjguo1sB9brj6wT3qZ5BxkKpuP6;transform-keys=jwk"
```

To get a JWK Set (use **transform-keys=jwks**):

```
curl -X GET "https://uniresolver.io/1.0/identifiers/did:sov:WRfXPg8dantKVubE3HX8pw;transform-keys=jwks"
curl -X GET "https://uniresolver.io/1.0/identifiers/did:btcr:xz35-jznz-q6mr-7q6;transform-keys=jwks"
curl -X GET "https://uniresolver.io/1.0/identifiers/did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6;transform-keys=jwks"
curl -X GET "https://uniresolver.io/1.0/identifiers/did:key:z6Mkfriq1MqLBoPWecGoDLjguo1sB9brj6wT3qZ5BxkKpuP6;transform-keys=jwks"
```

## Interaction with other DID Parameters

TODO

## Related Resources

 * https://identity.foundation/did-siop/#example-4
 * https://identity.foundation/did-siop/#example-8

## Contribute

Contributions to this document can be discussed in the DIF I&D Working Group:

 * https://identity.foundation/working-groups/identifiers-discovery.html
 * https://dif.groups.io/g/id-wg/
