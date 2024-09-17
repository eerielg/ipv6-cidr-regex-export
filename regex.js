import cidrRegex from "cidr-regex";

let r = cidrRegex.v6({"exact":true});

console.log(r);
