---
sidebar_position: 8
description: editing the scaffolding templates
---

# Editing Scaffolding Templates ✏️

In a future version, I plan to look for the templates a project folder and allow overriding the defaults that come with the bricks. 

For now, however you will need to clone the desired bricks repo and edit the mustache templates. 

The structure is well documented in [mason creating brick documentation](https://docs.brickhub.dev/category/creating-bricks).

The key structure for template are in the files under the `__brick__` folder

```
├── brick.yaml
└── __brick__
    └──<templates files and directories>
```

## Understanding scaffolding and scaffolding_test bricks

For converting the properties string into fields and for bringing in optional bricks, the source code for the bricks leverages the hooks  `hooks/pre_gen.dart` and `hooks/post_gen.dart`. 

The result is for `scaffolding` and `scaffolding_test` the following variables are avaialble to the templates

| Variable        | Type           | Examples                                                                               | 
| ----------------| ---------------| ---------------------------------------------------------------------------------------|
| package         | String         | static_scaffolding_sample                                                              |       
| feature         | String         | feature1                                                                               | 
| properties      | List&lt;Map&gt;| [{name: name, type: String, defaultValue: '', emptyValue: '', testValue: 'testString'}]| 
| generate-test   | boolean        | true                                                                                   | 
| generate-home   | boolean        | true                                                                                   | 

A sample of the template for [`{{feature}}_repoistory_impl.dart`](https://raw.githubusercontent.com/sjhorn/mason_bricks/main/bricks/scaffolding/__brick__/lib/features/%7B%7Bfeature%7D%7D/data/%7B%7Bfeature%7D%7D_repository_impl.dart) shows there variables in use. Also copied below:

```dart
import 'dart:async';
import 'package:{{package}}/features/{{feature}}/{{feature}}.dart';

class {{feature.pascalCase()}}RepositoryImpl extends {{feature.pascalCase()}}Repository {

  final Map<String, {{feature.pascalCase()}}Model> _store = {};

  @override
  Future<void> create({{feature.pascalCase()}} {{feature}}) async {
    _store[{{feature}}.id] = {{feature.pascalCase()}}Model.from{{feature.pascalCase()}}({{feature}});
    addToStream({{feature.pascalCase()}}ChangeInfo(type: {{feature.pascalCase()}}ChangeType.create, {{feature}}s: [{{feature}}]));
  }

   @override
  Future<void> readMore([bool refresh = true]) async {
    await _get{{feature.pascalCase()}}sFromStore();
  }

  @override
  Future<void> update({{feature.pascalCase()}} {{feature}}) async {
    _store[{{feature}}.id] = {{feature.pascalCase()}}Model.from{{feature.pascalCase()}}({{feature}});
    addToStream({{feature.pascalCase()}}ChangeInfo(type: {{feature.pascalCase()}}ChangeType.update, {{feature}}s: [{{feature}}]));
  }

  @override
  Future<void> delete({{feature.pascalCase()}} {{feature}}) async {
    _store.remove({{feature}}.id);
    addToStream({{feature.pascalCase()}}ChangeInfo(type: {{feature.pascalCase()}}ChangeType.delete, {{feature}}s: [{{feature}}]));
  }

  Future<void> _get{{feature.pascalCase()}}sFromStore() async {
    List<{{feature.pascalCase()}}> {{feature}}List = _store.entries
        .map((e) => e.value.to{{feature.pascalCase()}}())
        .toList();
    addToStream({{feature.pascalCase()}}ChangeInfo(
        type: {{feature.pascalCase()}}ChangeType.read,
        {{feature}}s: {{feature}}List,
        totalCount: {{feature}}List.length));
  }
}

```

## Understanding scaffolding_home and scaffolding_home_test

The variables and tempalte for these bricks are much simpler. Table below shows and the sample code shows how this can be overridden. 

| Variable        | Type           | Examples                                                                               | 
| ----------------| ---------------| ---------------------------------------------------------------------------------------|
| package         | String         | static_scaffolding_sample                                                              |       
| features        | [String]       | [feature1,feature2]                                                                    | 

A sample of the template for [`scaffold_app.dart`](https://raw.githubusercontent.com/sjhorn/mason_bricks/main/bricks/scaffolding_home/__brick__/lib/scaffold_app.dart)

```dart
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
{{#features}}import 'package:{{package}}/features/{{.}}/{{.}}.dart';
{{/features}}
class App extends StatelessWidget {
  final NavigatorObserver? navigatorObserver;
  const App({super.key, this.navigatorObserver});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      navigatorObservers: navigatorObserver != null ? [navigatorObserver!] : [],
      debugShowCheckedModeBanner: false,
      title: 'Scaffold App',
      home: Builder(builder: (context) {
        return Scaffold(
          appBar: AppBar(title: const Text('Features')),
          body: ListView(children: [
              {{#features}}ListTile(
                key: const Key('{{.}}-feature-tile'),
                leading: const Icon(Icons.view_list, color: Colors.green),
                horizontalTitleGap: 0,
                title: const Text('{{#sentenceCase}}{{.}}{{/sentenceCase}}'),
                onTap: () => Navigator.of(context).push({{#pascalCase}}{{.}}{{/pascalCase}}ReadView.route()),
              ),{{/features}}
          ]),
        );
      }),
    );
  }
}

Widget appWidget() {
  {{#features}}final repo{{#pascalCase}}{{.}}{{/pascalCase}} = {{#pascalCase}}{{.}}{{/pascalCase}}RepositoryImpl();
  {{/features}}return 
    MultiRepositoryProvider(
      providers: [
        {{#features}}RepositoryProvider<{{#pascalCase}}{{.}}{{/pascalCase}}Repository>.value(
          value: repo{{#pascalCase}}{{.}}{{/pascalCase}},
        ),
      {{/features}}],
      child: const App(),
  );
}
```

## Clone locally and using

To clone the scaffolding bricks and use run the following:

```sh
mkdir ~/dev
cd ~/dev
git clone https://github.com/sjhorn/mason_bricks.git
```

Then to use the package in place of the orginal brick, change to the project directory and intialise as follows:

```
mason add scaffolding --path ~/dev/mason_broclscaffolding
```

Then run as explained in the previous pages. .

