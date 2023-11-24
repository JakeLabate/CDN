Throughout the schema framework utilization, an additional key called "_requiredKeys" is often utilized.This key is not recognized in the schema.org vocabulary or by any search engines. This key holds an array of key names used in the same schema object. For example:

https://gist.github.com/JakeLabate/789acd3a15cc5868cfa20122eea51ff2

https://gist.github.com/JakeLabate/f0684f8922fbf8faee9928ebf36090ae

When generating schema markup dynamically (using variables to populate values), the variables used in the JSON template are not always present. This results an empty value, in a key-value pairing.If the template is set up, such that a value in a key-value pair is only a single variable, and that variable is non-existent, it can cause a JSON syntax error, and prevent the rest of the schema markup code template from being constructed.This JavaScript code snippet solves this problem.Running a JSON through this function will return back the same JSON input with both the keys and the values for empty key-value pairs removed.This helps in:Resolving JSON syntax errorsMaintaining clean JSON codeIncreasing JSON parse speed

https://gist.github.com/JakeLabate/95dbe8d30d3017fa5e5d5f019787c84d

Input data can cause recursive object generation.A "Person" object might have the attribute "worksFor".The "worksFor" attribute might nest the object type "Organization".The "Organization" object might have the attribute "employees".The "employees" attribute might nest that original "Person" object.And so on, and so on...‍This function detects, and prevents this.‍This function removes these deeply nested recursive objects, and replaces them with their "@id" equivalent, only as deeply as needed to properly articulate the existing object / sub-object relationship.Here is an example of recursive mention:

https://gist.github.com/JakeLabate/bf5f540bdfc8c4a6593c0bd56b3d828e

And the following is the cleaned code (note an @id is held in place of the continually recursive objects). This maintains cyclical reference while minimizing code:

https://gist.github.com/JakeLabate/d9b17e46155b59df0cdbc62cc4e09aea

https://gist.github.com/JakeLabate/f886d7b992a7d31a58e3a8f510b6c229