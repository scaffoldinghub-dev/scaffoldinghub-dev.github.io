---
sidebar_position: 4
description: scaffolding options for home and tests
---

# Generating options 🔧

Use mason allows you to either use the [interactive questions](#interactive-prompt), provide the [paramaters on the command line](#command-line-parameters) or in a [configuration json file](#configuration-json-file). 

We saw in the last step how to answer the questions for each. The full set of options are as follows:

| Variable         | Description                                                | Default                                   | Type     |
| -----------------| ---------------------------------------------------------- | ----------------------------------------- | -------- |
| `package`        | The name of the package this is generated into             | scaffolding_sample                        | `string` |
| `feature`        | The name of the feature                                    | feature1                                  | `string` |
| `properties`     | string of the properties of this feature (string,bool,num) |                                           | `string` |
| `generate_tests` | Generate units tests using scaffolding-tests brick         | true                                      | `boolean`   |
| `generate_home`  | Generate home/main files tests using scaffolding-main brick| false                                     | `boolean`   |


Each option typically takes a single word or true/false except the properties option. This option takes a string that has a special format to allow us to specify the properties of a domain entity/feature. 

The format is as follows:

```dart
Type name=defaultValue
```

If there is more than one property then they are separed by a comma as follows:

```dart
String firstname=Scott, String lastname=Horn, int age=25, bool registered=false
```

If this is specified on the command line it needs to be in double quotes as follows:

```sh
--properties "String firstname=Scott, String lastname=Horn, int age=25, bool registered=false"
```

Currently the dart types supported for scaffolding are `String, bool, int, double`. More will be added in a future version. 

We will look at the three ways to specify these when scaffolding next. 

## Interactive prompt
This was covered in the previous section and will add a quick summary example here:

```sh
mason make scaffolding
? What is the package name of your flutter project? (scaffolding_sample) static_scaffolding_sample
? What is your feature name (eg. Todo, DiaryProject, contact) ? (feature1) feature1
? Enter property list in the following format "String firstname=Your first name, String lastname=Your suranme, bool registered=false" ? String firstname=Your first name, String lastname=Your suranme, bool registered=false
? Do you want unit tests generated? n
? Do you want to generate the home page / main function ? (y/N) y
```

## Command line parameters

To specific the same options as for the interactive prompt we would run the following:
```sh
mason make scaffolding --package static_scaffolding_sample --feature feature1 \
    --properties "String firstname=Your first name, String lastname=Your suranme, bool registered=false" \
    --generate-tests false --generate-home true
```

## Configuration json file

The same for the configuration file with the namem `config.json`

```json
{
  "package": "static_scaffolding_sample",
  "feature": "feature1",
  "generate-tests": false,
  "generate-home": true,
  "properties": "String firstname=Your first name, String lastname=Your suranme, bool registered=false"
}
```

and this is run as:

```sh
mason make scaffolding -c config.json
```

## Test options

So far we have asked not to scaffold the unit tests. We will learn about automatically scaffolding our unit tests next. 