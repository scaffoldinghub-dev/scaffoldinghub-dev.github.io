---
sidebar_position: 3
description: Scaffolding your files for flutter
---

# Generating Scaffolding 🚀

The simplest scaffolding options generate a create, read, update and delete (CRUD) application and the home view. 

Let's do that from the command line using the prompts:

```sh
mason make scaffolding
? What is the package name of your flutter project? (scaffolding_sample) scaffolding_sample
? What is your feature name (eg. Todo, DiaryProject, contact) ? (feature1) feature1
? Enter property list in the following format "String firstname=Your first name, String lastname=Your suranme, bool registered=false" ? String firstname=Your first name, String lastname=Your suranme, bool registered=false
? Do you want unit tests generated? n
? Do you want to generate the home page / main function ? (y/N) y
```

This will then run scaffolding and list the files:

```sh
You have the following properties: [{name: firstname, type: String, defaultValue: 'Your first name', emptyValue: '', testValue: 'testString'}, {name: lastname, type: String, defaultValue: 'Your suranme', emptyValue: '', testValue: 'testString'}, {name: registered, type: bool, defaultValue: false, emptyValue: false, testValue: true}]
✓ Made brick scaffolding (0.1s)
✓ Generated 15 file(s):
 .../static_scaffolding_sample/lib/features/feature1/feature1.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/data/feature1_repository_impl.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/data/feature1_model.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/domain/feature1_repository.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/domain/feature1.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/presentation/views/feature1_edit_view.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/presentation/views/feature1_read_view.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/presentation/widgets/feature1_widget.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_edit_event.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_edit_bloc.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_edit_state.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_read_event.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_read_bloc.dart (new)
 .../static_scaffolding_sample/lib/features/feature1/presentation/bloc/feature1_read_state.dart (new)
 .../static_scaffolding_sample/lib/shared/presentation/list_table.dart (new)
✓ Running brick scaffolding_home (0.7s)
✓ Generated 2 file(s):
 .../static_scaffolding_sample/lib/main.dart (new)
 .../static_scaffolding_sample/lib/scaffold_app.dart (new)
 ```

 You now have a scaffolded application 🎉 - if you select the main.dart file you will be able to run the file and see screen similar to the ones below after you create a new contact. 

![Home Scaffolding](/img/home_scaffold.png) 
![Feature Scaffoling](/img/feature1_scaffold.png)

The file structure is as follows:
```
lib/
├─ main.dart
├─ scaffold_app.dart
├─ features/
│  └─ feature1/
│     ├─ data/
│     │  ├─ feature1_model.dart
│     │  └─ feature1_repository_impl.dart
│     ├─ domain/
│     │  ├─ feature1_repository.dart
│     │  └─ feature1.dart
│     └─ presentation/
│        ├─ bloc/
│        │  ├─ feature1_edit_bloc.dart
│        │  ├─ feature1_edit_event.dart
│        │  ├─ feature1_edit_state.dart
│        │  ├─ feature1_read_bloc.dart
│        │  ├─ feature1_read_event.dart
│        │  └─ feature1_read_state.dart
│        └─ views/
│           ├─ feature1_edit_view.dart
│           └─ feature1_read_view.dart
└─ shared/
   └─ presentation/
         └─ list_table.dart
```

Ok let's learn about more options. 