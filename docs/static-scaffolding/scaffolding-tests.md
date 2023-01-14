---
sidebar_position: 5
description: scaffolding your unit tests
---

# Scaffolding Tests 🧪

One of the most interesting and time-saving elements of scaffolding is generating the unit tests to achive 100% coverage. This provide a great set of *boiler plate* examples to borrow from as you evolve your application away from the initial scaffold. 

[scaffolding_test](https://github.com/sjhorn/mason_bricks/scaffolding_test) is a option mason brick that is called when the option `--generate-tests` is true. 

To allow these unit test to work with our flutter project we have 2 exra dependencies - `bloc_test` and `mocktail`. Add those to the project as follows:

```sh
flutter pub add mocktail bloc_test --dev
```

To continue with the previous example, lets add unit tests and use the command parameters to do this. 

```sh
mason make scaffolding --package static_scaffolding_sample --feature feature1 \
    --properties "String firstname=Your first name, String lastname=Your suranme, bool registered=false" \
    --generate-tests true --generate-home true

```

Running this you will see a similar output to the following:

```sh
You have the following properties: [{name: firstname, type: String, defaultValue: 'Your first name', emptyValue: '', testValue: 'testString'}, {name: lastname, type: String, defaultValue: 'Your suranme', emptyValue: '', testValue: 'testString'}, {name: registered, type: bool, defaultValue: false, emptyValue: false, testValue: true}]
✓ Made brick scaffolding (0.1s)
✓ Generated 15 file(s):
  .../static_scaffolding_sample/lib/features/feature1/feature1.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/data/feature1_repository_impl.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/data/feature1_model.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/domain/feature1_repository.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/domain/feature1.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/presentation/views/feature1_edit_view.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/presentation/views/feature1_read_view.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/presentation/widgets/feature1_widget.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_edit_event.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_edit_bloc.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_edit_state.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_read_event.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_read_bloc.dart (identical)
  .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_read_state.dart (identical)
  .../static_scaffolding_sample/lib/shared/presentation/list_table.dart (identical)
✓ Compiled post_gen.dart (2.4s)
✓ Running brick scaffolding_home (0.7s)
✓ Generated 2 file(s):
  .../static_scaffolding_sample/lib/main.dart (identical)
  .../static_scaffolding_sample/lib/scaffold_app.dart (identical)
✓ Running brick scaffolding_test (0.7s)
✓ Generated 8 file(s):
  .../static_scaffolding_sample/test/features/feature1/data/feature1_repository_impl_test.dart (new)
  .../static_scaffolding_sample/test/features/feature1/data/feature1_model_test.dart (new)
  .../static_scaffolding_sample/test/features/feature1/domain/feature1_test.dart (new)
  .../static_scaffolding_sample/test/features/feature1/presentation/views/feature1_read_view_test.dart (new)
  .../static_scaffolding_sample/test/features/feature1/presentation/views/feature1_edit_view_test.dart (new)
  .../static_scaffolding_sample/test/features/feature1/presentation/widgets/feature1_widget_test.dart (new)
  .../static_scaffolding_sample/test/features/feature1/presentation/bloc/feature1_read_bloc_test.dart (new)
  .../static_scaffolding_sample/test/features/feature1/presentation/bloc/feature1_edit_bloc_test.dart (new)
✓ Running brick scaffolding_home_test (0.6s)
✓ Generated 1 file:
  .../static_scaffolding_sample/test/scaffold_app_test.dart (new)

```

Note the new files now created under `test/`. Given we also specified to generate the home scaffold we also go the unit test for this.

The full list of addtional files are:
```
test/
├─ scaffold_app_test.dart
└─ features/
   └─ feature1/
      ├─ data/
      │  ├─ feature1_model_test.dart
      │  └─ feature1_repository_impl_test.dart
      ├─ domain/
      │  └─ feature1_test.dart
      └─ presentation/
         ├─ bloc/
         │  ├─ feature1_edit_bloc_test.dart
         │  └─ feature1_read_bloc_test.dart
         └─ views/
            ├─ feature1_edit_view_test.dart
            └─ feature1_read_view_test.dart
```

To show our tests in action we can run them and generate the coverage report as follows:

```sh
flutter test --coverage && genhtml -p ./lib -o coverage coverage/lcov.info && open coverage/index.html
```


:::info Note this depends on `lcov` 

On mac this is as simple as `brew install lcov` if you have install [homebrew](https://brew.sh)
:::


The result of running this command is

```sh
00:10 +62: All tests passed!                                                                                                                                  
Reading data file coverage/lcov.info
Resolved relative source file path "lib/features/feature1/data/feature1_model.dart" with CWD to "/Users/shorn/dev/static_scaffolding_sample/lib/features/feature1/data/feature1_model.dart".
Found 15 entries.
Using user-specified filename prefix "./lib"
Writing .css and .png files.
Generating output.
Processing file .../static_scaffolding_sample/lib/scaffold_app.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/data/feature1_model.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/data/feature1_repository_impl.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/domain/feature1.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/domain/feature1_repository.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_read_event.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_read_bloc.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_read_state.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_edit_event.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_edit_state.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_edit_bloc.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/presentation/views/feature1_read_view.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/presentation/views/feature1_edit_view.dart
Processing file .../static_scaffolding_sample/lib/features/feature1/presentation/widgets/feature1_widget.dart
Processing file .../static_scaffolding_sample/lib/shared/presentation/list_table.dart
Writing directory view page.
Overall coverage rate:
  lines......: 100.0% (394 of 394 lines)
  functions..: no data found
```

and the following will show in a browser window

![Test Coverage](/img/test_coverage.png)


Congratulations 🥳 421 lines and 100% coverage. You can edit these files to learn more about how they are unit tested and as you change the scaffold you are in a good place to consider Test Driven Development (TDD) with some great examples. 