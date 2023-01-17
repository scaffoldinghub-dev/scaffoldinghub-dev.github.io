---
sidebar_position: 1
---

# Getting started 🛫

Get started with **scaffolding in less than 5 minutes**.

<img src="https://raw.githubusercontent.com/sjhorn/scaffolding/master/assets/scaffolding_full.png" width="200" height="200"/>



## Background

**Scaffolding** is based on [rails](https://guides.rubyonrails.org/v3.2/getting_started.html#getting-up-and-running-quickly-with-scaffolding) and [grails](https://docs.grails.org/5.2.5/guide/single.html#scaffolding) scaffolding.

Lots of ideas, structure and approach lifted directly from the documentation, source code and prior experience using the scaffolding approach in grails/rails to bootstrap CRUD web application. I thought - why not take these benefits to flutter / dart even if only to help quickly educate the patterns in building, testing and scaling a CRUD application. 

:::info Please note this has nothing to do with the flutter [Scaffold](https://api.flutter.dev/flutter/material/Scaffold-class.html) material class widget.
:::

Scaffolding is based on using templates to generate code either statically or dynamically. For both the system depends on [mason](https://docs.brickhub.dev) and the [implementation](https://github.com/sjhorn/mason_bricks) using mason is available to fork and edit.

Lets get started with an exmaple

## Static scaffolding - quick start 💥

```sh
# 🎯 Install mason from https://pub.dev
dart pub global activate mason_cli

# ⭐️ Create a flutter project
flutter create static_scaffolding
cd static_scaffolding

# 📚 Add the dependencies and initialise mason
flutter pub add equatable uuid flutter_bloc
mason init
mason add scaffolding

# 🚀 scaffold your app
mason make scaffolding --package static_scaffolding --feature contact \
--properties "String name = 'Scott', int age = 21, bool awesome = true"
flutter run
```

Well done your first app and hundreds of line of code auto generated and ready to be edited to your needs 🎉

Learn more about the [static scaffolding](category/static-scaffolding)

## Dynamic scaffolding - quick start 🚀

```sh
# ⭐️ Create a flutter project
flutter create static_scaffolding
cd static_scaffolding

# 📚 Add the dependencies and initialise mason
flutter pub add scaffolding equatable uuid flutter_bloc 
```

Create a simple abstract class in `lib/features/contact.dart`
```dart
abstract class Contact {
    String firstname = 'Scott';
    String lastname = 'Horn';
    int age = 21; // :)
    bool favourite = true;
}
```

Add the dynamic scaffolding config for build_runner to `build.yaml`
```yaml
targets:
  $default:
    builders:
      scaffolding|dynamicBuilder:
        generate_for: [lib/features/*.dart]
        enabled: true
```

Run `build_runner` either once off or in *watch* mode 
```sh
# 🚀 Start flutter build runnter in watch mode to dynaically scaffold your app
flutter pub run build_runner watch 
```
You will see a scaffold file `lib/features/contact.scaffold.dart` appear if all runs correctly

Call the scaffold code from your `main.dart` flutter file

```dart
import 'features/contact.scaffold.dart' as scaffold;

void main(List<String> args) => scaffold.main(args);
```

You can now create other abstract class or edit the original an hot restart your flutter app 🔥


Learn more about [dynamic scaffolding](category/dynamic-scaffolding)
